import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import styled from "styled-components";
import Calendar from "./components/Calendar";
import EventAddBox from "./components/EventAddBox";
import Intro from "./components/Intro";
import MemoList from "./components/MemoList";
import Today from "./components/Today";
import TodoListOpenArrow from "../../../../public/image/TodoListOpenArrow.png";
import TodoListCloseArrow from "../../../../public/image/TodoListCloseArrow.png";
import Image from "next/image";

interface DateInfo {
  year: number | null;
  month: number | null;
}

const CalendarPage = () => {
  const [isMove, setIsMove] = useState<boolean>(false);
  const [currentWidth, setCurrentWidth] = useState<number>(0);
  const [dateInfo, setDateInfo] = useState<DateInfo>({
    year: null,
    month: null,
  });

  useEffect(() => {
    setCurrentWidth(window.innerWidth);
    window.addEventListener(
      "resize",
      debounce(() => setCurrentWidth(window.innerWidth), 200)
    );
    return () => {
      // cleanup
      window.removeEventListener(
        "resize",
        debounce(() => setCurrentWidth(window.innerWidth), 200)
      );
    };
  }, []);

  return (
    <Container>
      <LeftDiv>
        <Intro />
        <Calendar setDateInfo={setDateInfo} />
        <EventAddBox />
      </LeftDiv>
      <RightDiv isMove={isMove} currentWidth={currentWidth}>
        <AbsoulteDiv>
          {isMove ? (
            <Image
              src={TodoListCloseArrow}
              alt=""
              width={17}
              height={14}
              onClick={() => setIsMove(false)}
            />
          ) : (
            <Image
              src={TodoListOpenArrow}
              alt=""
              width={17}
              height={14}
              onClick={() => setIsMove(true)}
            />
          )}
        </AbsoulteDiv>
        <InnerContent>
          <Title>오늘은 무슨날?</Title>
          <Today />
        </InnerContent>
        <InnerContent>
          <Title>
            {dateInfo.year}년 {dateInfo.month}월 메모장
          </Title>
          <MemoList />
        </InnerContent>
      </RightDiv>
    </Container>
  );
};

export default CalendarPage;

const Container = styled.div`
  display: flex;
  height: 100%;
  overflow-x: hidden;
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
const RightDiv = styled.div<{ isMove: boolean; currentWidth: number }>`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 77px;
  padding: 59px 54px;
  background-color: #fcf0e1;
  border-radius: 30px 0px 0px 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.377);
  width: 462px;
  transition: all 0.3s ease-in-out;
  transform: ${({ isMove, currentWidth }) =>
    isMove
      ? `translateX(${currentWidth - 330 - 818 - 462}px)`
      : "translateX(0px)"};
`;
const InnerContent = styled.div`
  width: 354px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const Title = styled.span`
  color: #000;
  font-family: Noto Sans CJK KR;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;
const AbsoulteDiv = styled.div`
  position: absolute;
  transform: translateX(-35px) translateY(-27px);
  cursor: pointer;
  @media (min-width: 1576px) {
    display: none;
  }
`;