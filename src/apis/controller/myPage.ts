import sendApi from "../sendApi";

export const getLoginUserInfo = async () => {
  const res = await sendApi.get(`/users`);
  return res.data;
};

export const getFollow = async (page: number) => {
  const res = await sendApi.get(`/mypage/follow?page=${page}`);
  return res.data;
};
