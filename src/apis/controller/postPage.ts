import { getBoardComment } from "./detailStore";
import sendApi from "../sendApi";

export const getStoreInfo = async () => {
  const res = await sendApi.get(`/stores`);
  return res;
};

export const postStorePost = async (
  title: string,
  content: string,
  images: File[]
) => {
  const formData = new FormData();

  const boardDto = {
    title: title,
    content: content,
    tags: "#asd",
  };

  formData.append(
    "boardDto",
    new Blob([JSON.stringify(boardDto)], { type: "application/json" })
  );

  images.forEach((image) => {
    formData.append("images", image);
  });

  try {
    const res = await sendApi.post(`/boards`, formData);
    return res;
  } catch (error: any) {
    console.error("Error in postStorePost:", error.response.data);
    throw error;
  }
};

export const getStorePost = async (storeId: number) => {
  const res = await sendApi.get(`/boards/stores/${storeId}?last=17`);
  return res.data.content;
};

export const getDetailPost = async (postId: number) => {
  const res = await sendApi.get(`/boards/${postId}`);
  return res.data;
};

export const deletePost = async (postId: number) => {
  const res = await sendApi.delete(`/boards/${postId}`);
  return res;
};

export const getDetailPostComment = async (postId: number) => {
  const res = await sendApi.get(`/comments/${postId}?1`);
  return res.data.content;
};
