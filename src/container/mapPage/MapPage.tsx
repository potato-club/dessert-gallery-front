import React from "react";
import styled from "styled-components";
import SideNav from "./components/SideNav/SideNav";

const MapPage = () => {
  return (
    <Container>
      <MapLayout>
        <SideNav />
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
