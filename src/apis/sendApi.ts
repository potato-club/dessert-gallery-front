/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';


export const sendApi = {
  get: (url:string) => {
    return axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}${url}`,
    );
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