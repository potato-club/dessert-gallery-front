import React, { ReactNode } from "react";
import styled from "styled-components";
import LoginBackground from "../../../public/svg/loginPage/loginBackground.svg";
import Title from "./Title";
import Input from "../../components/Input";
import Navigaiton from "./Navigtion";
import Horizon from "./Horizon";
import Tag from "../../components/Tag";
import SocialLogin from "./SocialLogin";

function LoginContents() {
  return (
    <Wrapper>
      <ContnentsWrapper>
        <Title>LOGIN</Title>
        <InputDiv>
          <Input placeholder="이메일 입력" marginBottom={25} />
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
        ></Tag>
        <Horizon />
        <SocialLogin />
      </ContnentsWrapper>
    </Wrapper>
  );
}

export default LoginContents;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ContnentsWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 571px;
  align-items: center;
  flex-direction: column;
`;

const InputDiv = styled.div``;
