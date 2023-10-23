/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { AUTH_KEY, } from '../constants/authkey';
import { SESSION_KEY } from '../constants/session';
import sessionStorageService from '../libs/sessionStorageService';
import authorization from '../libs/httpService';


export const sendApi = {
  get: (url:string) => {
    console.log('sessionStorageService.get(SESSION_KEY', sessionStorageService.get(SESSION_KEY))
    if(sessionStorageService.get(SESSION_KEY) !== null){ 
      return axios.get(
        `${AUTH_KEY.apiUrl}${url}`,
        authorization(sessionStorageService.get(SESSION_KEY)) 
      );
    }else{
      return axios.get(`${AUTH_KEY.apiUrl}${url}`);
    }
  },


  guestGet: (url: string) => {
    return axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}${url}`,
    );
  },

  post: (url: string, req: object = {}) => {
    return axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      req,
    );
  },

  put: (url: string, req: object = {}) => {
    return axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      req,
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