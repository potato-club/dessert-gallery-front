import { SESSION_KEY } from "../../constants/session";
import sessionStorageService from "../../libs/sessionStorageService";
import sendApi from "../sendApi";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const refreshToken = sessionStorageService.get(SESSION_KEY, "refreshToken");

export const loginPageApi = {
  postLogin: async (loginData: { email: string; password?: string }) => {
    return await axios.post(`${baseURL}/users/login`, {
      email: loginData.email,
      password: loginData.password,
    });
  },
  getKakaoLogin: async (code: string) => {
    return await axios.get(`${baseURL}/users/login/kakao?code=${code}`);
  },
  getDuplicationNickname: async (nickname: string) => {
    return await axios.get(
      `${baseURL}/users/duplication/nickname?nickname=${nickname}`
    );
  },
  postSignup: async (signupData: {
    email?: string;
    userRole: "USER" | "MANAGER";
    loginType: "NORMAL" | "KAKAO";
    nickname: string;
    password: string;
  }) => {
    return await axios.post(`${baseURL}/users/signup`, signupData);
  },

  postSendVerifyCode: async (recipientEmail?: string) => {
    return await axios.post(
      `${baseURL}/users/mail/gmail`,
      {
        headers: {
          "Content-Type": "text/javascript",
        },
      },
      {
        params: {
          recipientEmail: recipientEmail,
        },
      }
    );
  },
  postCheckVerifyCode: async (formData: FormData) => {
    return await axios.post(`${baseURL}/users/mail/verify`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  getTokenCheck: async () => {
    return await axios.get(`${baseURL}/users/check`);
  },

  getReissue: async () => {
    return await axios.get(`${baseURL}/users/reissue`, {
      headers: {
        refreshToken: refreshToken,
      },
    });
  },
};
