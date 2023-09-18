import React from "react";
import styled, { css } from "styled-components";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";

interface CalendarType {
  pageType: "myPage" | "storePage";
}
const Calendar = ({ pageType }: CalendarType) => {
  const customDayCellContent = (info: any) => {
    return info.dayNumberText.replace("일", "");
  };
  return (
    <Container>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        height={280}
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
    </Container>
  );
};

export default Calendar;

const InfoList = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;
`;
const InfoSet = styled.div`
  display: flex;
  gap: 4px;
`;
const block = css`
  width: 13px;
  height: 13px;
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
  font-size: 6px;
  font-weight: 700;
  line-height: normal;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  background-color: white;
  width: 360px;
  height: 321px;
  border-radius: 20px;
  border: 3px solid #ff8d00;
  box-sizing: border-box;
  padding: 12px 30px;
  /* fullCalandar header style */
  .fc .fc-toolbar.fc-header-toolbar {
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 11px;
    border-bottom: 2px solid #fdc886;
    .fc-toolbar-title {
      font-size: 25px;
    }
  }
  .fc .fc-button {
    padding: 0;
  }
  .fc .fc-button-primary {
    border: none;
    color: black;
    background-color: #ff6f00;
  }
  /* fullCalandar body style */
  .fc-view-harness .fc-view-harness-active {
    /* height: 213px; */
  }
  .fc-day-sun a {
    color: #ff6f00;
    text-decoration: none;
  }
  .fc-day-sat a {
    color: #ff8d00;
    text-decoration: none;
  }
  .fc-day-other {
    color: #fdc886;
  }
  .fc .fc-col-header-cell {
    border-bottom: 2px solid #fdc886;
    padding: 12px 0px;
    font-size: 13px;
    font-weight: 700;
  }
  .fc table {
    border-spacing: 0;
  }
  .fc td {
    border-radius: 100%;
  }
  .fc-theme-standard td,
  .fc-theme-standard th {
    border: none;
  }
  .fc-theme-standard .fc-scrollgrid {
    border: none;
  }
  .fc-daygrid-day-frame {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }
  .fc-daygrid-day-events {
    display: none;
  }
`;
