import sendApi from "../sendApi";

export const loginPageApi = {
  postLogin: async (loginData: { email: string; password?: string }) => {
    return await sendApi.post(`/users/login`, {
      email: loginData.email,
      password: loginData.password,
    });
  },
  getKakaoLogin: async (code: string) => {
    return await sendApi.get(`/users/login/kakao?code=${code}`);
  },
  getDuplicationNickname: async (nickname: string) => {
    return await sendApi.get(
      `/users/duplication/nickname?nickname=${nickname}`
    );
  },
  postSignup: async (signupData: {
    email?: string;
    userRole: "USER" | "MANAGER";
    loginType: "NORMAL" | "KAKAO";
    nickname: string;
    password: string;
  }) => {
    return await sendApi.post(`/users/signup`, signupData);
  },

  // 아래 2개의 코드는 현재의 sendApi 코드로는 불가능한 것으로 보이므로 일단 보류
  postSendVerifyCode: async (recipientEmail: string) => {
    return await sendApi.post(
      // 기존에는 recipientEmil을 params로 전달 했었음
      // 이대로 테스트해보고 안되면 파라미터로 바꾸기
      "/users/mail/gmail",
      {
        recipientEmail: recipientEmail,
      }
    );
  },
  postCheckVerifyCode: async (formData: FormData) => {
    return await sendApi.post(
      "/users/mail/verify",
      formData
      // 원래 코드에는 헤더에 컨텐츠 타입을 지정해주는 코드가 있음
      // 이대로 시도해보고 안되면 sendApi에 헤더를 지정해주는 부분을 추가하거나
      //그냥 기존 방법대로 사용하기
      // {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // }
    );
  },
};
