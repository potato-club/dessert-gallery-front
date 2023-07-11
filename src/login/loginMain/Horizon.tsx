import React, { ReactNode } from "react";
import styled from "styled-components";

function Horizon() {
  return (
    <HorizonWrapper>
      <HorizonP>또는</HorizonP>
    </HorizonWrapper>
  );
}

export default Horizon;

const HorizonWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 25px;
  margin: 30px 0 23px 0;
`;

const HorizonP = styled.p`
  display: flex;
  height: 25px;
  flex-basis: 100%;
  align-items: center;
  color: #ff8d00;
  font-size: 14px;
  ::before,
  ::after {
    content: "";
    flex-grow: 1;
    background: #ff8d00;
    height: 1px;
  }
  ::before {
    margin-right: 21.6px;
  }
  ::after {
    margin-left: 21.6px;
  }
`;
