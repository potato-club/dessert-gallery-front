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
  @media screen and (min-width: 1920px) {
    height: 25px;
    margin: 30px 0 23px 0;
  }
  @media screen and (max-width: 1919px) {
    height: 13px;
    margin: 19px 0 21px 0;
  }
  display: flex;
  position: relative;
  width: 100%;
`;

const HorizonP = styled.p`
  @media screen and (min-width: 1920px) {
    height: 25px;
    font-size: 14px;
    ::before {
      margin-right: 21.6px;
    }
    ::after {
      margin-left: 21.6px;
    }
  }
  @media screen and (max-width: 1919px) {
    height: 13px;
    font-size: 9px;
    ::before {
      margin-right: 14.5px;
    }
    ::after {
      margin-left: 14.5px;
    }
  }
  display: flex;
  height: 25px;
  flex-basis: 100%;
  align-items: center;
  color: #ff8d00;
  ::before,
  ::after {
    content: "";
    flex-grow: 1;
    background: #ff8d00;
    height: 1px;
  }
`;
