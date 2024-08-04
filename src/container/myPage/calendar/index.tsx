import React from "react";
import styled from "styled-components";
import Calendar from "./components/Calendar";
import Intro from "./components/Intro";
import { useGetSchedule } from "../../../hooks/useSchedule";
import MovingBox from "./components/MovingBox";
import { useResize } from "../../../hooks/useReszie";

export interface DateInfo {
  year: number;
  month: number;
}
const CalendarPage = () => {
  const { dateInfo, setDateInfo, calendarData } = useGetSchedule({});
  const { currentWidth } = useResize();
  return (
    <Container currentWidth={currentWidth}>
      <CalendarDiv>
        <Intro />
        <Calendar
          dateInfo={dateInfo}
          setDateInfo={setDateInfo}
          scheduleList={calendarData?.scheduleList}
          currentWidth={currentWidth}
        />
      </CalendarDiv>
      <MovingBox dateInfo={dateInfo} calendarData={calendarData} />
    </Container>
  );
};

export default CalendarPage;

const Container = styled.div<{ currentWidth: number }>`
  display: flex;
  margin: 0px auto;
  overflow-x: hidden;
  padding-right: ${({ currentWidth }) =>
    currentWidth > 2000 ? "462px" : "100px"};
`;
const CalendarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 58px 0px 61px;
`;
