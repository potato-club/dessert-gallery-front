import React from "react";
import styled from "styled-components";
import TodayBackground from "../../../../../public/image/TodayBackground.png";
import HolidayBackground from "../../../../../public/image/HolidayBackground.png";

const Today = ({ ...props }) => {
  const date = new Date();
  const today = date.getMonth() + 1 + "/" + date.getDate();
  return (
    <Conatiner isHoliday={props.isHoliday}>
      <TextContent>오늘은 {today}</TextContent>
      <TextContent>
        {props.isHoliday ? "휴무일 입니다." : "정상 영업날 입니다"}
      </TextContent>
    </Conatiner>
  );
};

export default Today;

const Conatiner = styled.div<{ isHoliday: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding-left: 30px;
  width: 350px;
  height: 166px;
  border: 4px solid #fff;
  border-radius: 20px;
  color: ${({ isHoliday }) => (isHoliday ? "#FF6F00" : "#fffdf9")};

  background-color: ${({ isHoliday }) => (isHoliday ? "#FCF6EE" : "#ff8d00")};
  background-image: ${({ isHoliday }) =>
    isHoliday
      ? `url(${HolidayBackground.src})`
      : `url(${TodayBackground.src})`};
  background-position: 100% 0px;
  background-repeat: no-repeat;
`;
const TextContent = styled.span`
  font-size: 27px;
  font-weight: 700;
  line-height: normal;
`;
