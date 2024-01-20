import React from "react";
import styled from "styled-components";
import TodayBackground from "../../../../../public/image/TodayBackground.png";
import HolidayBackground from "../../../../../public/image/HolidayBackground.png";

const Today = ({ ...props }) => {
  const date = new Date();
  const today = date.getMonth() + 1 + "/" + date.getDate();
  return (
    <Conatiner holiday={props.holiday}>
      <TextContent>오늘은 {today}</TextContent>
      <TextContent>
        {props.holiday ? "휴무일 입니다." : "정상 영업날 입니다"}
      </TextContent>
    </Conatiner>
  );
};

export default Today;

const Conatiner = styled.div<{ holiday: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding-left: 30px;
  width: 350px;
  height: 166px;
  border: 4px solid #fff;
  border-radius: 20px;
  color: ${({ holiday }) => (holiday ? "#FF6F00" : "#fffdf9")};

  background-color: ${({ holiday }) => (holiday ? "#FCF6EE" : "#ff8d00")};
  background-image: ${({ holiday }) =>
    holiday ? `url(${HolidayBackground.src})` : `url(${TodayBackground.src})`};
  background-position: 100% 0px;
  background-repeat: no-repeat;
`;
const TextContent = styled.span`
  font-family: Noto Sans CJK KR;
  font-size: 27px;
  font-weight: 700;
  line-height: normal;
`;
