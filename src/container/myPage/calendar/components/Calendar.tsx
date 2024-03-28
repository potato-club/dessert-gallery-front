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
    <MyCalContainer currentWidth={props.currentWidth}>
      {onModal && (
        <ModalWrapper>
          {clickDateInfo && (
            <DateModal
              dateInfo={props.dateInfo}
              clickDateInfo={clickDateInfo}
              scheduleList={props.scheduleList}
            />
          )}
        </ModalWrapper>
      )}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        height={props.currentWidth > 1700 ? 900 : 770}
        dateClick={(e: any) => {
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
          props.scheduleList.flatMap((item: any) => {
            return [
              item.event && { className: "event", start: item.date },
              item.holiday && { className: "holiday", start: item.date },
              item.reservation && {
                className: "reservation",
                start: item.date,
              },
            ].filter(Boolean);
          })
        }
      />
      <CalendarInfoList />
    </MyCalContainer>
  );
};

export default Calendar;

const MyCalContainer = styled(Container)<{ currentWidth: number }>`
  width: ${({ currentWidth }) => (currentWidth > 1700 ? "1000px" : "818px")};
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
      font-size: ${({ currentWidth }) =>
        currentWidth > 1700 ? "35px" : "32px"};
      font-weight: 600;
    }
  }
  .fc .fc-button {
    padding: ${({ currentWidth }) => (currentWidth > 1700 ? "7px" : "4px")};
  }
  /* fullCalandar body style */
  .fc .fc-col-header-cell {
    border-bottom: 3px solid #ff8d00;
    padding: 29px 0px;
    font-size: 22px;
  }
  .fc-daygrid-day-frame {
    font-size: ${({ currentWidth }) => (currentWidth > 1700 ? "23px" : "20px")};
  }
  /* fullcalendar event css */
  .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
    width: 88px;
    height: 88px;
  }
  .holiday {
    width: 17px;
    height: 17px;
  }
  .event {
    width: 17px;
    height: 17px;
  }
  .reservation {
    border-color: transparent;
    width: 17px;
    height: 17px;
    border-radius: 100%;
    background-color: #ff6f00;
  }
`;
