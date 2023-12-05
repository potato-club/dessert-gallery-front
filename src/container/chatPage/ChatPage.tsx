import React from "react";
import styled from "styled-components";
import ChatList from "./components/ChatList";
import ChatRoom from "./components/ChatRoom";

function ChatPage() {
  return (
    <Wrapper>
      <ChatList />
      <ChatRoom />
    </Wrapper>
  );
}

export default ChatPage;

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
