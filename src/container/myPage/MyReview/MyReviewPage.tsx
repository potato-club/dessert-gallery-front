import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useGetMyReview, {
  useGetMyReviewList,
} from "../../../hooks/useGetMyReview";
import ThreeDot from "../../../../public/SVG/reviewPage/ThreeDot.svg";
import ToggleOptionBox from "../../../components/ToggleOptionBox";
import { deleteReview } from "../../../apis/controller/reviewPage";
import useGetWriteAbleStoreInfo from "../../../hooks/useGetWriteAbleReview";
import { modalBg } from "../../../recoil/modalBg/atom";
import { useSetRecoilState } from "recoil";
import ReviewModal from "../components/ReviewModal";
import MyReview from "./MyReview";
import { MyReviewDto } from "../../../types/apiTypes";
import PagingBox from "../../../components/ReviewList/PagingBox";
import Router, { useRouter } from "next/router";

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

  const monthClick = (month: number) => {
    setMonth(month);
  };

  const router = useRouter();

  const { data, refetch, isLoading } = useGetMyReviewList(
    router.query.page as number,
    month
  );

  useEffect(() => {
    refetch();
  }, [router.query.page]);

  const myReview = useGetMyReview(1, month);
  const writeAbleReview = useGetWriteAbleStoreInfo();

  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
  const setModalBgState = useSetRecoilState(modalBg);

  const handleWrapperClick = () => {
    setShowReviewModal(false);
    setModalBgState(false);
  };

  const [modal, setModal] = useState<boolean>(false);
  const [reviewId, setReviewId] = useState<number | null>(null);

  const detailClick = (id: number) => {
    setReviewId(id);
    if (id == reviewId) {
      setModal(!modal);
    } else {
      setModal(true);
    }
  };

  const modalOption = [
    {
      title: "삭제하기",
      onClickHandler: async () => {
        await deleteReview(reviewId as number);
        location.reload();
      },
    },
  ];
  console.log("데이터", data);
  console.log("page", router.query.page);
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
            <ReviewNumber>내가 쓴 후기 {data?.size}</ReviewNumber>
          </NoticeValueBox>
        </Middle>
        <ReviewWrapper>
          {data?.content.map((item: MyReviewDto, idx: number) => {
            return (
              <div style={{ display: "flex" }} key={item.id}>
                <MyReview
                  key={item.id}
                  id={item.id}
                  content={item.content}
                  score={item.score}
                  images={item.images}
                  createDate={item.createDate}
                />
                <SvgDiv>
                  <DivBox onClick={() => detailClick(item.id)}>
                    <ThreeDot />
                  </DivBox>
                  {modal && reviewId === item.id ? (
                    <ModalOptionBox>
                      <ToggleOptionBox contents={modalOption} />
                    </ModalOptionBox>
                  ) : null}
                </SvgDiv>
              </div>
            );
          })}
          <PagingBox data={data} />
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

const SvgDiv = styled.div`
  height: 30px;
  display: flex;
  justify-content: end;
  position: relative;
  right: 80px;
  top: 40px;
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
