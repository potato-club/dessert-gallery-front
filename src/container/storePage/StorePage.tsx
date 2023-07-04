import React from "react";
import styled from "styled-components";
import Calender from "./components/Calender";
import StoreProfile from "./components/StoreProfile";
import Announce from "./components/Announce";
import StoreContent from "./components/StoreContent";
const StorePage = () => {
  return (
    <Container>
      <StoreInfo>
        <StoreProfile />
        <Calender />
      </StoreInfo>
      <Announce />
      <StoreContent />
    </Container>
  );
};

export default StorePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StoreInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 121px;
  background-color: #fcf0e1;
  width: 100%;
  height: 697px;
`;
