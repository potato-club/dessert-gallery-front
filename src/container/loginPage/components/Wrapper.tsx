import React, { ReactNode } from "react";
import styled from "styled-components";

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <WrapperComponent>
      <ContentsWrapper>{children}</ContentsWrapper>
    </WrapperComponent>
  );
}

export default Wrapper;

const WrapperComponent = styled.div`
  @media screen and (min-width: 1920px) {
    height: 936px;
    min-width: 1920px;
  }
  @media screen and (max-width: 1919px) {
    height: 624px;
    min-width: 1280px;
  }
  display: flex;
  align-items: center;
  background-color: #fcf0e1;
`;

const ContentsWrapper = styled.div`
  @media screen and (min-width: 1920px) {
    height: 710px;
    padding: 63px 0 0 0;
  }
  @media screen and (max-width: 1919px) {
    height: 472px;
    padding: 42px 0 0 0;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fffdf9;
`;
