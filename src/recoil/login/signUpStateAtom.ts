import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

export type signUpDataType = {
  email: string;
  userRole: "USER" | "MANAGER";
  loginType: "NORMAL" | "KAKAO";
  nickname: string;
};

// next.js에서 sessionStorage를 사용하기 위한 코드
const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

// persistAtom 선언
const { persistAtom } = recoilPersist({
  key: "signupSessionStorage", //원하는 key 값 입력
  storage: sessionStorage,
});

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
  effects_UNSTABLE: [persistAtom],
});

// next.js에서 recoil-persist 사용 시 발생하는 hydration 에러를 해결하기 위한 코드
export function useSignupDataState() {
  const [isInitial, setIsInitial] = useState(true);
  const [value, setValue] = useRecoilState(signupDataStateAtom);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial ? defaultValue : value, setValue] as const;
}
