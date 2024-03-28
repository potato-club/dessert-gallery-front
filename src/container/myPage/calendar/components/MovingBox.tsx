import React, { useState } from "react";
import styled from "styled-components";
import MemoList from "../components/MemoList";
import Today from "../components/Today";
import TodoListOpenArrow from "../../../../../public/image/TodoListOpenArrow.png";
import TodoListCloseArrow from "../../../../../public/image/TodoListCloseArrow.png";
import Image from "next/image";
import { useGetIsStoreHoliday } from "../../../../hooks/useSchedule";
import { useResize } from "../../../../hooks/useReszie";

const MovingBox = ({ ...props }) => {
  const [isMove, setIsMove] = useState<boolean>(false);

  const { isHoliday } = useGetIsStoreHoliday();
  const { currentWidth } = useResize();

  return (
    <Container isMove={isMove} currentWidth={currentWidth}>
      <InnerBox>
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
          <Today isHoliday={isHoliday} />
        </InnerContent>
        <InnerContent>
          <Title>
            {props.dateInfo.year}년 {props.dateInfo.month}월 메모장
          </Title>
          <MemoList
            memoList={props.calendarData?.memoList}
            dateInfo={props.dateInfo}
          />
        </InnerContent>
      </InnerBox>
    </Container>
  );
};

export default MovingBox;

const Container = styled.div<{ isMove: boolean; currentWidth: number }>`
  position: fixed;
  right: 0;
  height: 100vh;
  z-index: 1;
  padding: 59px 54px;
  background-color: #fcf0e1;
  border-radius: 30px 0px 0px 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.377);
  width: 462px;
  transition: all 0.3s ease-in-out;
  transform: translateX(370px);
  transform: ${({ isMove, currentWidth }) =>
    currentWidth < 2000
      ? isMove
        ? "translateX(0px)"
        : "translateX(355px)"
      : "translateX(0px)"};
`;
/* `translateX(${currentWidth - 330 - 818 - 462}px)` */

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 77px;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const InnerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const Title = styled.span`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;
const AbsoulteDiv = styled.div`
  position: absolute;
  transform: translateX(-35px) translateY(-27px);
  cursor: pointer;
  @media (min-width: 2000px) {
    display: none;
  }
`;
