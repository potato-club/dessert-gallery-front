import React, { ReactNode } from "react";
import styled from "styled-components";
import loginBackground from "../../../public/svg/loginPage/loginBackground.svg";
import Title from "./Title";

function LoginContents() {
  return (
    <ContentsWrapper>
      <Title>LOGIN</Title>
    </ContentsWrapper>
  );
}

export default LoginContents;

const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;

`;
