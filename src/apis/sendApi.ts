import axios from 'axios';
import { AUTH_KEY } from '../constants/authkey';
import httpService from '../constants/libs/httpService';

let ck = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0YW1kNTk3MUBuYXZlci5jb20iLCJyb2xlcyI6Ik1BTkFHRVIiLCJpYXQiOjE2OTM4OTE1MzUsImV4cCI6MTY5Mzg5MzMzNX0.xvxGA-2tW3en2DKv-Q-ZaI38r4f2lNCO1M8kNSZwXhk`

export const sendApi = {
  get: (url:string) => {
    return axios.get(
      `https://api.dessert-gallery.site${url}`,
      // httpService.authorization(localStorageService.get(SESSION_ID))
      httpService.authorization(ck)
    );
  },


  guestGet: (url: string) => {
    console.log("getGuest: ", `https://api.dessert-gallery.site${url}`)
    return axios.get(
      `https://api.dessert-gallery.site${url}`,
    );
  },

  post: (url: string, req: object = {}) => {
    return axios.post(
      `https://api.dessert-gallery.site${url}`,
      req,
      // httpService.authorization(localStorageService.get(SESSION_ID))
      httpService.authorization(ck)
    );
  },

  put: (url: string, req: object = {}) => {
    return axios.put(
      `https://api.dessert-gallery.site${url}`,
      req,
      // httpService.authorization(localStorageService.get(SESSION_ID))
      httpService.authorization(ck)
    );
  },

  // delete: (url) => {
  //   return axios.delete(
  //     AUTH_KEY.apiUrl + url,
  //     httpService.authorization(localStorageService.get(SESSION_ID))
  //   );
  // },
};

export default sendApi;