import React from "react";
import styled from "styled-components";

const Intro = () => {
  return (
    <Container>
      <Title>마이 캘린더 관리</Title>
      <IntroduceBtn>마이 캘린더란?</IntroduceBtn>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 758px;
`;
const Title = styled.span`
  color: #000;
  font-family: Noto Sans CJK KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const IntroduceBtn = styled.button`
  width: 156px;
  height: 36px;
  color: #000;
  background-color: #fcf6ee;
  border: 1px solid #828282;
  border-radius: 8px;

  font-family: Noto Sans CJK KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
