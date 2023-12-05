import React from "react";
import styled from "styled-components";

function ChatListItem({
  roomId,
  customerName,
  thumbnailMessage,
}: {
  roomId: number;
  customerName: string;
  thumbnailMessage: string;
}) {
  return (
    <Wrapper>
      <Profile></Profile>
      <ItemInfoWrapper>
        <InfoLeft>
          <UserName>
            {customerName}
            <UserNameHelper>님</UserNameHelper>
          </UserName>
          <ThumbnailMessage>{thumbnailMessage}</ThumbnailMessage>
        </InfoLeft>
        <InfoRight>
          <TimeStamp>오전 9:30</TimeStamp>
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
`;

const Profile = styled.div`
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
  width: 43px;
  height: 100%;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 18px;
  font-size: 12px;
  font-weight: bold;
`;

const UserNameHelper = styled.div`
  font-size: 9px;
  font-weight: bold;
  margin: 1px 0 0 2px;
  color: #828282;
`;

const ThumbnailMessage = styled.div`
  width: 100%;
  height: 15px;
  font-size: 9px;
  color: #828282;
`;

const TimeStamp = styled.div`
  position: absolute;
  right: 0;
  height: 13px;
  font-size: 9px;
  color: #828282;
  margin-top: 5px;
`;
