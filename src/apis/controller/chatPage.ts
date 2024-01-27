import sendApi from "../sendApi";

export const getStoreInfo = async () => {
  const response = await sendApi.get(`/stores`);
  return response;
};

export const postChatRoom = async (storeId: number) => {
  const response = await sendApi.post(`/mypage/room`, {
    storeId: storeId,
  });
  return response;
};

export const getChatRoom = async () => {
  const response = await sendApi.get(`/mypage/room?page=${1}`);
  return response.data;
};
