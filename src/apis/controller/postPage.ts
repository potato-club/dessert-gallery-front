import { getBoardComment } from "./detailStore";
import sendApi from "../sendApi";

export const getStoreInfo = async () => {
  const res = await sendApi.get(`/stores`);
  return res;
};

export const postStorePost = async (
  title: string,
  content: string,
  images: File[],
  tags: string
) => {
  const formData = new FormData();
  const boardDto = {
    title: title,
    content: content,
    tags: tags,
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
    alert("게시글 작성이 완료 되었습니다");
    location.reload();
    return res;
  } catch (error: any) {
    console.error("Error in postStorePost:");
    throw error;
  }
};

export const getStorePost = async (storeId: number) => {
  const res = await sendApi.get(`/boards/stores/${storeId}?last=100`);
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

export const putStorePost = async (
  postId: number,
  title: string,
  content: string,
  tags: string,
  deleteFiles?: [],
  images?: File[]
) => {
  const formData = new FormData();

  const updateDto = {
    title: title,
    content: content,
    tags: tags,
    deleteFiles: deleteFiles,
  };

  formData.append(
    "updateDto",
    new Blob([JSON.stringify(updateDto)], { type: "application/json" })
  );

  images?.forEach((image) => {
    formData.append("images", image);
  });

  try {
    const res = await sendApi.put(`/boards/${postId}`, formData);
    alert("게시글 수정이 완료 되었습니다");
    return res;
  } catch (error: any) {
    console.error("알 수 없는 에러");
    throw error;
  }
};
