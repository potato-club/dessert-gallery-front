import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChatList from "./components/ChatList";
import ChatRoom from "./components/ChatRoom";
import { getChatRoom, getUserInfo } from "../../../apis/controller/chatPage";
import { loginPageApi } from "../../../apis/controller/loginPage";

export type userInfoType = {
  nickname: string;
  loginType: "NORMAL" | "KAKAO";
  userRole: "USER" | "MANAGER";
};

type roomInfoType = {
  roomId: number;
  storeName: string;
  customerName: string;
  thumbnailMessage: string;
  messageType: string;
};

function ChatPage() {
  const [roomIdState, setRoomIdState] = useState<number>();
  const getRoomIdState = (id: number) => {
    setRoomIdState(id);
  };
  const [chatRoomList, setChatRoomList] = useState<roomInfoType[]>();
  const [userInfoState, setUserInfoState] = useState<userInfoType>();
  const [partnerNameState, setPartnerNameState] = useState<string>();

  const fetchChatRoom = async () => {
    const chatRoom = await getChatRoom();
    console.log(chatRoom);
    setChatRoomList(chatRoom);
  };

  const fetchUserInfo = async () => {
    const userInfo = await getUserInfo();
    console.log(userInfo);

    setUserInfoState(userInfo);
  };

  const getPartnerNameState = (partnerName: string) => {
    setPartnerNameState(partnerName);
  };

  useEffect(() => {
    fetchChatRoom();
    fetchUserInfo();
  }, []);

  return (
    <Layout>
      <Wrapper>
        <ChatList
          chatRoomList={chatRoomList}
          getRoomIdState={getRoomIdState}
          getPartnerNameState={getPartnerNameState}
          userInfo={userInfoState}
        />
        <ChatRoom
          roomIdState={roomIdState}
          userInfo={userInfoState}
          partnerName={partnerNameState}
        />
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
