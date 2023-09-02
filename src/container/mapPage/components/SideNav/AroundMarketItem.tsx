import React from "react";
import styled from "styled-components";
import Rating from "../../../../components/Rating";

const AroundMarketItem = () => {
  return (
    <Container>
      <TextInfoDiv>
        <Name>닐라닐라바닐라</Name>
        <Address>서울시 강서구 곰달래길 12</Address>
        <Introduction>
          퇴사 기념 케이크, <br></br>이제는 퇴사도 축제로구나
        </Introduction>
        <Rating size="small" ratingValue="5.0" />
      </TextInfoDiv>
      <ImageDiv></ImageDiv>
    </Container>
  );
};

export default AroundMarketItem;

const Container = styled.li`
  display: flex;
  width: 100%;
  height: 134px;
  background-color: white;
  padding: 21px;
`;
const TextInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-right: 45px;
`;
const ImageDiv = styled.img`
  background-color: black;
  width: 100%;
`;
const Name = styled.h1`
  color: #000;
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
`;
const Address = styled.address`
  color: #000;
  font-size: 7px;
  font-weight: 400;
  line-height: normal;
`;
const Introduction = styled.div`
  color: #000;
  font-size: 8px;
  font-weight: 500;
  margin: 7px 0px 10px;
`;
