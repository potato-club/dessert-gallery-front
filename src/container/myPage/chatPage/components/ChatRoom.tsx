import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChatItem from "./ChatItem";
import SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";
import { useTokenService } from "../../../../hooks/useTokenService";
import { getChatHistory } from "../../../../apis/controller/chatPage";
import { userInfoType } from "../ChatPage";
import { useRoomInfoState } from "../../../../recoil/chat/roomInfoStateAtom";
import { deleteChatRoom } from "../../../../apis/controller/chatPage";
import { useForm } from "react-hook-form";

type messageObjectType = {
  roomId: number;
  sender: string;
  message: string;
  messageType: "CHAT" | "RESERVEATION" | "REVIEW";
  dateTime: string;
};

function ChatRoom({ userInfo }: { userInfo?: userInfoType }) {
  const [roomInfoState, setRoomInfoState] = useRoomInfoState();
  const [chatHistoryState, setChatHistoryState] = useState<messageObjectType[]>(
    []
  );
  const { getAccessToken } = useTokenService();

  const clientRef = useRef<any>({});

  const { register, getValues, setValue, reset } = useForm();

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
          messageCheckHandler
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

  const messageHandler = (message: string) => {
    clientRef.current.publish({
      destination: "/pub/chat",
      // skipContentLengthHeader: true,
      body: JSON.stringify({
        chatRoomId: roomInfoState.roomId,
        message: message,
        messageType: "CHAT",
        sender: userInfo?.nickname,
      }),
      headers: { Authorization: getAccessToken() },
    });
  };

  const messageReceiveHandler = (messageResponse: any) => {
    const messageBody: messageObjectType = JSON.parse(messageResponse.body);
    const { roomId, sender, message, messageType, dateTime } = messageBody;
    const newChat = {
      roomId,
      sender,
      message,
      messageType,
      dateTime,
    };
    console.log(newChat);

    setChatHistoryState([...chatHistoryState, newChat]);
  };

  const messageCheckHandler = async () => {
    if (roomInfoState.roomId !== 0) {
      const chatHistory = await getChatHistory(roomInfoState.roomId);
      console.log("채팅 목록", chatHistory.chatList);
      console.log("이전 채팅 날짜", chatHistory.lastDatetime);
      setChatHistoryState(chatHistory.chatList);
    }
  };

  const onClickReservation = () => {
    clientRef.current.publish({
      destination: "/pub/chat",
      // skipContentLengthHeader: true,
      body: JSON.stringify({
        chatRoomId: roomInfoState.roomId,
        message: `${"user"}님의 예약이 확정되었습니다.`,
        messageType: "RESERVEATION",
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

  useEffect(() => {
    console.log(roomInfoState.roomId);
    console.log(roomInfoState);

    messageCheckHandler();
    connectHandler();
    return () => {
      clientRef.current.deactivate();
    };
  }, [roomInfoState]);

  return (
    <Wrapper>
      {roomInfoState.roomId === 0 ? (
        <NoItemAlert>선택된 채팅방이 없습니다.</NoItemAlert>
      ) : (
        <>
          <Header>
            <HeaderTop>
              <Profile>
                <ProfileImage />
                <PartnerName>
                  {roomInfoState.partnerName}
                  <PartnerNameHelper>님</PartnerNameHelper>
                </PartnerName>
              </Profile>
              <OptionButton
                onClick={() => deleteChatRoom(roomInfoState.roomId)}
              >
                {[1, 2, 3].map((index) => (
                  <Dot key={index}></Dot>
                ))}
              </OptionButton>
            </HeaderTop>
            <HeaderBottom>
              <Product>
                {/* <ProductImage />
                <ProductName>상큼오독 산딸기</ProductName>
                <ProductPrice>34,000원</ProductPrice> */}
              </Product>
              <ButtonDiv userRole={userInfo?.userRole}>
                <Button onClick={onClickReservation}>예약 확정</Button>
                <Button onClick={onClickReview}>픽업 완료</Button>
              </ButtonDiv>
            </HeaderBottom>
          </Header>
          <Contents>
            {chatHistoryState?.map((item: any, index) => (
              <ChatItem
                key={index}
                messageType={item.messageType}
                myChat={userInfo?.nickname === item.sender}
                message={item.message}
                timestamp={item.dateTime}
              ></ChatItem>
            ))}
          </Contents>
          <Bottom>
            <TextboxDiv>
              <Textbox
                placeholder="메세지를 입력해주세요"
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    messageHandler(getValues("message"));
                    setValue("message", "");
                  }
                }}
                {...register("message")}
              ></Textbox>
              <SendButtonDiv>
                <SendButton
                  onClick={() => {
                    messageHandler(getValues("message"));
                    setValue("message", "");
                  }}
                >
                  전송
                </SendButton>
              </SendButtonDiv>
            </TextboxDiv>
          </Bottom>
        </>
      )}
    </Wrapper>
  );
}

export default ChatRoom;

const Wrapper = styled.div`
  @media screen and (min-width: 1920px) {
    width: 1034px;
    height: 100%;
  }
  @media screen and (max-width: 1919px) {
    width: 618px;
    height: 100%;
  }
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid #dedede;
`;

const Header = styled.div`
  width: 100%;
  height: 124px;
`;

const HeaderTop = styled.div`
  width: 100%;
  height: 74px;
  padding: 14px 34px 13px;
  border-bottom: 1px solid #dedede;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 47px;
  height: 47px;
  background-color: #fcf0e1;
  border-radius: 50px;
`;

const PartnerName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 13px;
  height: 21px;
  font-weight: bold;
  @media screen and (min-width: 1920px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1919px) {
    font-size: 14px;
  }
`;

const PartnerNameHelper = styled.div`
  font-size: 10px;
  color: #828282;
  margin-left: 4px;
  @media screen and (min-width: 1920px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1919px) {
    font-size: 10px;
  }
`;

const OptionButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 15px;
  width: 3px;
  border: none;
  background: none;
  cursor: pointer;
`;

const Dot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50px;
  background-color: #828282;
`;

const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 11px 72px 11px 34px;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

// const ProductImage = styled.div`
//   width: 28px;
//   height: 28px;
//   background-color: #fcf0e1;
// `;

// const ProductName = styled.div`
//   height: 15px;
//   max-width: 156px;
//   font-size: 10px;
//   margin: 0 10px;
// `;

// const ProductPrice = styled.div`
//   height: 15px;
//   font-size: 10px;
//   font-weight: bold;
// `;

const ButtonDiv = styled.div<{ userRole?: "USER" | "MANAGER" }>`
  display: ${(props) => (props.userRole === "MANAGER" ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1920px) {
    width: 269px;
  }
  @media screen and (max-width: 1919px) {
    width: 202px;
  }
`;

// 그림자 버전 버튼
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  background-color: FCF6EE;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  @media screen and (min-width: 1920px) {
    width: 122px;
    height: 32px;
    font-size: 12px;
  }
  @media screen and (max-width: 1919px) {
    width: 92px;
    height: 24px;
    font-size: 9px;
  }
`;

const Contents = styled.div`
  @media screen and (min-width: 1920px) {
    height: 750px;
  }
  @media screen and (max-width: 1919px) {
    height: 466px;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dedede;
  overflow: auto;
  padding: 15px 20px 0;
`;

const Bottom = styled.div`
  @media screen and (min-width: 1920px) {
    height: 206px;
  }
  @media screen and (max-width: 1919px) {
    height: 130px;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px;
`;

const TextboxDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 2px solid #ff6f00;
  padding: 10px 15px;
  border-radius: 7px;
`;

const Textbox = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 7px;
  resize: none;
  outline: none;
  font-family: noto-sans-cjk-kr, sans-serif;
  ::placeholder {
    color: #828282;
  }
  @media screen and (min-width: 1920px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1919px) {
    font-size: 11px;
  }
`;

const SendButtonDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dedede;
  border-radius: 7px;
  margin-left: 15px;
  border: none;
  background-color: FCF6EE;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-family: noto-sans-cjk-kr, sans-serif;
  cursor: pointer;
  @media screen and (min-width: 1920px) {
    width: 67px;
    height: 29px;
    font-size: 12px;
  }
  @media screen and (max-width: 1919px) {
    width: 50px;
    height: 22px;
    font-size: 9px;
  }
`;

const NoItemAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #a09f9f;
`;
