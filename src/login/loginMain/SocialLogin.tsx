import React, { ReactNode } from "react";
import styled from "styled-components";
import GoogleLogo from "../../../public/svg/loginPage/googleLogo.svg";
import KakaoLogo from "../../../public/svg/loginPage/kakaoLogo.svg";

function SocialLogin() {
  return (
    <SocialLoginWrapper>
      <SocialLoginButton buttonRole="Google">
        <SocialLogoDiv>
          <GoogleLogo />
        </SocialLogoDiv>
        Google로 로그인
      </SocialLoginButton>
      <SocialLoginButton buttonRole="Kakao">
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 215px;
  height: 60px;
  background-color: ${(props) =>
    props.buttonRole === "Kakao" ? "#F9E000" : "white"};
  border-radius: 50px;
  border: none;
  font-size: 18px;
  box-shadow: 0 3px 6px;
`;

const SocialLogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  width: 32px;
  height: 32px;
`;
