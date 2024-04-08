import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import PosterList from "./PosterList";
import PostModal from "./Modal";
import ReviewList from "../../../components/ReviewList";
import { useStorePageOnModal } from "../../../hooks/useBoard";

const StoreContent = ({ storeId }: any) => {
  const { boardId, setBoardId, onModal, onModalBg } =
    useStorePageOnModal(storeId);

  const [optionNum, setOptionNum] = useState<number>(1);
  const optionClick = (num: number) => {
    localStorage.setItem("detailStoreOption", num.toString());
    setOptionNum(num);
  };

  useEffect(() => {
    const initValue = localStorage.getItem("detailStoreOption");
    if (!initValue) setOptionNum(1);
    else setOptionNum(Number(initValue));
  }, []);

  return (
    <Container>
      <Options>
        <PostBtn onClick={() => optionClick(1)} optionNum={optionNum}>
          가게 게시물
        </PostBtn>
        <ReviewBtn onClick={() => optionClick(2)} optionNum={optionNum}>
          가게 후기
        </ReviewBtn>
      </Options>
      {onModal && onModalBg && <PostModal boardId={boardId} />}

      {optionNum == 1 ? (
        <PosterList storeId={storeId} setBoardId={setBoardId} />
      ) : (
        <ReviewList />
      )}
    </Container>
  );
};

export default StoreContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 45px;
  margin: 0px auto;
  max-width: 1100px;
`;
const Options = styled.div`
  border-bottom: 3px solid #ff8d00;
`;
const optionDefault = css`
  width: 550px;
  height: 54px;
  font-size: 20px;
  font-weight: 500;
  border: none;
  color: #ff8d00;
  background-color: #fffdf9;
`;
const optionClick = css`
  color: #fffdf9;
  background-color: #ff8d00;
`;

const PostBtn = styled.button<{ optionNum: number }>`
  ${optionDefault}
  ${({ optionNum }) => optionNum == 1 && optionClick}
`;
const ReviewBtn = styled.button<{ optionNum: number }>`
  ${optionDefault}
  ${({ optionNum }) => optionNum == 2 && optionClick}
`;
