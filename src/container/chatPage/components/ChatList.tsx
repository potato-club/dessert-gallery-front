import React from "react";
import styled from "styled-components";
import SerchImage from "../../../../public/SVG/myPage/chatPage/searchImage.svg";
import ChatListItem from "./ChatListItem";

type roomInfoType = {
  roomId: number;
  storeName: string;
  customerName: string;
  thumbnailMessage: string;
  messageType: string;
};

function ChatList({
  chatRoomList,
  getRoomIdState,
}: {
  chatRoomList?: roomInfoType[];
  getRoomIdState: (id: number) => void;
}) {
  const chatListSample = [
    {
      roomId: 1,
      storeName: "테스트 가게1",
      customerName: "테스트 고객1",
      thumbnailMessage: "테스트 메세지1입니다.",
    },
    {
      roomId: 2,
      storeName: "테스트 가게2",
      customerName: "테스트 고객2",
      thumbnailMessage: "테스트 메세지2입니다.",
    },
    {
      roomId: 3,
      storeName: "테스트 가게3",
      customerName: "테스트 고객3",
      thumbnailMessage: "테스트 메세지3입니다.",
    },
  ];

  return (
    <Wrapper>
      <Header>
        <HeaderTop>
          <HeaderTitle>채팅</HeaderTitle>
          <HowToReservation>케이크 예약하는 법은?</HowToReservation>
        </HeaderTop>
        <HeaderBottom>
          <ImageWrapper>
            <SerchImage />
          </ImageWrapper>
          <SearchInput></SearchInput>
        </HeaderBottom>
      </Header>
      <ListContents>
        {chatRoomList &&
          chatRoomList.map((item) => (
            <ChatListItem
              key={item.roomId}
              roomId={item.roomId}
              customerName={item.customerName}
              thumbnailMessage={item.thumbnailMessage}
              onClickItem={() => getRoomIdState(item.roomId)}
            />
          ))}
      </ListContents>
    </Wrapper>
  );
}

export default ChatList;

const Wrapper = styled.div`
  @media screen and (min-width: 1920px) {
    width: 556px;
    height: 100%;
  }
  @media screen and (max-width: 1919px) {
    width: 332px;
    height: 100%;
  }
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dedede;
`;

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 124px;
  width: 100%;
  padding: 24px 20px 22px;
  border-bottom: 1px solid #dedede;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 3px;
  @media screen and (min-width: 1920px) {
    /* font-size: 25px; */
  }
  @media screen and (max-width: 1919px) {
    /* font-size: 20px; */
  }
`;

const HowToReservation = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  font-size: 10px;
  font-weight: bold;
  padding: 0 10.5px;
  border: none;
  border-radius: 6px;
  background-color: FCF6EE;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  @media screen and (min-width: 1920px) {
    font-size: 11px;
  }
  @media screen and (max-width: 1919px) {
    font-size: 10px;
  }
`;

const HeaderBottom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #fee9cf;
  width: 100%;
  height: 39px;
  padding: 0 18px;
  border-radius: 11px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
`;

const SearchInput = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 16px;
  margin-left: 18px;
  background: none;
  border: none;
  font-size: 11px;
`;

const ListContents = styled.div`
  width: 100%;
  height: 100%;
`;
