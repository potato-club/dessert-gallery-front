import React from "react";
import styled from "styled-components";

function ChatListItem({
  roomId,
  name,
  thumbnailMessage,
  lastChatDatetime,
  onClickItem,
}: {
  roomId: number;
  name: string;
  thumbnailMessage: string;
  lastChatDatetime: string;
  onClickItem: () => void;
}) {
  const parsedMessage = () => {
    if (thumbnailMessage?.includes("/boardInfoString")) {
      return thumbnailMessage.split("/boardInfoString")[0];
    } else {
      return thumbnailMessage;
    }
  };
  return (
    <Wrapper onClick={onClickItem}>
      <Profile>{name.split("")[0]}</Profile>
      <ItemInfoWrapper>
        <InfoLeft>
          <UserName>
            {name}
            <UserNameHelper>님</UserNameHelper>
          </UserName>
          <ThumbnailMessage>{parsedMessage()}</ThumbnailMessage>
        </InfoLeft>
        <InfoRight>
          <TimeStamp>{lastChatDatetime}</TimeStamp>
        </InfoRight>
      </ItemInfoWrapper>
    </Wrapper>
  );
}

export default ChatListItem;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 66px;
  display: flex;
  border-bottom: 1px solid #dedede;
  padding: 12.5px 21px;
  cursor: pointer;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: #fdc886;
`;

const ItemInfoWrapper = styled.div`
  @media screen and (min-width: 1920px) {
    width: 462px;
  }
  @media screen and (max-width: 1919px) {
    width: 237px;
  }
  display: flex;
  padding-top: 6px;
  justify-content: space-between;
  height: 100%;
  margin-left: 11px;
`;

const InfoLeft = styled.div`
  @media screen and (min-width: 1920px) {
    width: 388px;
  }
  @media screen and (max-width: 1919px) {
    width: 165px;
  }
  position: relative;
`;

const InfoRight = styled.div`
  position: relative;
  height: 100%;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 18px;
  font-size: 12px;
  font-weight: bold;
  @media screen and (min-width: 1920px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1919px) {
    font-size: 12px;
  }
`;

const UserNameHelper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 0 2px 6px 2px;
  height: 100%;
  font-weight: bold;
  color: #828282;
  @media screen and (min-width: 1920px) {
    font-size: 11px;
  }
  @media screen and (max-width: 1919px) {
    font-size: 9px;
  }
`;

const ThumbnailMessage = styled.div`
  width: 100%;
  height: 15px;
  font-size: 9px;
  color: #828282;
  @media screen and (min-width: 1920px) {
    font-size: 11px;
  }
  @media screen and (max-width: 1919px) {
    font-size: 9px;
  }
`;

const TimeStamp = styled.div`
  position: absolute;
  right: 0;
  width: 50px;
  height: 13px;
  font-size: 9px;
  color: #828282;
  margin-top: 5px;
  /* @media screen and (min-width: 1920px) {
    font-size: 11px;
  }
  @media screen and (max-width: 1919px) {
    font-size: 9px;
  } */
`;
