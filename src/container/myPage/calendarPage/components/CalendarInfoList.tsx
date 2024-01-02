import React from "react";
import styled, { css } from "styled-components";

const CalendarInfoList = () => {
  return (
    <InfoList>
      <InfoSet>
        <RestBlock />
        <Text>휴무</Text>
      </InfoSet>
      <InfoSet>
        <EventBlock />
        <Text>이벤트</Text>
      </InfoSet>
    </InfoList>
  );
};

export default CalendarInfoList;

const InfoList = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 25px;
  border-bottom: 3px solid #ff8d00;
  padding: 10px 30px 30px 0px;
`;
const InfoSet = styled.div`
  display: flex;
  gap: 12px;
`;
const block = css`
  width: 34px;
  height: 34px;
  border-radius: 100%;
`;
const PickupBlock = styled.div`
  ${block}
  background-color: #ff6f00;
`;
const RestBlock = styled.div`
  ${block}
  background-color: #fdc886;
`;
const EventBlock = styled.div`
  ${block}
  background-color: #fcf0e1;
`;
const TodayBlock = styled.div`
  ${block}
  background-color: rgba(255, 220, 40, 0.15);
`;
const Text = styled.span`
  color: #000;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  padding-top: 15px;
`;
