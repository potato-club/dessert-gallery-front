import React from "react";
import styled from "styled-components";
import Calendar from "./components/Calendar";
import EventAddBox from "./components/EventAddBox";
import Intro from "./components/Intro";

const CalendarPage = () => {
  return (
    <Container>
      <LeftDiv>
        <Intro />
        <Calendar />
        <EventAddBox />
      </LeftDiv>
      <RightDiv></RightDiv>
    </Container>
  );
};

export default CalendarPage;

const Container = styled.div`
  display: flex;
  height: 100%;
`;
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 58px 0px 61px;
  @media (min-width: 1280px) {
    width: calc(818px + (1128 - 818) * ((100vw - 1280px) / (1920 - 1280)));
  }
  @media (min-width: 1920px) {
    width: 1128px;
  }
`;
const RightDiv = styled.div`
  min-width: 120px;
  @media (min-width: 1280px) {
    width: calc(132px + (462 - 132) * ((100vw - 1280px) / (1920 - 1280)));
  }
  @media (min-width: 1920px) {
    width: 462px;
  }
  background-color: black;
`;
