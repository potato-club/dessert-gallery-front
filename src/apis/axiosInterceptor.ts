// import axios from "axios";
// import sessionStorageService from "../libs/sessionStorageService";
// import { SESSION_KEY } from "../constants/session";
// import sendApi from "./sendApi";

// const axiosClient = axios.create();

// axiosClient.interceptors.response.use(
//   (response) => {
//     console.log("인터셉터", response.data);
//     if (response.data.responseCode === 4002) {
//       // 여기서
//     }
//     return response;
//   },
//   async (error) => {
//     console.log("interceptor", error.response.data.code);

//     // if (error.response.data.code === 4002) {
//     //   console.log("토큰 만료");
//     //   const refreshToken = sessionStorageService.get("refreshToken");
//     //   console.log(refreshToken);

//     //   const reissueResponse: any = await axios.get("users/reissue", {
//     //     headers: {
//     //       refreshToken: refreshToken,
//     //     },
//     //   });

//     //   if (reissueResponse.status === 200) {
//     //     console.log(sessionStorageService.get("accessToken"));
//     //     sessionStorageService.set(
//     //       "accessToken",
//     //       reissueResponse.headers.get("Authorization")
//     //     );
//     //     console.log(sessionStorageService.get("accessToken"));
//     //   }
//     // }
//     // return Promise.reject(error);
//   }
// );

// // 에러 발생 시 깃 에러메세지 깃에 추가해주는 api 추가하기
// export default axiosClient;
