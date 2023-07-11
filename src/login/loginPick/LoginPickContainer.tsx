import React from "react";
import Wrapper from "../components/Wrapper";
import styled from "styled-components";
import PickContents from "./PickContents";
import Title from "../components/Title";

function LoginPickContainer() {
  return (
    <Wrapper>
      <PickWrapper>
        <PickContnentsWrapper>
          <PickContents role={"owner"}></PickContents>
          <Title>Pick!</Title>
          <PickContents role={"user"}></PickContents>
        </PickContnentsWrapper>
      </PickWrapper>
    </Wrapper>
  );
}

export default LoginPickContainer;

const PickWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const PickContnentsWrapper = styled.div`
  display: flex;
  width: 1140px;
  height: 555px;
  justify-content: space-between;
`;
