import { useState } from "react";
import { useQuery } from "react-query";
import { calendarPageApi } from "../apis/controller/myPage";
import { DateInfo } from "../container/myPage/calendarPage";

export interface MyPageCalendarDataType {
  year: number;
  month: number;
  scheduleList: ScheduleType[];
  memoList: any[];
}
interface ScheduleType {
  id: number;
  date: string;
  type: "HOLIDAY" | "EVENT" | "RESERVATION";
}

export const useGetSchedule = ({ options }: any) => {
  const [dateInfo, setDateInfo] = useState<DateInfo>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });

  const { data: calendarData } = useQuery(
    ["schedule", dateInfo.year, dateInfo.month],
    () => calendarPageApi.getManagerCalendar(dateInfo),
    {
      ...options,
    }
  );

  return { dateInfo, setDateInfo, calendarData };
};
