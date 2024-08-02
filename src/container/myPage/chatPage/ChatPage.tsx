import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChatList from "./components/ChatList";
import ChatRoom from "./components/ChatRoom";
import { getChatRoom, getUserInfo } from "../../../apis/controller/chatPage";
import { loginPageApi } from "../../../apis/controller/loginPage";
import { StompClientProvider } from "./context/StompClientProvider";
import { useRoomInfoState } from "../../../recoil/chat/roomInfoStateAtom";

export type userInfoType = {
  nickname: string;
  loginType: "NORMAL" | "KAKAO";
  userRole: "USER" | "MANAGER";
};

export type roomInfoType = {
  roomId: number;
  storeName: string;
  customerName: string;
  lastChatDatetime: string;
  thumbnailMessage: string;
  storeId: number;
};

function ChatPage() {
  const [chatRoomList, setChatRoomList] = useState<roomInfoType[]>();
  const [userInfoState, setUserInfoState] = useState<userInfoType>();
  const [roomInfoState, setRoomInfoState] = useRoomInfoState();

  const fetchChatRoom = async () => {
    const chatRoom = await getChatRoom();
    console.log(chatRoom);
    setChatRoomList(chatRoom.chatList);
    setChatRoomList(chatRoom.chatList);
  };

  const fetchUserInfo = async () => {
    const userInfo = await getUserInfo();
    console.log(userInfo);

    setUserInfoState(userInfo);
  };

  useEffect(() => {
    fetchChatRoom();
    fetchUserInfo();
    return () => {
      setRoomInfoState({
        roomId: 0,
        storeId: 0,
        partnerName: "",
      });
    };
  }, []);

  return (
    <Layout>
      <Wrapper>
        <ChatList chatRoomList={chatRoomList} userInfo={userInfoState} />
        <StompClientProvider userInfo={userInfoState}>
          {roomInfoState.roomId === 0 ? (
            <NoItemAlert>선택된 채팅방이 없습니다.</NoItemAlert>
          ) : (
            <ChatRoom userInfo={userInfoState} />
          )}
        </StompClientProvider>
      </Wrapper>
    </Layout>
  );
}

export default ChatPage;

const Layout = styled.div`
  width: 100%;
  @media screen and (min-width: 1920px) {
    height: 100%;
  }
  @media screen and (max-width: 1919px) {
    height: 882px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  @media screen and (min-width: 1920px) {
    width: 1590px;
    height: 1080px;
  }
  @media screen and (max-width: 1919px) {
    width: 950px;
    height: 720px;
  }
  font-family: noto-sans-cjk-kr, sans-serif;
  position: relative;
  display: flex;
  background-color: #ffffff;
  border-right: 1px solid #dedede;
`;

const NoItemAlert = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #a09f9f;
`;
