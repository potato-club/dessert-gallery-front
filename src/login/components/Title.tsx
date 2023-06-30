import React, { ReactNode } from "react";
import styled from "styled-components";

function Title({ children }: { children: string }) {
  return <TitleH2>{children}</TitleH2>;
}

export default Title;

const TitleH2 = styled.h2`
  font-size: 85px;
  font-weight: bold;
  color: #ff6f00;
  text-shadow: 0 3px 6px #ff8d00;
`;
