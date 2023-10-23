import React, { useEffect } from "react";
import LoginPickContainer from "../../src/container/loginPage/loginPick/LoginPickContainer";
import { useRouter } from "next/router";


const LoginPick = () => {
  const router = useRouter();

  useEffect(() => {}, []);
  return <LoginPickContainer />;
};

export default LoginPick;
