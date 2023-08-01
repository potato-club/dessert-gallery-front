import { atom } from "recoil";

export type signUpDataType = {
  email: string;
  userRole: "USER" | "MANAGER";
  loginType: "NORMAL" | "KAKAO";
};

export const signUpDataState = atom<signUpDataType>({
  key: "signUpDataState",
  default: {
    email: "",
    userRole: "USER",
    loginType: "NORMAL",
  },
});
