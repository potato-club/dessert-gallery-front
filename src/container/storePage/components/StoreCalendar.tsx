import React from "react";
import styled, { css } from "styled-components";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";

const StoreCalendar = () => {
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

export default StoreCalendar;

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
const RestBlock = styled.div`
  ${block}
  background-color: #fdc886;
`;
const EventBlock = styled.div`
  ${block}
  background-color: #fcf0e1;
`;
const Text = styled.span`
  color: #000;
  font-size: 6px;
  font-weight: 700;
  line-height: normal;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 360px;
  height: 321px;
  box-sizing: border-box;
  border-radius: 20px;
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
      color: #ff6f00;
    }
  }
  .fc .fc-button {
    padding: 0px;
  }
  .fc .fc-button-primary {
    border: none;
    color: #ff6f00;
    background-color: #fcf0e1;
  }
  /* fullCalandar body style */
  .fc .fc-day-other .fc-daygrid-day-top {
    opacity: 0.4;
  }
  .fc-day-sun a {
    color: #ff6f00;
  }
  .fc-day-sat a {
    color: #ff8d00;
  }
  .fc-day-other {
    color: #000;
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
  .fc .fc-scroller-harness {
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .fc-daygrid-day-frame {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }
`;
