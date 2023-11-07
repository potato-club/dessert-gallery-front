import axios from "axios";

interface GetStoreType {
  accessToken?: string | null;
  storeId: number;
}
export const getStoreInfo = async ({ storeId, accessToken }: GetStoreType) => {
  let headers = {};
  if (accessToken) {
    headers = {
      Authorization: accessToken,
    };
  }
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/stores/${storeId}`,
    {
      headers: headers,
    }
  );

  return res.data;
};

export const getStoreAnnounce = async ({ storeId }: GetStoreType) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/notices/stores/${storeId}`
  );

  return res.data;
};

export const getPosterThumnail = async ({ storeId }: GetStoreType) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/boards/stores/${storeId}`
  );

  return res.data;
};

export const getDetailPoster = async ({ storeId }: GetStoreType) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/boards/${storeId}`
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
      `${process.env.NEXT_PUBLIC_API_URL}/reviews/stores/${storeId}?page=${page}`
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
    `${process.env.NEXT_PUBLIC_API_URL}/comments/${boardId}?p=${page}`
  );
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
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/comments/${boardId}`,
    {
      comment: comment,
    },
    {
      headers: {
        Authorization:
          "Baerer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkb25nZ3l1bmtpbTEyQGdtYWlsLmNvbSIsInJvbGVzIjoiVVNFUiIsImlhdCI6MTY5NzUzNjgxNiwiZXhwIjoxNjk3NTM4NjE2fQ.GaJ80iXonHV5MSSe_FHu2_QcwPvC5RA9dX_ZSqrCebk",
      },
    }
  );
  return res.data;
};

interface ToggleBookmarkType {
  boardId: number;
}
export const toggleBookmark = async ({ boardId }: ToggleBookmarkType) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/boards/${boardId}/bookmark`,
    {},
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkb25nZ3l1bmtpbTEyQGdtYWlsLmNvbSIsInJvbGVzIjoiVVNFUiIsImlhdCI6MTY5NzUzNjgxNiwiZXhwIjoxNjk3NTM4NjE2fQ.GaJ80iXonHV5MSSe_FHu2_QcwPvC5RA9dX_ZSqrCebk",
      },
    }
  );
  return res.data;
};
