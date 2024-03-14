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
import useGetWriteAbleStoreInfo from "../../../hooks/useGetWriteAbleReview";
import { modalBg } from "../../../recoil/modalBg/atom";
import { useSetRecoilState } from "recoil";
import ReviewModal from "../components/ReviewModal";

interface Button {
  isSelected?: boolean;
  detail?: boolean;
}

interface ButtonInfo {
  index: number;
  label: string;
}

interface style {
  selected: boolean;
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
  const writeAbleReview = useGetWriteAbleStoreInfo();

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
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
  const setModalBgState = useSetRecoilState(modalBg);

  useEffect(() => {
    console.log("writeAbleReview", writeAbleReview);
    if (reviewBoxRef.current) {
      const reviewBoxHeight = reviewBoxRef.current.clientHeight;
      setShowMoreButton(reviewBoxHeight > 230);
    }
  }, [myReview, writeAbleReview]);
  // const reviewContentRef = useRef<HTMLDivElement>(null);
  // const [showMoreButtons, setShowMoreButtons] = useState<boolean[]>([]);

  // useEffect(() => {
  //   if (myReview) {
  //     const buttons: boolean[] = myReview.map((review: any) => {
  //       const reviewContentElement = document.createElement("div");
  //       reviewContentElement.innerHTML = review.content;
  //       document.body.appendChild(reviewContentElement);
  //       const reviewContentHeight = reviewContentElement.clientHeight;
  //       document.body.removeChild(reviewContentElement);
  //       return reviewContentHeight > 100;
  //     });
  //     setShowMoreButtons(buttons);
  //   }
  // }, [myReview]);

  const detailClick = (id: number) => {
    setReviewId(id);
    setModal(modal ? false : true);
  };

  const handleWrapperClick = () => {
    setShowReviewModal(false);
    setModalBgState(false);
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
          <NoticeValueBox>
            {writeAbleReview.length === 0 ? (
              <CreateReview selected={false}>리뷰 작성</CreateReview>
            ) : (
              <CreateReview
                selected={true}
                onClick={() => {
                  setShowReviewModal(true);
                  setModalBgState(true);
                }}
              >
                리뷰 작성
              </CreateReview>
            )}
            <ReviewNumber>내가 쓴 후기</ReviewNumber>
          </NoticeValueBox>
        </Middle>
        <ReviewWrapper>
          {myReview?.map((review: any, index: number) => (
            <ReviewBox key={review.id}>
              <DataBox>
                <ReviewDataBox>
                  <ReviewDate>{review.createDate}</ReviewDate>
                  <Rating size={"medium"} ratingValue={Number(review.score)} />
                  <ReviewContent>{review.content}</ReviewContent>
                  {/* <ShowMoreButton>더보기</ShowMoreButton> */}
                </ReviewDataBox>
                <ReviewImageBox>
                  {review.images && review.images.length > 0 ? (
                    <Image
                      src={
                        review.images && review.images.length > 0
                          ? review.images[0].fileUrl
                          : defaultPhoto
                      }
                      width={137}
                      height={137}
                      alt=""
                    />
                  ) : null}
                </ReviewImageBox>
                <SvgDiv>
                  <DivBox onClick={() => detailClick(review.id)}>
                    <ThreeDot />
                  </DivBox>
                  {modal && review.id === reviewId ? (
                    <ModalOptionBox>
                      <ToggleOptionBox contents={modalOption} />
                    </ModalOptionBox>
                  ) : null}
                </SvgDiv>
              </DataBox>
            </ReviewBox>
          ))}
        </ReviewWrapper>
      </MenuWrapper>
      {showReviewModal && (
        <ReviewModal
          writeAbleStoreData={writeAbleReview}
          setShowReviewModal={setShowReviewModal}
        />
      )}
      {showReviewModal && <WrapperOverlay onClick={handleWrapperClick} />}
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

const WrapperOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
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

const CreateReview = styled.div<style>`
  width: 200px;
  height: 36px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: default;
  color: gray;

  ${({ selected }) =>
    selected &&
    `
    border: 2px solid #ff8d00;
    cursor: pointer;
    color: black;
  `}
`;

const ReviewWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const ReviewBox = styled.div`
  width: 100%;
  max-height: 235px;
  border: 2px solid #ff8d00;
  border-radius: 15px;
  background-color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ReviewDataBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  overflow: hidden;
`;
const DataBox = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
`;

const ReviewDate = styled.div`
  font-size: 18px;
  color: #828282;
`;
const ReviewImageBox = styled.div`
  width: 140px;
  height: 140px;
  display: flex;
  align-self: flex-end;
`;
const ReviewContent = styled.div`
  width: 70%;
  max-width: 1000px;
  line-height: 25px;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 110px;
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

const ShowMoreButton = styled.div`
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
