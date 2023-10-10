import React, { useEffect } from "react";
import LoginPickContainer from "../../src/container/loginPage/loginPick/LoginPickContainer";
import { useRouter } from "next/router";
import { signupDataStateAtom } from "../../src/recoil/login/signUpStateAtom";
import { useRecoilState } from "recoil";
import { useKakaoSignupDataState } from "../../src/recoil/login/kakaoSignUpStateAtom";

const LoginPick = () => {
  const router = useRouter();
  const [kakaoSignupData, setKakaoSignupData] = useKakaoSignupDataState();
  const [signUpData, setSignUpData] = useRecoilState(signupDataStateAtom);

  useEffect(() => {
    console.log("signupData", signUpData);
    console.log("kakaoSignupData", kakaoSignupData);
    if (!kakaoSignupData.email && !signUpData.email) {
      router.push("/login/join");
    }
  }, []);
  return <LoginPickContainer />;
};

export default LoginPick;
