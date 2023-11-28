import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MarketDetailInfo from "./components/SideNav/MarketInfos";
import SideNav from "./components/SideNav/SideNav";
import Maps from "./components/Maps";
import type { selectedLocationCoordData } from "../../types/componentsData";
import { useGetNearbyCoordMarkerList } from "../../hooks/useGetMarker";


const MapPage = () => {
  const [center, setCenter] = useState<selectedLocationCoordData>(
    {
      location: "서울 양천구", 
      lat: "37.524987",
      lng: "126.856181"
    })
  const [sidebar, setSidebar] = useState<boolean>(true)
  const {data: markerData} = useGetNearbyCoordMarkerList({
    lat: center.lat, 
    lng: center.lng
  })


  useEffect(()=>{
    console.log("mapPage: ", markerData)
  },[center.lat, center.lng])


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
