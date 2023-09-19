import axios from "axios";

interface GetStoreType {
  accessToken?: string | null;
  storeId: number;
}
export const getStoreInfo = async ({ storeId }: GetStoreType) => {
  const res = await axios.get(
    `https://api.dessert-gallery.site/stores/${storeId}`
  );

  return res.data;
};

export const getStoreAnnounce = async ({ storeId }: GetStoreType) => {
  const res = await axios.get(
    `https://api.dessert-gallery.site/notices/stores/${storeId}`
  );

  return res.data;
};

export const getPosterThumnail = async ({ storeId }: GetStoreType) => {
  const res = await axios.get(
    `https://api.dessert-gallery.site/boards/stores/${storeId}`
  );

  return res.data;
};

export const getDetailPoster = async ({ storeId }: GetStoreType) => {
  const res = await axios.get(
    `https://api.dessert-gallery.site/boards/${storeId}`
  );
  return res.data;
};

interface GetStoreReview {
  accessToken?: string | null;
  storeId: number;
  page?: number;
}

export const getStoreReview = async ({ storeId, page }: GetStoreReview) => {
  const res = await axios.get(
    `https://api.dessert-gallery.site/reviews/stores/${storeId}?page=${page}`
  );
  return res.data;
};

interface BoardCommentType {
  boardId: number;
  page?: number;
}
export const getBoardComment = async ({ boardId, page }: BoardCommentType) => {
  const res = await axios.get(
    `https://api.dessert-gallery.site/comments/${boardId}?p=${page}`
  );
  return res.data;
};
export const postBoardComment = async ({ boardId }: BoardCommentType) => {
  const res = await axios.post(
    `https://api.dessert-gallery.site/comments/${boardId}`
  );
  return res.data;
};
