import React from "react";
import styled from "styled-components";
import MarketDetailInfo from "./components/SideNav/MarketInfos";
import SideNav from "./components/SideNav/SideNav";

const MapPage = () => {
  return (
    <Container>
      <MapLayout>
        <SideNav />
        <MarketDetailInfo />
        <div>map</div>
      </MapLayout>
    </Container>
  );
};

export default MapPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const MapLayout = styled.div`
  display: flex;
`;
