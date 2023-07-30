import React from "react";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import styled from "styled-components";
import JoinContents from "./JoinContents";

function LoginPickContainer() {
  return (
    <Wrapper>
      <JoinkWrapper>
        <JoinContnentsWrapper>
          <Title>Join</Title>
          <JoinContents></JoinContents>
        </JoinContnentsWrapper>
      </JoinkWrapper>
    </Wrapper>
  );
}

export default LoginPickContainer;

const JoinkWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const JoinContnentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1920px) {
    width: 500px;
    height: 545px;
  }
  @media screen and (max-width: 1919px) {
    width: 333px;
    height: 381px;
  }
`;
