import axios from "axios";
import { AUTH_KEY } from "../constants/authkey";
import { SESSION_KEY } from "../constants/session";
import sessionStorageService from "../libs/sessionStorageService";
import authorization from "../libs/httpService";
// import axiosClient from "./axiosInterceptor";

export const sendApi = {
  get: (url: string) => {
    if (sessionStorageService.get(SESSION_KEY) !== null) {
      return axios.get(
        AUTH_KEY.apiUrl + url,
        authorization(sessionStorageService.get(SESSION_KEY))
      );
    } else {
      return axios.get(AUTH_KEY.apiUrl + url);
    }
  },

  guestGet: (url: string) => {
    return axios.get(AUTH_KEY.apiUrl + url);
  },

  post: (url: string, req: object = {}) => {
    return axios.post(
      AUTH_KEY.apiUrl + url,
      req,
      authorization(sessionStorageService.get(SESSION_KEY))
    );
  },

  put: (url: string, req: object = {}) => {
    return axios.put(
      AUTH_KEY.apiUrl + url,
      req,
      authorization(sessionStorageService.get(SESSION_KEY))
    );
  },

  delete: (url: string) => {
    return axios.delete(
      AUTH_KEY.apiUrl + url,
      authorization(sessionStorageService.get(SESSION_KEY))
    );
  },
};

export default sendApi;
