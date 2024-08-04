import React, { useRef, useState } from "react";
import styled from "styled-components";
import Rating from "../../components/Rating";
import { DefaultProfileLogo, DownArrow, UpArrow } from "../../../public/svg";
import SlideImage from "../../components/SlideImage/SlideImage";
import { useOverflowDetector } from "../../hooks/useOverflowDetector";

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
}

const Review = ({ ...props }: StoreReviewType) => {
  const ref = useRef<any>(null);
  const [infoBtnClick, setInfoBtnClick] = useState<boolean>(false);
  const { isOverflowWidth, isOverflowHeight } = useOverflowDetector({
    ref: ref,
    width: 640,
    height: 92,
  });

  if (!props) {
    return <></>;
  }
  const { userName, content, score, images, createDate } = props;
  return (
    <Container>
      <LeftCont>
        <UserInfoDIv>
          <DefaultProfileLogo width="85px" height="85px" />
          <TextInfo>
            <Top>
              <Nickname>{userName}</Nickname>
              <Time>{createDate}</Time>
            </Top>
            <Rating size="medium" ratingValue={score} />
          </TextInfo>
        </UserInfoDIv>
        <Content infoBtnClick={infoBtnClick}>
          <Text infoBtnClick={infoBtnClick} ref={ref}>
            {content}
          </Text>
          {infoBtnClick && images && (
            <Photo
              srcArray={images.map((item: any) => {
                return item.fileUrl;
              })}
              width={478}
              height={478}
              infoBtnClick={infoBtnClick}
            />
          )}
        </Content>
        {(isOverflowHeight || images) &&
          (infoBtnClick ? (
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
          ))}
      </LeftCont>
      <RightCont>
        {!infoBtnClick && images && (
          <Photo
            srcArray={images.map((item: any) => {
              return item.fileUrl;
            })}
            width={124}
            height={124}
            infoBtnClick={infoBtnClick}
          />
        )}
      </RightCont>
    </Container>
  );
};

export default Review;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 1100px;
  background-color: #fffdf9;
  padding: 21px 73px;
  border-top: 2px solid #ff8d00;
  border-bottom: 2px solid #ff8d00;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
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
  gap: 32px;
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
  gap: 6px;
`;
const Top = styled.div`
  display: flex;
  gap: 30px;
`;
const Time = styled.span`
  display: inline-block;
  color: #828282;
  font-size: 19px;
  font-weight: 500;
`;
const Content = styled.div<{ infoBtnClick: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ infoBtnClick }) => infoBtnClick && "column"};
  gap: ${({ infoBtnClick }) => (infoBtnClick ? "16px" : "89px")};
`;
const Text = styled.p<{ infoBtnClick: boolean }>`
  margin: 17px 0px 11px;
  padding-left: 5px;
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

const Photo = styled(SlideImage)<{ infoBtnClick: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ infoBtnClick }) => (infoBtnClick ? "478px" : "124px")};
  height: ${({ infoBtnClick }) => (infoBtnClick ? "478px" : "124px")};
  background-color: #fdc886;
  color: #fffdf9;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: ${({ infoBtnClick }) => (infoBtnClick ? "26px" : "")};
`;
const MoreBtn = styled.button<{ infoBtnClick: boolean }>`
  display: flex;
  gap: 15px;
  color: #ff6f00;
  font-size: 15px;
  font-weight: 700;
  border: none;
  outline: none;
  background-color: inherit;
  align-items: center;
  cursor: pointer;
  padding: 0px 5px;
  margin: ${({ infoBtnClick }) => (infoBtnClick ? "20px 0px" : "0px")};
`;
