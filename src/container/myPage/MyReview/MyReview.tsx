import React, { useState } from "react";
import styled from "styled-components";
import { MyReviewDto } from "../../../types/apiTypes";
import Rating from "../../../components/Rating";
import Image from "next/image";
import { useOverflowDetector } from "../../../hooks/useOverflowDetector";
import { DownArrow, UpArrow } from "../../../../public/SVG";
import SlideImage from "../../../components/SlideImage/SlideImage";

const MyReview = ({ ...props }: MyReviewDto) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { isOverflowWidth, isOverflowHeight } = useOverflowDetector({
    ref: ref,
    width: 1000,
    height: 73,
  });

  const { id, content, score, images, createDate } = props;
  const [infoBtnClick, setInfoBtnClick] = useState<boolean>(false);

  const imageUrls = images ? images.map((image) => image.fileUrl) : [];
  return (
    <ReviewBox infoBtnClick={infoBtnClick}>
      <DataBox>
        <ReviewDataBox>
          <ReviewDate>{createDate}</ReviewDate>
          <Rating size={"medium"} ratingValue={score} />
          <ReviewContent infoBtnClick={infoBtnClick}>
            <Text infoBtnClick={infoBtnClick} ref={ref}>
              {content}
            </Text>
          </ReviewContent>
          {infoBtnClick && (
            <ReviewMoreImage>
              <SlideImage
                srcArray={imageUrls}
                width={400}
                height={400}
                dotIndicator={true}
                moveBtnType="show"
              />
            </ReviewMoreImage>
          )}
          {(isOverflowHeight || images) &&
            (infoBtnClick ? (
              <MoreBtn onClick={() => setInfoBtnClick(false)}>
                <span>접기</span>
                <UpArrow width="16px" height="7px" />
              </MoreBtn>
            ) : (
              <MoreBtn onClick={() => setInfoBtnClick(true)}>
                <span>더보기</span>
                <DownArrow width="16px" height="7px" />
              </MoreBtn>
            ))}
        </ReviewDataBox>
        {!infoBtnClick && (
          <ReviewImageBox infoBtnClick={infoBtnClick}>
            {images && images.length > 0 ? (
              <Image src={images[0].fileUrl} width={140} height={140} alt="" />
            ) : null}
          </ReviewImageBox>
        )}
      </DataBox>
    </ReviewBox>
  );
};

export default MyReview;

const ReviewBox = styled.div<{ infoBtnClick: boolean }>`
  width: 100%;
  border: 2px solid #ff8d00;
  border-radius: 15px;
  background-color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ReviewDataBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  overflow: hidden;
`;
const DataBox = styled.div`
  display: flex;
  width: 100%;
`;

const ReviewDate = styled.div`
  font-size: 18px;
  color: #828282;
`;
const ReviewImageBox = styled.div<{ infoBtnClick: boolean }>`
  width: 140px;
  height: 140px;
  display: flex;
  align-self: flex-end;
`;
const ReviewContent = styled.div<{ infoBtnClick: boolean }>`
  width: 70%;
  max-width: 400px;
  line-height: 25px;
  /* height: ${({ infoBtnClick }) => (infoBtnClick ? "400px" : "")}; */
`;

const Text = styled.p<{ infoBtnClick: boolean }>`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  max-height: 130px;
  overflow: ${({ infoBtnClick }) => (infoBtnClick ? "none" : "hidden")};
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: ${({ infoBtnClick }) => (infoBtnClick ? "" : "3")};
  -webkit-box-orient: vertical;
`;

const SvgDiv = styled.div`
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: end;
`;
const DivBox = styled.div`
  cursor: pointer;
`;
const ModalOptionBox = styled.div`
  position: relative;
  top: 5px;
  right: 153px;
  z-index: 1;
`;

const MoreBtn = styled.button`
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
`;

const ReviewMoreImage = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  margin-top: 20px;
`;
