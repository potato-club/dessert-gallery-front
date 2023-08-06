import { atom } from "recoil";

export type signUpDataType = {
  email: string;
  userRole: "USER" | "MANAGER";
  loginType: "NORMAL" | "KAKAO";
  nickname: string;
};

export const signUpDataStateAtom = atom<signUpDataType>({
  key: "signUpDataState",
  default: {
    email: "",
    userRole: "USER",
    loginType: "NORMAL",
    nickname: "",
  },
});
