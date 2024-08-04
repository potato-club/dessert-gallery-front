import sendApi from "../sendApi";
import axios from "axios";

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

export const getChatHistory = async (
  roomId: number,
  dateTime?: string | null
) => {
  const response = await sendApi.get(`/mypage/room/${roomId}?time=${dateTime}`);
  return response.data;
};

export const getSearchChatRoom = async (keyword: string) => {
  const response = await sendApi.get(`/mypage/room/search?page=${1}&name=${keyword}`);
  return response.data;
};

export const deleteChatRoom = async (roomId: number) => {
  const response = await sendApi.delete(`/mypage/room/${roomId}`);
  return response.data;
};
