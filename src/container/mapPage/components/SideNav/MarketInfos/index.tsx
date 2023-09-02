import React from "react";
import styled from "styled-components";
import Header from "./Header";
import MarketContent from "./MarketContent";

const MarketDetailInfo = () => {
  return (
    <Container>
      <Header />
      <MarketContent />
    </Container>
  );
};

export default MarketDetailInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 340px;
  height: 100vh;
  position: sticky;
  left: 0;
  background-color: #fcf0e1;
  @media (min-width: 1280px) {
    width: calc(340px + (438 - 340) * ((100vw - 1280px) / (1920 - 1280)));
  }
  @media (min-width: 1920px) {
    width: 438px;
  }
`;
