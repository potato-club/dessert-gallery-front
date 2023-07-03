import React from "react";
import styled from "styled-components";
import MarketContent from "./MarketContent";
import SideHeader from "./SideHeader";

const SideNav = () => {
  return (
    <Container>
      <SideHeader />
      <MarketContent />
    </Container>
  );
};

export default SideNav;
const Container = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 23px;
  background-color: #fcf0e1;
  height: 933px;
  padding: 31px 43px 0px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 11px;
  }
  ::-webkit-scrollbar-track {
    background-color: #e1d0bc;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #bea88d;
    height: 100px;
  }
  ::-webkit-scrollbar-thumb:hover {
  }
`;
