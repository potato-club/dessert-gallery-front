import { AxiosRequestConfig } from 'axios';
const httpsService = {
  authorization: (token:string): AxiosRequestConfig => {
    console.log("\n\n\n\n\n\n\ntoken", token)
    return {
      headers: {
        Authorization: token,
      },
    };
  },
};

export default httpsService;