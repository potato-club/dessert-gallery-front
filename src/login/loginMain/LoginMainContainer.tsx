import React, { ReactNode } from "react";
import styled from "styled-components";
import LoginBackground from "../../../public/svg/loginPage/loginBackground.svg";
import Title from "../components/Title";
import Input from "../../components/Input";
import Navigaiton from "./Navigtion";
import Horizon from "./Horizon";
import Tag from "../../components/Tag";
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
          <Tag
            title="로그인"
            width="500px"
            height="60px"
            inversion={true}
            clickAble={true}
            onClickHandler={() => {}}
          />
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
  display: flex;
  width: 500px;
  height: 571px;
  align-items: center;
  flex-direction: column;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 145px;
  justify-content: space-between;
`;
