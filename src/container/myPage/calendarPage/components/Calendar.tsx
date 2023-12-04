import React from "react";
import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Container } from "../../../storePage/components/StoreCalendar";
import CalendarInfoList from "./CalendarInfoList";

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
      <CalendarInfoList />
    </MyCalContainer>
  );
};

export default Calendar;

const MyCalContainer = styled(Container)`
  width: 818px;
  height: 690px;
  border-radius: 0px;
  gap: 0px;
  padding: 0px 30px;
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
