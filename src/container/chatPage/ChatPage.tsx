import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChatList from "./components/ChatList";
import ChatRoom from "./components/ChatRoom";
import { getChatRoom, getStoreInfo } from "../../apis/controller/chatPage";
import { loginPageApi } from "../../apis/controller/loginPage";

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

  useEffect(() => {
    const fetchChatRoom = async () => {
      const chatRoom = await getChatRoom();
      console.log(chatRoom);
      setChatRoomList(chatRoom);
    };
    fetchChatRoom();
  }, []);

  return (
    <Layout>
      <Wrapper>
        <ChatList chatRoomList={chatRoomList} getRoomIdState={getRoomIdState} />
        <ChatRoom roomIdState={roomIdState} />
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
