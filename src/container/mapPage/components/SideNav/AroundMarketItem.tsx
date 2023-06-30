import React from "react";
import styled from "styled-components";

const AroundMarketItem = () => {
  return (
    <Container>
      <ItemDivs>
        <TextInfoDiv></TextInfoDiv>
      </ItemDivs>
    </Container>
  );
};

export default AroundMarketItem;

const Container = styled.li`
  width: 424px;
  height: 205px;
  background-color: white;
`;
const ItemDivs = styled.div``;
const TextInfoDiv = styled.div`
  width: 140px;
  height: 140px;
`;
