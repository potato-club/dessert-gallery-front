import axios from "axios";
import { AUTH_KEY } from "../constants/authkey";
import { SESSION_KEY } from "../constants/session";
import sessionStorageService from "../libs/sessionStorageService";
import authorization from "../libs/httpService";
import axiosClient from "./axiosInterceptor";

export const sendApi = {
  get: (url: string) => {
    if (sessionStorageService.get(SESSION_KEY, "accessToken") !== null) {
      return axiosClient.get(
        AUTH_KEY.apiUrl + url,
        authorization(sessionStorageService.get(SESSION_KEY, "accessToken"))
      );
    } else {
      return axios.get(AUTH_KEY.apiUrl + url, { withCredentials: true });
    }
  },

  guestGet: (url: string) => {
    return axios.get(AUTH_KEY.apiUrl + url);
  },

  post: (url: string, req: object = {}) => {
    return axiosClient.post(
      AUTH_KEY.apiUrl + url,
      req,
      authorization(sessionStorageService.get(SESSION_KEY, "accessToken"))
    );
  },

  put: (url: string, req: object = {}) => {
    return axiosClient.put(
      AUTH_KEY.apiUrl + url,
      req,
      authorization(sessionStorageService.get(SESSION_KEY, "accessToken"))
    );
  },

  delete: (url: string) => {
    return axiosClient.delete(
      AUTH_KEY.apiUrl + url,
      authorization(sessionStorageService.get(SESSION_KEY, "accessToken"))
    );
  },
};

export default sendApi;
