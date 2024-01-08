import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
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
interface AddEventType {
  date: string;
  key: number;
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

export const modifyCalendarPage = {
  useAddSchedule(dateInfo: DateInfo) {
    const queryClient = useQueryClient();
    const { mutate: scheduleAddFn } = useMutation(
      ["schedule", dateInfo.year, dateInfo.month],
      ({ date, key }: AddEventType) =>
        calendarPageApi.postCalendarSchedule(date, key),
      {
        onSuccess: () => {
          queryClient.refetchQueries([
            "schedule",
            dateInfo.year,
            dateInfo.month,
          ]);
        },
      }
    );
    return { scheduleAddFn };
  },

  useDeleteSchedule() {},

  useAddMemo(dateInfo: DateInfo) {
    const queryClient = useQueryClient();
    const { mutate: memoAddFn } = useMutation(
      ["schedule", dateInfo.year, dateInfo.month],
      (content: string) => calendarPageApi.postCalendarMemo(dateInfo, content),
      {
        onSuccess: () => {
          queryClient.refetchQueries([
            "schedule",
            dateInfo.year,
            dateInfo.month,
          ]);
        },
      }
    );
    return { memoAddFn };
  },

  useCheckMemo(dateInfo: DateInfo) {
    const queryClient = useQueryClient();
    const { mutate: memoCheck } = useMutation(
      ["schedule", dateInfo.year, dateInfo.month],
      (memoId: number) => calendarPageApi.putCalendarMemoCheck(memoId),
      {
        onSuccess: () => {
          queryClient.refetchQueries([
            "schedule",
            dateInfo.year,
            dateInfo.month,
          ]);
        },
      }
    );
    return { memoCheck };
  },

  useDeleteMemo(dateInfo: DateInfo) {
    const queryClient = useQueryClient();
    const { mutate: memoDelete } = useMutation(
      ["schedule", dateInfo.year, dateInfo.month],
      (memoId: number) => calendarPageApi.deleteCalendarMemo(memoId),
      {
        onSuccess: () => {
          queryClient.refetchQueries([
            "schedule",
            dateInfo.year,
            dateInfo.month,
          ]);
        },
      }
    );
    return { memoDelete };
  },
};
