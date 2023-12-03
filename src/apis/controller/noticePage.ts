import sendApi from "../sendApi";

export const getNoticeList = async () => {
  const res = await sendApi.get(`/notices/myStore`);
  return res.data.content;
};

export const postNotice = async () => {
  return await sendApi.post(`/notices/myStore`);
};
