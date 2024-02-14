import axios from "axios";
import sessionStorageService from "../libs/sessionStorageService";
import { SESSION_KEY } from "../constants/session";

const axiosClient = axios.create();

axiosClient.interceptors.request.use(
  async (config) => {
    const refreshToken = sessionStorageService.get(SESSION_KEY, "refreshToken");
    const accessToken = sessionStorageService.get(SESSION_KEY, "accessToken");

    if (accessToken !== "") {
      console.log(123);
      try {
        const tokenResponse: any = await axios.get(
          "https://api.dessert-gallery.site/users/check",
          {
            headers: {
              Authorization: accessToken,
            },
          }
        );
        console.log(tokenResponse);
        console.log(tokenResponse.response);
      } catch (error: any) {
        if (error.response.data.code === 4002) {
          console.log("토큰 만료");
          const reissueResponse: any = await axios.get(
            "https://api.dessert-gallery.site/users/reissue",
            { headers: { refreshToken: refreshToken } }
          );
          console.log(reissueResponse);
          if (reissueResponse.status === 200) {
            sessionStorageService.set(
              SESSION_KEY,
              JSON.stringify({
                JWTDataState: {
                  accessToken: reissueResponse.headers.get("Authorization"),
                  refreshToken: reissueResponse.headers.get("Refreshtoken"),
                },
              })
            );
          }
        }
      }
    }

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

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

//     if (error.response.data.code === 4002) {
//       console.log("토큰 만료");
//       const refreshToken = sessionStorageService.get("refreshToken");
//       console.log(refreshToken);

// const reissueResponse: any = await axios.get("users/reissue", {
//   headers: {
//     refreshToken: refreshToken,
//   },
// });

//   if (reissueResponse.status === 200) {
//     console.log(sessionStorageService.get("accessToken"));
//     sessionStorageService.set(
//       "accessToken",
//       reissueResponse.headers.get("Authorization")
//     );
//     console.log(sessionStorageService.get("accessToken"));
//   }
// }
//     return Promise.reject(error);
//   }
// );

// 에러 발생 시 깃 에러메세지 깃에 추가해주는 api 추가하기
export default axiosClient;
