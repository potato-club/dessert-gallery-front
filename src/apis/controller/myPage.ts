import sendApi from "../sendApi";

export const getLoginUserInfo = async () => {
  const res = await sendApi.get(`/users`);
  return res.data;
};
