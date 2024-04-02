import React, { ReactNode, useEffect } from "react";
import styled from "styled-components";
import GoogleLogo from "../../../../public/svg/loginPage/googleLogo.svg";
import KakaoLogo from "../../../../public/svg/loginPage/kakaoLogo.svg";
import { useSignupDataState } from "../../../recoil/login/signUpStateAtom";

function SocialLogin() {
  const Rest_api_key = process.env.NEXT_PUBLIC_KAKAO_LOGIN_API_KEY; //REST API KEY
  const redirect_uri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const [signupData, setSignupData] = useSignupDataState();
  const handleLogin = () => {
    // setSignupData({ ...signupData, loginType: "KAKAO" });
    window.location.href = kakaoURL;
  };
  return (
    <SocialLoginWrapper>
      <SocialLoginButton buttonRole="Google">
        <SocialLogoDiv>
          <GoogleLogo />
        </SocialLogoDiv>
        Google로 로그인
      </SocialLoginButton>
      <SocialLoginButton buttonRole="Kakao" onClick={handleLogin}>
        <SocialLogoDiv>
          <KakaoLogo />
        </SocialLogoDiv>
        Kakao로 로그인
      </SocialLoginButton>
    </SocialLoginWrapper>
  );
}

export default SocialLogin;

const SocialLoginWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SocialLoginButton = styled.button<{ buttonRole: "Google" | "Kakao" }>`
  @media screen and (min-width: 1920px) {
    width: 215px;
    height: 60px;
    font-size: 18px;
  }
  @media screen and (max-width: 1919px) {
    width: 142px;
    height: 40px;
    font-size: 10px;
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.buttonRole === "Kakao" ? "#F9E000" : "white"};
  border-radius: 50px;
  border: none;
  box-shadow: 0 3px 6px;
`;

const SocialLogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1920px) {
    margin-right: 10px;
    width: 33px;
    height: 33px;
  }
  @media screen and (max-width: 1919px) {
    margin-right: 7px;
    width: 20px;
    height: 20px;
  }
`;
