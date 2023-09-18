import React, { useState } from "react";
import styled from "styled-components";
import Rating from "../../../../components/Rating";
import {
  DefaultProfileLogo,
  DownArrow,
  UpArrow,
} from "../../../../../public/svg";
const Review = ({ storeReview }: any) => {
  const [infoBtnClick, setInfoBtnClick] = useState<boolean>(false);

  const { userName, content, score, images, createDate } = storeReview;
  return (
    <Container>
      <UserInfoDIv>
        <UserProfile>
          <DefaultProfileLogo width="85px" height="85px" />
        </UserProfile>
        <TextInfo>
          <Top>
            <Nickname>{userName}</Nickname>
            <Time>{createDate}</Time>
          </Top>
          <Rating size="medium" ratingValue={score} />
        </TextInfo>
      </UserInfoDIv>
      <Content infoBtnClick={infoBtnClick}>
        <Text infoBtnClick={infoBtnClick}>{content}</Text>
        <Photo infoBtnClick={infoBtnClick}>PHOTO</Photo>
      </Content>
      {infoBtnClick ? (
        <MoreBtn onClick={() => setInfoBtnClick(false)}>
          <span>접기</span>
          <UpArrow width="16px" height="7px" />
        </MoreBtn>
      ) : (
        <MoreBtn onClick={() => setInfoBtnClick(true)}>
          <span>더보기</span>
          <DownArrow width="16px" height="7px" />
        </MoreBtn>
      )}
    </Container>
  );
};

export default Review;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1100px;
  /* height: 338px; */
  background-color: #fffdf9;
  padding: 47px 86px 43px 130px;
  border-top: 2px solid #ff8d00;
  border-bottom: 2px solid #ff8d00;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
`;
const UserInfoDIv = styled.div`
  display: flex;
  gap: 32px;
`;
const UserProfile = styled.div`
  color: #000;
  font-size: 19px;
  font-weight: 500;
`;
const Nickname = styled.span`
  color: #000;
  font-size: 19px;
  font-weight: 500;
`;
const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;
const Top = styled.div`
  display: flex;
  gap: 69px;
`;
const Time = styled.span`
  display: inline-block;
  color: #828282;
  font-size: 19px;
  font-weight: 500;
  margin-left: 35px;
`;
const Content = styled.div<{ infoBtnClick: boolean }>`
  display: flex;
  flex-direction: ${({ infoBtnClick }) => infoBtnClick && "column"};
  gap: ${({ infoBtnClick }) => (infoBtnClick ? "16px" : "89px")};
`;
const Text = styled.p<{ infoBtnClick: boolean }>`
  margin: 27px 0px 24px;
  width: 640px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: 200%;
  overflow: ${({ infoBtnClick }) => (infoBtnClick ? "none" : "hidden")};
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: ${({ infoBtnClick }) => (infoBtnClick ? "" : "3")};
  -webkit-box-orient: vertical;
`;
const Photo = styled.div<{ infoBtnClick: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ infoBtnClick }) => (infoBtnClick ? "478px" : "153px")};
  height: ${({ infoBtnClick }) => (infoBtnClick ? "478px" : "153px")};
  background-color: #fdc886;
  color: #fffdf9;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: ${({ infoBtnClick }) => (infoBtnClick ? "26px" : "")};
`;
const MoreBtn = styled.button`
  display: flex;
  width: 82px;
  gap: 15px;
  color: #ff6f00;
  font-size: 15px;
  font-weight: 700;
  border: none;
  outline: none;
  background-color: inherit;
  align-items: center;
  cursor: pointer;
`;
