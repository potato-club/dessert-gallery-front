import React from "react";
import styled from "styled-components";
import { ArrowUp } from "../../../../../public/svg";

const MenuBox = () => {
  return (
    <Container>
      <ArrowUp fill="#ffffff" />
      <FunctionBox>
        <Func>1:1 채팅</Func>
        <Func>공유하기</Func>
        <Func>예약하러 가기</Func>
        <Func>게시판 이동</Func>
      </FunctionBox>
    </Container>
  );
};

export default MenuBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 9%;
  right: -30px;
  z-index: 100;
  filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.16));
  svg {
    position: relative;
    left: 130px;
    top: 2px;
  }
`;
const FunctionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 212px;
  border-radius: 10px;
`;
const Func = styled.div`
  font-size: 15px;
  padding: 23px 65px;
  color: #828282;
  font-weight: 500;
  line-height: normal;
  &:hover {
    color: #000;
    font-weight: 700;
    cursor: pointer;
  }
`;
