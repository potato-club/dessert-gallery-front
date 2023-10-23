import React, { useEffect } from "react";
import LoginMainContainer from "../../src/container/loginPage/loginMain/LoginMainContainer";
import {
  signUpDataType,
  useSignupDataState,
} from "../../src/recoil/login/signUpStateAtom";

const LoginMain = () => {
  const [signupData, setSignupData] = useSignupDataState();

  const defaultValue: signUpDataType = {
    email: "",
    userRole: "USER",
    loginType: "NORMAL",
  };

  useEffect(() => {
    setSignupData(defaultValue);
  }, []);
  return <LoginMainContainer />;
};

export default LoginMain;
