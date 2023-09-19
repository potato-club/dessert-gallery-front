import React, { useEffect } from "react";
import LoginMainContainer from "../../src/container/loginPage/loginMain/LoginMainContainer";
import { useKakaoSignupDataState } from "../../src/recoil/login/kakaoSignUpStateAtom";
import {
  signUpDataType,
  signupDataStateAtom,
} from "../../src/recoil/login/signUpStateAtom";
import { useRecoilState } from "recoil";

const LoginMain = () => {
  const [signupData, setSignupData] = useRecoilState(signupDataStateAtom);
  const [kakaoSignupData, setKakaoSignupData] = useKakaoSignupDataState();

  const defaultValue: signUpDataType = {
    email: "",
    userRole: "USER",
    loginType: "NORMAL",
    nickname: "",
  };

  useEffect(() => {
    setSignupData(defaultValue);
    setKakaoSignupData(defaultValue);
  }, []);
  return <LoginMainContainer />;
};

export default LoginMain;
