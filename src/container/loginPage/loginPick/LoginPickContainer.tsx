import React from "react";
import Wrapper from "../components/Wrapper";
import styled from "styled-components";
import PickContents from "./PickContents";
import Title from "../components/Title";
import Modal from "../components/Modal";

function LoginPickContainer() {
  return (
    <Wrapper>
      <PickWrapper>
        <Modal />
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
  @media screen and (min-width: 1920px) {
    width: 1140px;
    height: 555px;
  }
  @media screen and (max-width: 1919px) {
    width: 759px;
    height: 379px;
  }
  display: flex;
  justify-content: space-between;
`;
