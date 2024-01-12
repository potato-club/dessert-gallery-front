import React from "react";
import styled from "styled-components";

function ChatItem({
  myChat,
  message,
  timestamp,
}: {
  myChat: boolean;
  message: string;
  timestamp: string;
}) {
  return (
    <Wrapper myChat={myChat}>
      {myChat ? (
        <>
          <Timestamp myChat={myChat}>오전 9:30</Timestamp>
          <Message myChat={myChat}>
            {message}
            {/* <MessageButton>후기 게시판 보러가기</MessageButton> */}
          </Message>
          <Profile />
        </>
      ) : (
        <>
          <Profile />
          <Message myChat={myChat}>
            {message}
            {/* <MessageButton>후기 게시판 보러가기</MessageButton> */}
          </Message>
          <Timestamp myChat={myChat}>오전 9:30</Timestamp>
        </>
      )}
    </Wrapper>
  );
}

export default ChatItem;

const Wrapper = styled.div<{ myChat: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.myChat ? "end" : "")};
`;

const Profile = styled.div`
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background-color: #fdc886;
  margin: 0 14px;
`;

const Message = styled.div<{ myChat: boolean }>`
  display: flex;
  flex-direction: column;
  width: 196px;
  padding: 7px 14px;
  margin: 19px 0 15px 0;
  background-color: ${(props) => (props.myChat ? "#FDC886" : "#FCF0E1")};
  font-size: 10px;
  border-radius: ${(props) =>
    props.myChat ? "15px 0 15px 15px" : "0 15px 15px 15px"};
`;

const MessageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ff8d00;
  border-radius: 6px;
  color: #ff6f00;
  background-color: #fffdf9;
  width: 168px;
  height: 25px;
  margin-top: 11px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
`;

const Timestamp = styled.div<{ myChat: boolean }>`
  display: flex;
  align-items: end;
  height: 100%;
  margin: ${(props) => (props.myChat ? "0 9px 11px 0" : "0 0 11px 9px")};
  color: #828282;
  font-size: 9px;
`;
