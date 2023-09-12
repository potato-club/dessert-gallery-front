import React from "react";
import styled from "styled-components";
import MarketDetailInfo from "./components/SideNav/MarketInfos";
import SideNav from "./components/SideNav/SideNav";
import Maps from "./components/Maps";

const MapPage = () => {
  return (
    <Container>
      <SideNav />
      <MarketDetailInfo />
      <Maps />
    </Container>
  );
};

export default MapPage;

const Container = styled.div`
  display: flex;
`;
