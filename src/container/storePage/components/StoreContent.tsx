import React, { useState } from "react";
import styled, { css } from "styled-components";
import Poster from "./Poster";
import Reviews from "./Reviews";
const StoreContent = () => {
  const [optionNum, setOptionNum] = useState<number>(1);
  return (
    <Container>
      <Options>
        <PostBtn onClick={() => setOptionNum(1)} optionNum={optionNum}>
          가게 게시물
        </PostBtn>
        <ReviewBtn onClick={() => setOptionNum(2)} optionNum={optionNum}>
          가게 후기
        </ReviewBtn>
      </Options>
      {optionNum == 1 ? <Poster /> : <Reviews />}
    </Container>
  );
};

export default StoreContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 81px;
  margin: 0px auto;
`;
const Options = styled.div`
  border-bottom: 1px solid #ff8d00;
`;
const optionDefault = css`
  width: 810px;
  height: 80px;
  font-size: 32px;
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