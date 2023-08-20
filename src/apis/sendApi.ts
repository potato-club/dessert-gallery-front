import axios from 'axios';
import { AUTH_KEY } from '../constants/authkey';
//import httpService from 'libs/httpService';


export const sendApi = {
  // get: (url) => {
  //   return axios.get(
  //     AUTH_KEY.apiUrl + url,
  //     httpService.authorization(localStorageService.get(SESSION_ID))
  //   );
  // },


  guestGet: (url: string) => {
    return axios.get(
      AUTH_KEY.apiUrl + url,
    );
  },

  // post: (url, req) => {
  //   return axios.post(
  //     AUTH_KEY.apiUrl + url,
  //     req,
  //     httpService.authorization(localStorageService.get(SESSION_ID))
  //   );
  // },

  // put: (url, req) => {
  //   return axios.put(
  //     AUTH_KEY.apiUrl + url,
  //     req,
  //     httpService.authorization(localStorageService.get(SESSION_ID))
  //   );
  // },

  // delete: (url) => {
  //   return axios.delete(
  //     AUTH_KEY.apiUrl + url,
  //     httpService.authorization(localStorageService.get(SESSION_ID))
  //   );
  // },
};

export default sendApi;