import { DateInfo } from "../../container/myPage/calendarPage";
import sendApi from "../sendApi";

export const getLoginUserInfo = async () => {
  const res = await sendApi.get(`/users`);
  return res.data;
};

export const calendarPageApi = {
  async getManagerCalendar({ year, month }: DateInfo) {
    const res = await sendApi.get(
      `/stores/calendar?year=${year}&month=${month}`
    );
    return res.data;
  },

  async postCalendarSchedule(date: string, key: number) {
    const res = await sendApi.post(`/stores/schedule`, {
      date,
      key,
    });
    return res;
  },

  async postCalendarMemo({ year, month }: DateInfo, content: string) {
    const res = await sendApi.post(`/stores/memo`, {
      content,
      year,
      month: month.toString().padStart(2, "0"),
    });
    return res;
  },
};
