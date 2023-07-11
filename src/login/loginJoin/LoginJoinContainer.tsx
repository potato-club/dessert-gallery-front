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
  width: 500px;
  height: 545px;
`;
