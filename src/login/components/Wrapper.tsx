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
  display: flex;
  height: 936px;
  width: 1920px;
  align-items: center;
  background-color: #fcf0e1;
`;

const ContentsWrapper = styled.div`
  height: 710px;
  width: 100%;
  padding: 63px 0 0 0;
  background-color: #fffdf9;
`;
