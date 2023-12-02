import React from "react";
import CalendarPage from "../../src/container/myPage/calendarPage";

export interface MyPageSsrProps {
  params: string;
}

const Calendar = () => {
  return (
    <>
      <CalendarPage />
    </>
  );
};

export default Calendar;
