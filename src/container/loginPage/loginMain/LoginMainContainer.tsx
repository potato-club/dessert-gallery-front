import React, { ReactNode } from "react";
import styled from "styled-components";
import LoginBackground from "../../../public/svg/loginPage/loginBackground.svg";
import Title from "../components/Title";
import Input from "../../../components/Input";
import Navigaiton from "./Navigtion";
import Horizon from "./Horizon";
import Tag from "../../../components/Tag";
import SocialLogin from "./SocialLogin";
import Wrapper from "../components/Wrapper";

function LoginMainContainer() {
  return (
    <Wrapper>
      <MainWrapper>
        <MainContnentsWrapper>
          <Title>LOGIN</Title>
          <InputDiv>
            <Input placeholder="이메일 입력" />
            <Input placeholder="비밀번호 입력" />
          </InputDiv>
          <Navigaiton />
          <TagButtonWrapper>
            <Tag
              title="로그인"
              width="100%"
              height="100%"
              fontSize="100%"
              inversion={true}
              clickAble={true}
              onClickHandler={() => {}}
            />
          </TagButtonWrapper>
          <Horizon />
          <SocialLogin />
        </MainContnentsWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export default LoginMainContainer;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const MainContnentsWrapper = styled.div`
  @media screen and (min-width: 1920px) {
    width: 500px;
    height: 571px;
  }
  @media screen and (max-width: 1919px) {
    width: 333px;
    height: 379px;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputDiv = styled.div`
  @media screen and (min-width: 1920px) {
    height: 145px;
  }
  @media screen and (max-width: 1919px) {
    height: 97px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TagButtonWrapper = styled.div`
  @media screen and (min-width: 1920px) {
    width: 500px;
    height: 60px;
  }
  @media screen and (max-width: 1919px) {
    width: 333px;
    height: 40px;
    font-size: 11px;
  }
`;