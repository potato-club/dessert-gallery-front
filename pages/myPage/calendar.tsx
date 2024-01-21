import React from "react";
import CalendarPage from "../../src/container/myPage/calendarPage";
import { GetServerSideProps } from "next";
import { QueryClient, dehydrate } from "react-query";
import { calendarPageApi } from "../../src/apis/controller/myPage";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  await queryClient.prefetchQuery(["schedule", year, month], () =>
    calendarPageApi.getManagerCalendar({ year, month })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient), // 초기 데이터 캐싱
    },
  };
};
