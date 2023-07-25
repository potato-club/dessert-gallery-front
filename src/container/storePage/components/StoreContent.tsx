import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Poster from "./Poster";
import ReviewList from "./ReviewList";
const StoreContent = () => {
  const [optionNum, setOptionNum] = useState<number>(1);
  const optionClick = (num: number) => {
    localStorage.setItem("detailStoreOption", num.toString());
    setOptionNum(num);
  };

  useEffect(() => {
    const initValue = localStorage.getItem("detailStoreOption");
    setOptionNum(Number(initValue));
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
      {optionNum == 1 ? <Poster /> : <ReviewList />}
    </Container>
  );
};

export default StoreContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  margin: 0px auto;
  max-width: 1280px;
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
