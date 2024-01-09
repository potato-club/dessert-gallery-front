import React from "react";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import ChatList from "./components/ChatList";
import ChatRoom from "./components/ChatRoom";

function ChatPage() {
  return (
    <Wrapper>
      <SideBar />
      <ChatList />
      <ChatRoom />
    </Wrapper>
  );
}

export default ChatPage;

const Wrapper = styled.div`
  @media screen and (min-width: 1920px) {
    width: 1920px;
    height: 1080px;
  }
  @media screen and (max-width: 1919px) {
    width: 1280px;
    height: 720px;
  }
  font-family: noto-sans-cjk-kr, sans-serif;
  position: relative;
  display: flex;
  border-right: 1px solid #dedede;
`;
