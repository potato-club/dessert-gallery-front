import React, { ReactNode } from "react";
import styled from "styled-components";
import GoogleLogo from "../../../public/svg/loginPage/googleLogo.svg";
import KakaoLogo from "../../../public/svg/loginPage/kakaoLogo.svg";
import GoogleLogoBig from "../../../public/svg/loginPage/googleLogoBig.svg";
import KakaoLogoBig from "../../../public/svg/loginPage/kakaoLogoBig.svg";

function SocialLogin() {
  return (
    <SocialLoginWrapper>
      <SocialLoginButton buttonRole="Google">
        <SocialLogoDiv>
          <ResponsiveLogoDiv wrapperWidth={1920}>
            <GoogleLogoBig />
          </ResponsiveLogoDiv>
          <ResponsiveLogoDiv wrapperWidth={1280}>
            <GoogleLogo />
          </ResponsiveLogoDiv>
        </SocialLogoDiv>
        Google로 로그인
      </SocialLoginButton>
      <SocialLoginButton buttonRole="Kakao">
        <SocialLogoDiv>
          <ResponsiveLogoDiv wrapperWidth={1920}>
            <KakaoLogoBig />
          </ResponsiveLogoDiv>
          <ResponsiveLogoDiv wrapperWidth={1280}>
            <KakaoLogo />
          </ResponsiveLogoDiv>
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
    width: 32px;
    height: 32px;
  }
  @media screen and (max-width: 1919px) {
    margin-right: 7px;
    width: 20px;
    height: 20px;
  }
`;

const ResponsiveLogoDiv = styled.div<{ wrapperWidth: 1280 | 1920 }>`
  @media screen and (min-width: 1920px) {
    display: ${(props) => (props.wrapperWidth === 1920 ? "" : "none")};
  }
  @media screen and (max-width: 1919px) {
    display: ${(props) => (props.wrapperWidth === 1280 ? "" : "none")};
  }
`;
