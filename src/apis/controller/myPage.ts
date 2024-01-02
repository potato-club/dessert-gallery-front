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
};
