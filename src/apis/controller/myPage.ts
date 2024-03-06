import sendApi from "../sendApi";

export const getLoginUserInfo = async () => {
  const res = await sendApi.get(`/users`);
  return res.data;
};

export const getFollow = async (page: number) => {
  const res = await sendApi.get(`/mypage/follow?page=${page}`);
  return res.data;
};

export const getBlockedList = async (page: number) => {
  const res = await sendApi.get(`/mypage/blacklist?page=${page}`);
  return res.data;
};

export const postBlocked = async (userName: string) => {
  const res = await sendApi.post(`/mypage/blacklist`, {
    userName,
  });
  return res.data;
};

export const putUnBlocked = async (userName: string) => {
  const res = await sendApi.put(`/mypage/blacklist`, {
    userName,
  });
  return res.data;
};
