import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useGetMyReview from "../../../hooks/useGetMyReview";
import Rating from "../../../components/Rating";
import defaultPhoto from "../../../../public/image/defaultPhoto.png";
import Image from "next/image";
import ThreeDot from "../../../../public/SVG/reviewPage/ThreeDot.svg";
import ToggleOptionBox from "../../../components/ToggleOptionBox";
import Router from "next/router";
import { deleteReview } from "../../../apis/controller/reviewPage";
interface Button {
  isSelected?: boolean;
  detail?: boolean;
}

interface ButtonInfo {
  index: number;
  label: string;
}

const MyReviewPage = () => {
  const buttonInfoList: ButtonInfo[] = [
    { index: 1, label: "1개월" },
    { index: 3, label: "3개월" },
    { index: 6, label: "6개월" },
    { index: 0, label: "전체" },
  ];
  const [month, setMonth] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const monthClick = (month: number) => {
    setMonth(month);
  };
  const [reviewId, setReviewId] = useState<number>(-1);
  const myReview = useGetMyReview(1, month);

  const modalOption = [
    {
      title: "삭제하기",
      onClickHandler: async () => {
        await deleteReview(reviewId);
        location.reload();
      },
    },
  ];
  const reviewBoxRef = useRef<HTMLDivElement>(null);
  const [showMoreButton, setShowMoreButton] = useState<boolean>(false);

  useEffect(() => {
    if (reviewBoxRef.current) {
      const reviewBoxHeight = reviewBoxRef.current.clientHeight;
      setShowMoreButton(reviewBoxHeight > 230);
    }
  }, [myReview]);

  const detailClick = (id: number) => {
    setReviewId(id);
    setModal(!modal);
  };

  return (
    <Wrapper>
      <MenuWrapper>
        <Header>
          <NoticeBox>후기 수정 및 삭제 관리</NoticeBox>
        </Header>
        <Middle>
          <NoticeValueBox>
            {buttonInfoList.map((buttonInfoList) => (
              <NoticeButton
                key={buttonInfoList.index}
                isSelected={month === buttonInfoList.index}
                onClick={() => monthClick(buttonInfoList.index)}
              >
                {buttonInfoList.label}
              </NoticeButton>
            ))}
          </NoticeValueBox>
          <ReviewNumber>내가 쓴 후기</ReviewNumber>
        </Middle>
        <ReviewWrapper>
          {myReview?.map((review: any, index: number) => (
            <ReviewBox key={review.id} ref={reviewBoxRef}>
              <DataBox>
                <ReviewDataBox>
                  <ReviewDate>{review.createDate}</ReviewDate>
                  <Rating size={"medium"} ratingValue={Number(review.score)} />
                  <ReviewContent>{review.content}</ReviewContent>
                </ReviewDataBox>
                <ReviewImageBox>
                  <SvgDiv>
                    <DivBox onClick={() => detailClick(review.id)}>
                      <ThreeDot />
                    </DivBox>
                    {modal && (
                      <ModalOptionBox>
                        <ToggleOptionBox contents={modalOption} />
                      </ModalOptionBox>
                    )}
                  </SvgDiv>
                  <Image
                    src={review.images[index].fileUrl}
                    width={137}
                    height={137}
                    alt=""
                  />
                </ReviewImageBox>
              </DataBox>
              <MoreBtnDiv>
                {showMoreButton && <ShowMoreButton>더보기</ShowMoreButton>}
              </MoreBtnDiv>
            </ReviewBox>
          ))}
        </ReviewWrapper>
      </MenuWrapper>
    </Wrapper>
  );
};

export default MyReviewPage;
const Wrapper = styled.div`
  width: 100%;
  row-gap: 40px;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`;

const Header = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  align-items: end;
  display: flex;
  width: 80%;
  height: 74.5px;
  justify-content: space-between;
`;

const NoticeBox = styled.div``;

const Middle = styled.div`
  line-height: normal;
  display: flex;
  justify-content: space-between;
  height: 41px;
  width: 80%;
  align-items: center;
`;

const NoticeValueBox = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
`;

const NoticeButton = styled.button<Button>`
  width: 105px;
  height: 36px;
  border-radius: 20px;
  color: ${(props) => (props.isSelected ? "white" : "#FDC886")};
  background-color: ${(props) => (props.isSelected ? "#FF8D00" : "white")};
  border: 2px solid #ff8d00;
  cursor: pointer;
`;

const ReviewNumber = styled.div`
  width: 200px;
  height: 36px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const ReviewWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const ReviewBox = styled.div`
  width: 100%;
  height: 240px;
  max-height: 235px;
  border: 2px solid #ff8d00;
  border-radius: 15px;
  background-color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ReviewDataBox = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const ReviewDate = styled.div`
  font-size: 18px;
  color: #828282;
`;
const ReviewImageBox = styled.div`
  width: 140px;
  height: 100%;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  justify-content: space-between;
`;
const ReviewContent = styled.div`
  width: 80%;
  overflow: hidden;
  white-space: pre-wrap;
  line-height: 25px;
`;
const SvgDiv = styled.div`
  height: 30px;
  display: flex;
  justify-content: end;
  align-items: center;
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

const ShowMoreButton = styled.div`
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DataBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const MoreBtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
