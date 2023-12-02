import React from "react";
import styled from "styled-components";
import TodayBackground from "../../../../../public/image/TodayBackground.png";

const Today = () => {
  return (
    <Conatiner>
      <TextContent>오늘은</TextContent>
      <TextContent>정상 영업날 입니다</TextContent>
    </Conatiner>
  );
};

export default Today;

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding-left: 30px;
  width: 350px;
  height: 166px;
  border: 4px solid #fff;
  border-radius: 20px;
  background-color: #ff8d00;
  background-image: url(${TodayBackground.src});
  background-position: 100% 0px;
  background-repeat: no-repeat;
`;
const TextContent = styled.span`
  color: #fffdf9;
  font-family: Noto Sans CJK KR;
  font-size: 27px;
  font-weight: 700;
  line-height: normal;
`;
