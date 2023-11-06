import React, { useState } from "react";
import styled from "styled-components";
import MarketDetailInfo from "./components/SideNav/MarketInfos";
import SideNav from "./components/SideNav/SideNav";
import Maps from "./components/Maps";

interface coord {
  lat: string
  lng: string
}

const MapPage = () => {
  const [center, setCenter] = useState<coord>({lat: "37.34701", lng: "126.9509"})
  const [sidebar, setSidebar] = useState<boolean>(true)
  return (
    <Container>
      <SideNav />
      <MarketDetailInfo />
      <Maps centerCoord={center} sidebar={sidebar}/>
    </Container>
  );
};

export default MapPage;

const Container = styled.div`
  display: flex;
`;
