import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { calendarPageApi } from "../apis/controller/calendarPage";
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

export const useGetScheduleForUser = (storeId: number) => {
  const [dateInfo, setDateInfo] = useState<DateInfo>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });

  const { data: calendarData } = useQuery(
    ["schedule", dateInfo.year, dateInfo.month],
    () => calendarPageApi.getStoreCalendar(storeId, dateInfo),
    {
      refetchOnWindowFocus: false,
    }
  );

  return { dateInfo, setDateInfo, calendarData };
};

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

// date는 year-month-day string 형식이어야함
export const useGetDateModalSchedule = (date: string) => {
  const [year, month, day] = date.split("-").map((item) => Number(item));
  const { data: dateModalData, isLoading } = useQuery(
    ["dateModalSchedule", year, month, day],
    () => calendarPageApi.getManagerDateModal(year, month, day),
    {
      cacheTime: 0,
      refetchOnWindowFocus: false,
    }
  );

  return { dateModalData, isLoading };
};

export const useGetIsStoreHoliday = () => {
  const { data: isHoliday } = useQuery(
    ["storeHoliday"],
    () => calendarPageApi.getIsStoreHoliday(),
    {
      refetchOnWindowFocus: false,
    }
  );

  return { isHoliday };
};

export const modifyCalendarPage = {
  useAddSchedule(dateInfo: DateInfo, date: string) {
    const queryClient = useQueryClient();
    const { mutate: scheduleAddFn } = useMutation(
      ["schedule", dateInfo.year, dateInfo.month],
      ({ date, key }: AddEventType) =>
        calendarPageApi.postCalendarSchedule(date, key),
      {
        onSuccess: () => {
          const [year, month, day] = date
            .split("-")
            .map((item) => Number(item));
          queryClient.refetchQueries([
            "schedule",
            dateInfo.year,
            dateInfo.month,
          ]);
          queryClient.refetchQueries(["dateModalSchedule", year, month, day]);
        },
      }
    );
    return { scheduleAddFn };
  },

  useDeleteSchedule(dateInfo: DateInfo, date: string) {
    const queryClient = useQueryClient();
    const { mutate: scheduleDeleteFn } = useMutation(
      ["schedule", dateInfo.year, dateInfo.month],
      (scheduleId: number) =>
        calendarPageApi.deleteCalendarSchedule(scheduleId),
      {
        onSuccess: () => {
          const [year, month, day] = date
            .split("-")
            .map((item) => Number(item));
          queryClient.refetchQueries([
            "schedule",
            dateInfo.year,
            dateInfo.month,
          ]);
          queryClient.refetchQueries(["dateModalSchedule", year, month, day]);
        },
      }
    );
    return { scheduleDeleteFn };
  },

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
