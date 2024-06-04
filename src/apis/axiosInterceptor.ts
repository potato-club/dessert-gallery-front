import axios from "axios";
import sessionStorageService from "../libs/sessionStorageService";
import { SESSION_KEY } from "../constants/session";
import Router from "next/router";

const axiosClient = axios.create();

axiosClient.defaults.withCredentials = true;

axiosClient.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    console.log("interceptor", error.response.data.code);
    const config = error.config;

    if (error.response.data.code === 4002) {
      console.log("토큰 만료");
      Router.replace("/login/reissue");
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
