import React, { ReactNode } from "react";
import styled from "styled-components";

function Navigaiton() {
  return (
    <NavigationWrapper>
      <NavigationA bold={false}>로그인이 안되시나요?</NavigationA>
      <NavigationA bold={true} color={"#FF8D00"}>
        회원가입
      </NavigationA>
    </NavigationWrapper>
  );
}

export default Navigaiton;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 25px;
  margin: 25px 0 27px 0;
`;

const NavigationA = styled.a<{ bold: boolean; color?: string }>`
  font-size: 14px;
  font-weight: ${(props) => (props.bold === true ? "bold" : "")};
  color: ${(props) => props.color};
`;
