import React, { useState } from "react";
import styled from "styled-components";
import MarketDetailInfo from "./components/SideNav/MarketInfos";
import SideNav from "./components/SideNav/SideNav";
import Maps from "./components/Maps";
import type { selectedLocationCoordData } from "../../types/componentsData";


const MapPage = () => {
  const [center, setCenter] = useState<selectedLocationCoordData>(
    {
      location: "경기", 
      lat: "37.5289145",
      lng: "127.1727772"
    })
  const [sidebar, setSidebar] = useState<boolean>(true)
  return (
    <Container>
      <SideNav />
      <MarketDetailInfo />
      <Maps centerCoord={center} setCenter={setCenter} sidebar={sidebar}/>
    </Container>
  );
};

export default MapPage;

const Container = styled.div`
  display: flex;
`;
