import React from "react";
import styled from "styled-components";

const MapPage = () => {
  return (
    <Container>
      <div>header</div>
      <MapLayout>
        <div>sideNav</div>
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
