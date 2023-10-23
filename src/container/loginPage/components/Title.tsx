import React, { ReactNode } from "react";
import styled from "styled-components";

function Title({ children }: { children: string }) {
  return <TitleH2>{children}</TitleH2>;
}

export default Title;

const TitleH2 = styled.h2`
  @media screen and (min-width: 1920px) {
    width: 264px;
    height: 126px;
    margin: 0 0 21px 0;
    font-size: 85px;
  }
  @media screen and (max-width: 1919px) {
    width: 171px;
    height: 81px;
    margin: 0 0 17px 0;
    font-size: 55px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #ff6f00;
  text-shadow: 0 3px 6px #ff8d00;
`;
