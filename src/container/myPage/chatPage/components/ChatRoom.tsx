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
import HeaderBottom from "../components/HeaderBottom";
import useChatWebsocket from "../../../../hooks/useChatWebsocket";

export type messageObjectType = {
  chatRoomId: number;
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

  const getNewChat = (newChatHistoryState: messageObjectType) => {
    setChatHistoryState((prevChatList) => {
      if (prevChatList) {
        return [...prevChatList, newChatHistoryState];
      } else {
        return [newChatHistoryState];
      }
    });
  };

  const { getAccessToken } = useTokenService();

  const clientRef = useRef<any>({});

  const { register, getValues, setValue, reset } = useForm();

  const {
    connectHandler,
    messageHandler,
    onClickReservation,
    onClickReview,
    disconnectHandler,
  } = useChatWebsocket(chatHistoryState, getNewChat, userInfo);

  const messageCheckHandler = async () => {
    const chatHistory = await getChatHistory(roomInfoState.roomId);
    console.log(chatHistory);
    setChatHistoryState(chatHistory.chatList);
  };

  useEffect(() => {
    console.log(roomInfoState.roomId);
    console.log(roomInfoState);

    messageCheckHandler();
    connectHandler();
    console.log(chatHistoryState);

    return () => {
      disconnectHandler();
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
            <HeaderBottom roomInfoState={roomInfoState} />
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
                    event.preventDefault();
                    if (event.shiftKey) {
                      // 시프트 엔터 누를 시 개행되도록 하려고 시도중
                      return;
                    }
                    messageHandler(getValues("message")); // Handle sending the message
                    setValue("message", ""); // Clear the textarea
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
  position: relative;
  z-index: 5;
  background-color: white;
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
