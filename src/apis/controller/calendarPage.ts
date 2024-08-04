import { DateInfo } from "../../container/myPage/calendar";
import sendApi from "../sendApi";

export const calendarPageApi = {
  async getStoreCalendar(storeId: number, { year, month }: DateInfo) {
    const res = await sendApi.get(
      `/stores/${storeId}/calendar?year=${year}&month=${month}`
    );
    return res.data;
  },

  async getManagerCalendar({ year, month }: DateInfo) {
    const res = await sendApi.get(
      `/stores/calendar?year=${year}&month=${month}`
    );
    return res.data;
  },

  async getManagerDateModal(year: number, month: number, day: number) {
    const res = await sendApi.get(
      `/stores/schedule?year=${year}&month=${month}&day=${day}`
    );
    return res.data;
  },

  async getIsStoreHoliday() {
    const res = await sendApi.get(`/stores/closed`);
    return res.data;
  },

  async postCalendarSchedule(date: string, key: number) {
    const res = await sendApi.post(`/stores/schedule`, {
      date,
      key,
    });
    return res;
  },

  async deleteCalendarSchedule(scheduleId: number) {
    const res = await sendApi.delete(`/stores/schedule?id=${scheduleId}`);
    return res;
  },

  async putCheckReservation(reservationId: number) {
    const res = await sendApi.put(`/stores/schedule?id=${reservationId}`);
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

  async putCalendarMemoCheck(memoId: number) {
    const res = await sendApi.put(`/stores/memo?id=${memoId}`);
    return res;
  },

  async deleteCalendarMemo(memoId: number) {
    const res = await sendApi.delete(`/stores/memo?id=${memoId}`);
    return res;
  },
};
