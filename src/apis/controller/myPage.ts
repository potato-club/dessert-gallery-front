import axios from 'axios';
import sendApi from '../sendApi';
import { AUTH_KEY } from '../../constants/authkey';

export const getLoginUserInfo = async () => {
  try {
    const res = await sendApi.get(`/users`);
    return res.data;
  } catch (err: any) {
    console.error(err);
  }
};

export const getFollow = async (page: number) => {
  const res = await sendApi.get(`/mypage/follow?page=${page}`);
  return res.data;
};

export const getBlockedList = async (page: number) => {
  const res = await sendApi.get(`/mypage/blacklist?page=${page}`);
  return res.data;
};

export const postBlocked = async (storeId: number, userName: string) => {
  const res = await sendApi.post(`/mypage/blacklist`, {
    storeId,
    userName,
  });
  return res.data;
};

export const putUnBlocked = async (storeId: number, userName: string) => {
  const res = await sendApi.put(`/mypage/blacklist`, {
    storeId,
    userName,
  });
  return res.data;
};

export const logout = async ({ at, rt }: { at: string; rt: string }) => {
  const res = await axios.get(`${AUTH_KEY.apiUrl}/users/logout`, {
    headers: {
      Authorization: at,
      RefreshToken: rt,
    },
  });
  return res;
};

export const withdrawal = async ({ at, rt }: { at: string; rt: string }) => {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/users/withdrawal`,
    {},
    {
      headers: {
        Authorization: at,
        RefreshToken: rt,
      },
    }
  );
  return res;
};
