import axios from "axios";

export const getStoreInfo = async (accessToken: string | null) => {
  const res = await axios.get(`https://api.dessert-gallery.site/stores/3`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.data;
};

export const getStoreAnnounce = async (accessToken: string | null) => {
  const res = await axios.get(
    `https://api.dessert-gallery.site/notices/stores/3`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return res.data;
};

export const getPosterThumnail = async (accessToken: string | null) => {
  const res = await axios.get(
    `https://api.dessert-gallery.site/boards/stores/3`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return res.data;
};

export const getDetailPoster = async (
  boardId: number,
  accessToken: string | null
) => {
  const res = await axios.get(
    `https://api.dessert-gallery.site/boards/${boardId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return res.data;
};

export const getStoreReview = async (accessToken: string | null) => {
  const res = await axios.get(
    `https://api.dessert-gallery.site/reviews/stores/3`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res.data;
};
