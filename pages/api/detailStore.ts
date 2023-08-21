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

export const getStorePoster = async (accessToken: string | null) => {
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

export const getDetailPoster = async ({ boardId }: any) => {
  const res = await axios.get(`https://api.dessert-gallery.site/boards/1`);

  return res.data;
};
