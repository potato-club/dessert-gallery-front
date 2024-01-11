import React, { useState } from "react";
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
  const [clickDateInfo, setClickDateInfo] = useState<null | string>(null);

  const customDayCellContent = (info: any) => {
    return info.dayNumberText.replace("일", "");
  };

  return (
    <MyCalContainer>
      {onModal && (
        <ModalWrapper>
          <DateModal
            dateInfo={props.dateInfo}
            clickDateInfo={clickDateInfo}
            scheduleList={props.scheduleList}
          />
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
          setClickDateInfo(e.dateStr);
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
  .fc .fc-col-header-cell {
    border-bottom: 3px solid #ff8d00;
    padding: 29px 0px;
    font-size: 22px;
  }
  .fc-daygrid-day-frame {
    font-size: 20px;
  }
  /* fullcalendar event css */
  .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
    width: 88px;
    height: 88px;
  }
  .HOLIDAY {
    width: 17px;
    height: 17px;
  }
  .EVENT {
    width: 17px;
    height: 17px;
  }
  .RESERVATION {
    border-color: transparent;
    width: 17px;
    height: 17px;
    border-radius: 100%;
    background-color: #ff6f00;
  }
`;
