import { useEffect, useRef, useState, createContext, useContext } from "react";
import { useTokenService } from "../../../../hooks/useTokenService";
import SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";
import { useRoomInfoState } from "../../../../recoil/chat/roomInfoStateAtom";
import { userInfoType } from "../ChatPage";
import { messageObjectType } from "../components/ChatRoom";
import { useChatHistoryState } from "../../../../recoil/chat/chatHistoryState";

const StompClientContext = createContext(
  {} as {
    connectHandler: () => void;
    disconnectHandler: () => void;
    messageHandler: (message: string) => void;
    onClickReservation: (message: string) => void;
    onClickReview: (message: string) => void;
  }
);

export const useStompClientContext = () => useContext(StompClientContext);

export function StompClientProvider({
  children,
  userInfo,
}: {
  children: any;
  userInfo?: userInfoType;
}) {
  const [roomInfoState, setRoomInfoState] = useRoomInfoState();
  const [chatHistoryState, setChatHistoryState] = useChatHistoryState();
  const { getAccessToken } = useTokenService();

  const getNewChat = (newChatHistoryState: messageObjectType) => {
    setChatHistoryState((prevChatList) => {
      if (prevChatList) {
        return [...prevChatList, newChatHistoryState];
      } else {
        return [newChatHistoryState];
      }
    });
  };

  const clientRef = useRef<any>({});

  const connectHandler = () => {
    if (window !== undefined) {
      clientRef.current = new StompJs.Client({
        brokerURL: "wss://api.dessert-gallery.site/ws/chat/websocket",
        debug: function (str) {
          console.log(str);
        },
        // webSocketFactory: () => {
        //   return new SockJS(
        //     "https://api.dessert-gallery.site/ws/chat"
        //   ) as WebSocket;
        // },
        connectHeaders: { Authorization: getAccessToken() },
        reconnectDelay: 5000, //자동 재연결
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      });
      clientRef.current.onConnect = function (frame: any) {
        clientRef.current.subscribe(
          `/sub/${roomInfoState.roomId}`,
          messageReceiveHandler
        );
        console.log("연결성공", frame);
      };
      clientRef.current.onWebSocketError = (err: any) => {
        console.log("웹소켓 에러");
        console.log(err);
      };
      clientRef.current.onStompError = function (frame: any) {
        console.log("브로커 에러: ", frame.headers["message"]);
        console.log("추가 정보: " + frame.body);
      };
      clientRef.current.activate();
    }
  };

  const disconnectHandler = () => {
    clientRef.current.deactivate();
  };

  const messageHandler = (message: string) => {
    var today = new Date();

    var year = today.getFullYear();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var day = ("0" + today.getDate()).slice(-2);

    var dateTime = year + "-" + month + "-" + day;

    console.log(userInfo?.nickname);

    clientRef.current.publish({
      destination: "/pub/chat",
      body: JSON.stringify({
        chatRoomId: roomInfoState.roomId,
        message: message,
        messageType: "CHAT",
        sender: userInfo?.nickname,
        dateTime: dateTime,
      }),
      headers: { Authorization: getAccessToken() },
    });
  };

  const messageReceiveHandler = (messageResponse: any) => {
    const messageBody: messageObjectType = JSON.parse(messageResponse.body);
    console.log(messageResponse.body);

    const { chatRoomId, sender, message, messageType, dateTime } = messageBody;
    const newChat = {
      chatRoomId,
      sender,
      message,
      messageType,
      dateTime,
    };
    console.log(newChat);

    getNewChat(newChat);
  };

  const onClickReservation = (message: string) => {
    clientRef.current.publish({
      destination: "/pub/chat",
      // skipContentLengthHeader: true,
      body: JSON.stringify({
        chatRoomId: roomInfoState.roomId,
        message: `${message}`,
        messageType: "RESERVATION",
        sender: userInfo?.nickname,
      }),
      headers: { Authorization: getAccessToken() },
    });
  };

  const onClickReview = () => {
    clientRef.current.publish({
      destination: "/pub/chat",
      // skipContentLengthHeader: true,
      body: JSON.stringify({
        chatRoomId: roomInfoState.roomId,
        message: `${"user"}님, 디저트는 잘 받으셨나요? 
            만족하셨다면 후기를 작성해주세요`,
        messageType: "REVIEW",
        sender: userInfo?.nickname,
      }),
      headers: { Authorization: getAccessToken() },
    });
  };

  const chatMethod = {
    connectHandler,
    messageHandler,
    onClickReservation,
    onClickReview,
    disconnectHandler,
  };
  return (
    <StompClientContext.Provider value={chatMethod}>
      {children}
    </StompClientContext.Provider>
  );
}
