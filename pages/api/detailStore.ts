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
  try {
    const res = await axios.get(
      `https://api.dessert-gallery.site/reviews/stores/${storeId}?page=${page}`
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
  const res = await axios.get(
    `https://api.dessert-gallery.site/comments/${boardId}?p=${page}`
  );
  return res.data;
};
interface PostCommentType {
  boardId: number;
  comment: string;
  accessToken: string;
}
export const postBoardComment = async ({
  boardId,
  comment,
  accessToken,
}: PostCommentType) => {
  const res = await axios.post(
    `https://api.dessert-gallery.site/comments/${boardId}`,
    {
      comment: comment,
    },
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
  return res.data;
};
