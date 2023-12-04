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
        height={690}
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
