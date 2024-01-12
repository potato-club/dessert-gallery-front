import React from "react";
import styled from "styled-components";
import AroundMarketItem from "./AroundMarketItem";
import { selectedLocationCoordData } from "../../../../types/componentsData";

interface makerDataProps {
  latitude: number
  longitude: number
  score: number
  storeAddress: string
  storeName:string
  storeId:number
  content: string
  fileName: string
  fileUrl: string
}
interface props {
  markerData: makerDataProps[]
  isSearch: boolean
  searchKeyword:string
  setCenter: React.Dispatch<React.SetStateAction<selectedLocationCoordData>>
}

const Market = ({markerData, isSearch, searchKeyword, setCenter}: props) => {
  return (
    <Container>
      {isSearch && <TopSpan>내 근처 검색한 가게 리스트를 볼게요!</TopSpan>}
      {!isSearch &&<TopSpan>내 근처에 무슨 가게가 있을까요?</TopSpan>}
      <MarketList>
        {
          markerData && markerData.map((store: makerDataProps, idx) => (
            <AroundMarketItem key={idx} {...store} searchKeyword={searchKeyword} setCenter={setCenter}/>
          ))
        }
      </MarketList>
    </Container>
  );
};

export default Market;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 20px 29px 32px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background-color: #fffdf9;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ff8d00;
    height: 165px;
  }
  ::-webkit-scrollbar-thumb:hover {
  }
`;
const TopSpan = styled.span`
  font-size: 12px;
  font-weight: 700;
`;
const MarketList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0px;
  gap: 24px;
`;
