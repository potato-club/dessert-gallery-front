import React from "react";
import styled from "styled-components";
import AroundMarketItem from "./AroundMarketItem";

const MarketContent = () => {
  return (
    <Container>
      <TopSpan>내 근처 가게 알아보기</TopSpan>
      <MarketList>
        <AroundMarketItem />
        <AroundMarketItem />
        <AroundMarketItem />
        <AroundMarketItem />
        <AroundMarketItem />
        <AroundMarketItem />
      </MarketList>
    </Container>
  );
};

export default MarketContent;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const TopSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
const MarketList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0px;
  gap: 24px;
`;
