import React from "react";
import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Container } from "../../../storePage/components/StoreCalendar";
import CalendarInfoList from "./CalendarInfoList";
import { useRecoilState } from "recoil";
import { modalBg } from "../../../../recoil/modalBg/atom";
import DateModal from "./DateModal";
import ModalWrapper from "../../../../components/ModalWrapper";

const Calendar = ({ ...props }) => {
  const [onModal, setOnModal] = useRecoilState(modalBg);

  const customDayCellContent = (info: any) => {
    return info.dayNumberText.replace("일", "");
  };

  return (
    <MyCalContainer>
      {onModal && (
        <ModalWrapper>
          <DateModal />
        </ModalWrapper>
      )}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        height={770}
        dateClick={(e: any) => {
          console.log(e);
          setOnModal(true);
        }}
        editable
        selectable
        locale="kr"
        dayCellContent={(info: any) => customDayCellContent(info)}
        datesSet={(args) => {
          const tenDaysLater =
            new Date(args.startStr).getTime() + 10 * 24 * 60 * 60 * 1000;
          props.setDateInfo({
            year: new Date(tenDaysLater).getFullYear(),
            month: new Date(tenDaysLater).getMonth() + 1,
          });
        }}
        events={
          props.scheduleList &&
          props.scheduleList.map((item: any) => {
            return { className: item.type, start: item.date };
          })
        }
      />
      <CalendarInfoList />
    </MyCalContainer>
  );
};

export default Calendar;

const MyCalContainer = styled(Container)`
  width: 818px;
  height: auto;
  border-radius: 0px;
  gap: 0px;
  padding: 0px 30px;

  /* fullCalandar header style */
  .fc .fc-toolbar.fc-header-toolbar {
    justify-content: center;
    gap: 30px;
    padding: 20px 0px 30px;
    border-bottom: 3px solid #ff8d00;
    .fc-toolbar-title {
      font-size: 32px;
    }
  }
  .fc .fc-button {
    padding: 4px;
  }
  /* fullCalandar body style */
  .fc .fc-scroller-liquid-absolute {
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .fc .fc-col-header-cell {
    border-bottom: 3px solid #ff8d00;
    padding: 29px 0px;
    font-size: 22px;
  }
  .fc-daygrid-day-frame {
    font-size: 20px;
  }
  .fc .fc-daygrid-day.fc-day-today {
    background-color: transparent;
  }
  /* fullcalendar event css */
  .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
    position: absolute;
    z-index: -1;
  }
  .fc-daygrid-day-events {
    height: 88px;
    overflow-y: hidden;
  }
  .HOLIDAY {
    border-color: transparent;
    width: 84px;
    height: 84px;
    border-radius: 100%;
    background-color: #fdc886;
  }
  .EVENT {
    border-color: transparent;
    width: 84px;
    height: 84px;
    border-radius: 100%;
    background-color: #fcf0e1;
  }
  .RESERVATION {
    border-color: transparent;
    width: 84px;
    height: 84px;
    border-radius: 100%;
    background-color: transparent;
  }
`;
