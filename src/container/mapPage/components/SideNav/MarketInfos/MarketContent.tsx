import React from "react";
import styled, { css } from "styled-components";

const MarketContent = () => {
  return (
    <Container>
      <PostBoard>
        <Title>게시글</Title>
      </PostBoard>
      <RouterBtn>예약하러 가기</RouterBtn>

      <ReviewBoard>
        <Title>리뷰</Title>
      </ReviewBoard>
      <RouterBtn>후기 게시판 보러 가기</RouterBtn>

      {/* <Announce /> */}
    </Container>
  );
};

export default MarketContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fcf0e1;
  width: 100%;
`;
const Content = css`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0px 30px;
`;
const PostBoard = styled.div`
  ${Content}
  height: 190px;
`;
const ReviewBoard = styled.div`
  ${Content}
  height: 202px;
`;
const Title = styled.div`
  color: #000;
  font-size: 10px;
  font-weight: 700;
  line-height: normal;
  border-bottom: 1.5px solid #dedede;
  padding: 8px 0px;
  margin-top: 5px;
`;
const RouterBtn = styled.div`
  color: #ff6f00;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  background-color: white;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  &:hover {
    cursor: pointer;
    background-color: #ff6f00;
    color: white;
  }
`;
