import React from "react";
import styled, { css } from "styled-components";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Container } from "../../storePage/components/StoreCalendar";

const Calendar = () => {
  const customDayCellContent = (info: any) => {
    return info.dayNumberText.replace("일", "");
  };
  return (
    <MyCalContainer>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        height={690}
        dateClick={(e: any) => {
          console.log(e);
        }}
        editable
        selectable
        locale="kr"
        dayCellContent={(info: any) => customDayCellContent(info)}
      />
      <InfoList>
        <InfoSet>
          <TodayBlock />
          <Text>오늘</Text>
        </InfoSet>
        <InfoSet>
          <PickupBlock />
          <Text>픽업</Text>
        </InfoSet>
        <InfoSet>
          <RestBlock />
          <Text>휴무</Text>
        </InfoSet>
        <InfoSet>
          <EventBlock />
          <Text>이벤트</Text>
        </InfoSet>
      </InfoList>
    </MyCalContainer>
  );
};

export default Calendar;

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
const MyCalContainer = styled(Container)`
  width: 884px;
  height: 690px;
  border-radius: 0px;
  gap: 0px;
  /* fullCalandar header style */
  .fc .fc-toolbar.fc-header-toolbar {
    justify-content: center;
    gap: 30px;
    padding: 16px;
    border-bottom: 3px solid #ff8d00;
    .fc-toolbar-title {
      font-size: 32px;
    }
  }
  .fc .fc-button {
    padding: 4px;
  }
  /* fullCalandar body style */
  .fc .fc-col-header-cell {
    border-bottom: 3px solid #ff8d00;
    padding: 29px 0px;
    font-size: 22px;
  }
  .fc-daygrid-day-frame {
    font-size: 20px;
  }
`;
