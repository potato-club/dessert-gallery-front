import { atom } from "recoil";

export type signUpDataType = {
  email?: string;
  userRole: "USER" | "MANAGER";
  loginType: "NORMAL" | "KAKAO";
  nickname: string;
};

const defaultValue: signUpDataType = {
  email: "",
  userRole: "USER",
  loginType: "NORMAL",
  nickname: "",
};

// 리코일 atom 선언, effects_UNSTABLE 속성을 이용해 웹스토리지 사용 정의
export const signupDataStateAtom = atom<signUpDataType>({
  key: "signUpDataState",
  default: defaultValue,
});
