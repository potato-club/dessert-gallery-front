import React, { useEffect } from "react";
import LoginPickContainer from "../../src/container/loginPage/loginPick/LoginPickContainer";
import { useRouter } from "next/router";
import { useSignupDataState } from "../../src/recoil/login/signupStateAtom";

const LoginPick = () => {
  const router = useRouter();
  const [signUpData, setSignUpData] = useSignupDataState();

  useEffect(() => {
    console.log(signUpData);
  }, [signUpData]);
  return <LoginPickContainer />;
};

export default LoginPick;
