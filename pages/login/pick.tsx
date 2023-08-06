import React, { useEffect } from "react";
import LoginPickContainer from "../../src/container/loginPage/loginPick/LoginPickContainer";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { signUpDataStateAtom } from "../../src/recoil/login/signUpStateAtom";

const LoginPick = () => {
  const router = useRouter();
  const [signUpData, setSignUpData] = useRecoilState(signUpDataStateAtom);

  useEffect(() => {
    console.log(signUpData);
  }, [signUpData]);
  return <LoginPickContainer />;
};

export default LoginPick;
