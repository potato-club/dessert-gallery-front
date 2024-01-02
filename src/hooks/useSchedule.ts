import { useEffect, useState } from "react";
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

export const useGetMyPageCalendar = () => {
  const [dateInfo, setDateInfo] = useState<DateInfo>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });
  const [calendarData, setCalendarData] = useState<MyPageCalendarDataType>();

  useEffect(() => {
    const fetchCalendarData = async () => {
      const res = await calendarPageApi.getManagerCalendar(dateInfo);
      setCalendarData(res);
    };
    fetchCalendarData();
  }, [dateInfo]);

  return { dateInfo, setDateInfo, calendarData };
};
