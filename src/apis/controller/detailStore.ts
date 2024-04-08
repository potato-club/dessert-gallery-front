// get 요청중, guestGet과 인증이있는 get을 나눠야하는 api
// - storeInfo

import sendApi from "../sendApi";

export const getStoreInfo = async (storeId: number) => {
  const res = await sendApi.get(`/stores/${storeId}`);
  return res.data;
};

export const getStoreAnnounce = async (storeId: number) => {
  const res = await sendApi.get(`/notices/stores/${storeId}`);

  return res.data;
};

export const getPosterList = async (storeId: number, page: number) => {
  const res = await sendApi.get(`/boards/stores/${storeId}?page=${page}`);

  return res.data;
};

export const getDetailPoster = async (boardId: number) => {
  const res = await sendApi.get(`/boards/${boardId}`);
  return res.data;
};

interface GetStoreReview {
  storeId: number;
  page?: number;
}

export const getStoreReview = async ({ storeId, page }: GetStoreReview) => {
  try {
    const res = await sendApi.get(
      `/reviews/stores/${storeId}?page=${page || 1}`
    );
    return res.data;
  } catch (error: any) {
    throw error;
  }
};

interface GetCommentType {
  boardId: number;
  page?: number;
}
export const getBoardComment = async ({ boardId, page }: GetCommentType) => {
  const res = await sendApi.get(`/comments/${boardId}?p=${page}`);
  return res.data;
};
export interface PostCommentType {
  boardId: number;
  comment: string;
}
export const postBoardComment = async ({
  boardId,
  comment,
}: PostCommentType) => {
  const res = await sendApi.post(`/comments/${boardId}`, {
    comment: comment,
  });
  return res.data;
};
export const deleteComment = async (commentId: number) => {
  const res = await sendApi.delete(`/comments?id=${commentId}`);
  return res.data;
};

interface ToggleBookmarkType {
  boardId: number;
}
export const toggleBookmark = async ({ boardId }: ToggleBookmarkType) => {
  const res = await sendApi.post(`/boards/${boardId}/bookmark`);
  return res.data;
};

export const getBookmark = async (page: number) => {
  const res = await sendApi.get(`/users/bookmark?page=${page}`);
  return res.data;
};
