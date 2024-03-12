import sendApi from "../sendApi";

export const getStoreInfo = async () => {
  const response = await sendApi.get(`/stores`);
  return response;
};

export const getUserInfo = async () => {
  const response = await sendApi.get(`/users`);
  return response.data;
};

export const postChatRoom = async (storeId: number) => {
  console.log("postChatRoom");

  const response = await sendApi.post(`/mypage/room/${storeId}`);
  return response;
};

export const getChatRoom = async () => {
  const response = await sendApi.get(`/mypage/room?page=${1}`);
  return response.data;
};

export const getChatHistory = async (roomId: number) => {
  var today = new Date();

  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);

  var dateTime = year + "-" + month + "-" + day;
  const response = await sendApi.get(`/mypage/room/${roomId}?time=${dateTime}`);
  return response.data;
};

export const deleteChatRoom = async (roomId: number) => {
  const response = await sendApi.delete(`/mypage/room/${roomId}`);
  return response.data;
};
