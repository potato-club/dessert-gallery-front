import React, { useState } from "react";
import styled from "styled-components";
import Rating from "../../../../../components/Rating";
import { DefaultProfileLogo, DownArrow, UpArrow } from "../../../../../../public/svg";
import SlideImage from "../../../../../components/SlideImage/SlideImage";

interface style {
  border:boolean
}

export interface StoreReviewType {
  userName: string;
  content: string;
  score: string;
  images: [
    {
      fileName: string;
      fileUrl: string;
    }
  ];
  createDate: string;
  border?: boolean
}

const Review = ({ ...props }: StoreReviewType) => {
  const [infoBtnClick, setInfoBtnClick] = useState<boolean>(false);

  if (!props) {
    return <></>;
  }
  const { userName, content, score, images, createDate, border=false } = props;
  return (
    <Container border={border}>
      <LeftCont>
        <UserInfoDIv>
          <DefaultProfileLogo width="48px" height="48px" />
          <TextInfo>
            <Top>
              <Nickname>{userName}</Nickname>
              <Time>{createDate}</Time>
            </Top>
            <Rating size="small" ratingValue={score} />
          </TextInfo>
        </UserInfoDIv>
        <Content infoBtnClick={infoBtnClick}>
          <Text infoBtnClick={infoBtnClick}>{content}</Text>
          {infoBtnClick && (
            <Photo
              srcArray={images.map((item: any) => {
                return item.fileUrl;
              })}
              width={200}
              height={200}
              infoBtnClick={infoBtnClick}
            />
          )}
        </Content>
        {infoBtnClick ? (
          <MoreBtn
            onClick={() => setInfoBtnClick(false)}
            infoBtnClick={infoBtnClick}
          >
            <span>접기</span>
            <UpArrow width="16px" height="7px" />
          </MoreBtn>
        ) : (
          <MoreBtn
            onClick={() => setInfoBtnClick(true)}
            infoBtnClick={infoBtnClick}
          >
            <span>더보기</span>
            <DownArrow width="16px" height="7px" />
          </MoreBtn>
        )}
      </LeftCont>
      <RightCont>
        {!infoBtnClick && images[0]?.fileUrl && (
          <Photo
            srcArray={images.map((item: any) => {
              return item.fileUrl;
            })}
            width={88}
            height={88}
            infoBtnClick={infoBtnClick}
          />
        )}
      </RightCont>
    </Container>
  );
};

export default Review;

const Container = styled.div<style>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 374px;
  background-color: #ffffff;
  padding: 8px 16px;
  /* border-top: 2px solid #DEDEDE; */
  /* border-bottom: 2px solid #DEDEDE; */
  ${({ border }) =>
    border && "border-top: 1.5px solid #DEDEDE"  
    }
`;
const LeftCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const RightCont = styled.div`
  margin-bottom: 30px;
`;
const UserInfoDIv = styled.div`
  display: flex;
  gap: 8px;
`;
const Nickname = styled.span`
  color: #000;
  font-size: 12px;
  font-weight: 500;
`;
const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;
const Top = styled.div`
  display: flex;
  gap: 12px;
`;
const Time = styled.span`
  display: inline-block;
  color: #828282;
  font-size: 12px;
  font-weight: 500;
`;
const Content = styled.div<{ infoBtnClick: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ infoBtnClick }) => infoBtnClick && "column"};
  gap: ${({ infoBtnClick }) => (infoBtnClick ? "8px" : "24px")};
`;
const Text = styled.p<{ infoBtnClick: boolean }>`
  margin: 17px 0px 11px;
  padding-left: 5px;
  width: 240px;
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

const Photo = styled(SlideImage)<{ infoBtnClick: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ infoBtnClick }) => (infoBtnClick ? "124px" : "88px")};
  height: ${({ infoBtnClick }) => (infoBtnClick ? "124px" : "88px")};
  background-color: #fdc886;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: ${({ infoBtnClick }) => (infoBtnClick ? "26px" : "")};
`;
const MoreBtn = styled.button<{ infoBtnClick: boolean }>`
  display: flex;
  width: 80px;
  gap: 8px;
  color: #ff6f00;
  font-size: 12px;
  font-weight: 700;
  border: none;
  outline: none;
  background-color: inherit;
  align-items: center;
  cursor: pointer;
  padding: 0px 5px;
  margin: ${({ infoBtnClick }) => (infoBtnClick ? "20px 0px" : "0px")};
`;
