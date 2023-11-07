// get 요청중, guestGet과 인증이있는 get을 나눠야하는 api
// - storeInfo

import sendApi from "../sendApi";

interface GetStoreType {
  storeId: number;
}
export const getStoreInfo = async ({ storeId }: GetStoreType) => {
  const res = await sendApi.get(`/stores/${storeId}`);
  return res.data;
};
// export const getGuestStoreInfo = async ({ storeId }: GetStoreType) => {
//   const res = await sendApi.guestGet(`/stores/${storeId}`);

//   return res.data;
// };

export const getStoreAnnounce = async ({ storeId }: GetStoreType) => {
  const res = await sendApi.get(`/notices/stores/${storeId}`);

  return res.data;
};

export const getPosterThumnail = async ({ storeId }: GetStoreType) => {
  const res = await sendApi.get(`/boards/stores/${storeId}`);

  return res.data;
};

export const getDetailPoster = async ({ storeId }: GetStoreType) => {
  const res = await sendApi.get(`/boards/${storeId}`);
  return res.data;
};

interface GetStoreReview {
  storeId: number;
  page?: number;
}

export const getStoreReview = async ({ storeId, page }: GetStoreReview) => {
  try {
    const res = await sendApi.get(`/reviews/stores/${storeId}?page=${page}`);
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
interface PostCommentType {
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

interface ToggleBookmarkType {
  boardId: number;
}
export const toggleBookmark = async ({ boardId }: ToggleBookmarkType) => {
  const res = await sendApi.post(`/boards/${boardId}/bookmark`);
  return res.data;
};
