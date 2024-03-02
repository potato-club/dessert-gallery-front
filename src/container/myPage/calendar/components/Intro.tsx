import React, { useState } from "react";
import styled from "styled-components";
import ExplainModalBox from "./ExplainModalBox";

const Intro = () => {
  const [onClick, setOnClick] = useState(false);
  return (
    <Container>
      <Title>마이 캘린더 관리</Title>
      <IntroduceBtn onClick={() => setOnClick((prev) => !prev)}>
        마이 캘린더란?
      </IntroduceBtn>
      {onClick && <ExplainModalBox />}
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
  font-size: 15px;
  font-weight: 500;
`;
