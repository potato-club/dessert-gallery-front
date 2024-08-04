import React, { useEffect } from "react";
import LoginMainContainer from "../../src/container/loginPage/loginMain/LoginMainContainer";
import {
  signUpDataType,
  useSignupDataState,
} from "../../src/recoil/login/signUpStateAtom";
import { useVerifyPageState } from "../../src/recoil/login/veifyPageStateAtom";

const LoginMain = () => {
  const [signupData, setSignupData] = useSignupDataState();
  const [verifyPageState, setVerifyPageState] = useVerifyPageState();

  const defaultValue: signUpDataType = {
    email: "",
    userRole: "USER",
    loginType: "NORMAL",
  };

  useEffect(() => {
    setSignupData(defaultValue);
    setVerifyPageState(false);
  }, []);
  return <LoginMainContainer />;
};

export default LoginMain;
