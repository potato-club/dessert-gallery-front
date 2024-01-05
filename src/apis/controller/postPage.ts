import sendApi from "../sendApi";

export const getStoreInfo = async () => {
  const res = await sendApi.get(`/stores`);
  return res;
};
