import React, { useEffect } from "react";
import LoginPickContainer from "../../src/container/loginPage/loginPick/LoginPickContainer";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { signUpDataState } from "../../src/recoil/login/signUpState";

const LoginPick = () => {
  const router = useRouter();
  const [signUpData, setSignUpData] = useRecoilState(signUpDataState);

  useEffect(() => {
    console.log(signUpData);
  }, [signUpData]);
  return <LoginPickContainer />;
};

export default LoginPick;
