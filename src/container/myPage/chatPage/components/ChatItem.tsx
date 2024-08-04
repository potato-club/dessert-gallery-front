import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { useRoomInfoState } from "../../../../recoil/chat/roomInfoStateAtom";
import Image from "next/image";

function ChatItem({
  myChat,
  message,
  timestamp,
  messageType,
}: {
  myChat: boolean;
  message: string;
  timestamp: string;
  messageType: "CHAT" | "RESERVATION" | "REVIEW" | "BOARD";
}) {
  const [roomInfoState, setRoomInfoState] = useRoomInfoState();

  const parsedMessage =
    messageType === "BOARD" ? message.split("/boardInfoString")[0] : null;

  // /galleryBoard/3?boardId=9
  const parsedBoardId =
    messageType === "BOARD"
      ? message.split("/boardInfoString")[1].split("&")[0]
      : null;

  const parsedThumbnail =
    messageType === "BOARD"
      ? message.split("/boardInfoString")[1].split("&")[1].split("=")[1]
      : "";

  const router = useRouter();

  const onclickMessageButton = () => {
    if (messageType === "BOARD") {
      let select = confirm("해당 게시물로 이동하겠습니까?");
      if (select) {
        router.push(`/galleryBoard/${roomInfoState.storeId}?${parsedBoardId}`);
      }
    } else if (messageType === "REVIEW") {
      router.push("/myPage/review");
    }
  };

  const messageParse = () => {
    if (messageType === "BOARD") {
      return parsedMessage;
    } else {
      return message;
    }
  };

  return (
    <Wrapper myChat={myChat}>
      {myChat ? (
        <>
          <Timestamp myChat={myChat}>{timestamp}</Timestamp>
          <Message myChat={myChat}>
            {parsedThumbnail !== "" ? (
              <MessageThumbnailDiv
                messageType={messageType}
                myChat={myChat}
                onClick={() => {
                  let select = confirm("해당 게시물로 이동하겠습니까?");
                  if (select) {
                    router.push(
                      `/galleryBoard/${roomInfoState.storeId}?${parsedBoardId}`
                    );
                  }
                }}
              >
                <ThumbnailImage
                  src={parsedThumbnail ? parsedThumbnail : ""}
                  alt="thumbnail"
                  layout="fill"
                  style={{ borderRadius: myChat ? "15px 0 0 0" : "0 15px 0 0" }}
                ></ThumbnailImage>
              </MessageThumbnailDiv>
            ) : (
              <></>
            )}

            <MessageContents>
              <MessageTypeDiv>
                {/* [예약 확정] */}
                {messageType === "RESERVATION"
                  ? "[예약 확정]"
                  : messageType === "REVIEW"
                  ? "[픽업 완료]"
                  : null}
              </MessageTypeDiv>
              {messageParse()}
              <MessageButtonDiv>
                <MessageButton
                  messageType={messageType}
                  onClick={onclickMessageButton}
                >
                  {/* 메세지 타입이 "CHAT" 혹은 "RESERVATION" 일때는 버튼이 보이지 않음*/}
                  {messageType === "BOARD"
                    ? "가게 게시판 보러가기"
                    : "후기 작성하러 가기"}
                </MessageButton>
              </MessageButtonDiv>
            </MessageContents>
          </Message>
          <Profile />
        </>
      ) : (
        <>
          <Profile />
          <Message myChat={myChat}>
            {parsedThumbnail !== "" ? (
              <MessageThumbnailDiv
                messageType={messageType}
                myChat={myChat}
                onClick={() => {
                  let select = confirm("해당 게시물로 이동하겠습니까?");
                  if (select) {
                    router.push(
                      `/galleryBoard/${roomInfoState.storeId}?${parsedBoardId}`
                    );
                  }
                }}
              >
                <ThumbnailImage
                  src={parsedThumbnail ? parsedThumbnail : ""}
                  alt="thumbnail"
                  layout="fill"
                  style={{ borderRadius: myChat ? "15px 0 0 0" : "0 15px 0 0" }}
                ></ThumbnailImage>
              </MessageThumbnailDiv>
            ) : (
              <></>
            )}
            <MessageContents>
              <MessageTypeDiv>
                {messageType === "RESERVATION"
                  ? "[예약 확정]"
                  : messageType === "REVIEW"
                  ? "[픽업 완료]"
                  : null}
              </MessageTypeDiv>
              {messageParse()}
              <MessageButtonDiv>
                <MessageButton
                  messageType={messageType}
                  onClick={onclickMessageButton}
                >
                  {/* 메세지 타입이 "CHAT" 혹은 "RESERVATION" 일때는 버튼이 보이지 않음*/}
                  {messageType === "BOARD"
                    ? "가게 게시판 보러가기"
                    : "후기 작성하러 가기"}
                </MessageButton>
              </MessageButtonDiv>
            </MessageContents>
          </Message>
          <Timestamp myChat={myChat}>{timestamp}</Timestamp>
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

  @media screen and (min-width: 1920px) {
    width: 63px;
    height: 63px;
  }
  @media screen and (max-width: 1919px) {
    width: 47px;
    height: 47px;
  }
`;

const Message = styled.div<{ myChat: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.myChat ? "#FDC886" : "#FCF0E1")};
  font-family: noto-sans-cjk-kr, sans-serif;
  border-radius: ${(props) =>
    props.myChat ? "15px 0 15px 15px" : "0 15px 15px 15px"};
  @media screen and (min-width: 1920px) {
    max-width: 261px;
    margin: 25.5px 0 20px 0;
  }
  @media screen and (max-width: 1919px) {
    max-width: 196px;
    margin: 19px 0 15px 0;
  }
`;

const MessageContents = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  @media screen and (min-width: 1920px) {
    line-height: 15px;
    font-size: 13px;
    padding: 9px 18.5px;
  }
  @media screen and (max-width: 1919px) {
    font-size: 10px;
    line-height: 12px;
    padding: 7px 14px;
  }
`;

const MessageThumbnailDiv = styled.div<{
  messageType: "CHAT" | "RESERVATION" | "REVIEW" | "BOARD";
  myChat: boolean;
}>`
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 5px;
  cursor: pointer;

  @media screen and (min-width: 1920px) {
    height: 150px;
  }
  @media screen and (max-width: 1919px) {
    height: 120px;
  }
`;

const ThumbnailImage = styled(Image)``;

const MessageTypeDiv = styled.div``;

const MessageButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const MessageButton = styled.button<{
  messageType: "CHAT" | "RESERVATION" | "REVIEW" | "BOARD";
}>`
  display: ${(props) =>
    props.messageType === "REVIEW"
      ? "flex"
      : props.messageType === "BOARD"
      ? "flex"
      : "none"};
  align-items: center;
  justify-content: center;
  border: 1px solid #ff8d00;
  border-radius: 6px;
  color: #ff6f00;
  background-color: #fffdf9;
  width: 100%;
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
  @media screen and (min-width: 1920px) {
    font-size: 12px;
  }
  @media screen and (max-width: 1919px) {
    font-size: 9px;
  }
`;
