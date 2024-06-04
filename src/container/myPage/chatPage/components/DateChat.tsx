import React, { useEffect } from "react";
import ChatItem from "./ChatItem";
import { userInfoType } from "../ChatPage";
import styled from "styled-components";

export type messageObjectType = {
  chatRoomId: number;
  sender: string;
  message: string;
  messageType: "CHAT" | "RESERVEATION" | "REVIEW";
  dateTime: string;
};

function DateChat({
  chatList,
  userInfo,
}: {
  chatList: messageObjectType[];
  userInfo?: userInfoType;
}) {
  return (
    <>
      <TimeLineWrapper>
        {chatList?.length > 0 && (
          <TimeLine>
            {chatList &&
              chatList[0].dateTime.split("-")[0] +
                "년 " +
                chatList[0].dateTime.split("-")[1] +
                "월 " +
                chatList[0].dateTime.split("-")[2] +
                "일 "}
          </TimeLine>
        )}
      </TimeLineWrapper>
      {chatList?.map((item: any, index) => (
        <ChatItem
          key={index}
          messageType={item?.messageType}
          myChat={userInfo?.nickname === item?.sender}
          message={item?.message}
          timestamp={item?.dateTime}
        ></ChatItem>
      ))}
    </>
  );
}

export default DateChat;

const TimeLineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 22px;

  @media screen and (min-width: 1920px) {
    height: 29px;
  }
  @media screen and (max-width: 1919px) {
    height: 22px;
  }
`;

const TimeLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: none;
  border-radius: 15px;
  background-color: #fcf0e1;
  @media screen and (min-width: 1920px) {
    width: 294px;
    font-size: 13px;
  }
  @media screen and (max-width: 1919px) {
    width: 226px;
    font-size: 10px;
  }
`;
