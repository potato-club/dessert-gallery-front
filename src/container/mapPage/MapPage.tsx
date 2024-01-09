import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MarketDetailInfo from "./components/SideNav/MarketInfos";
import SideNav from "./components/SideNav/SideNav";
import Maps from "./components/Maps";
import type { selectedLocationCoordData } from "../../types/componentsData";
import { useGetMapStoreList } from "../../hooks/useGetMapStoreList";
import { useRouter } from "next/router";

interface searchData {
  sort: "follow" | "score" ,
  searchKeyword: string,
  page: number,
}

interface resDataType {
  storeId: number,
  storeName: string,
  storeAddress: string,
  content: string,
  score: number,
  latitude: number,
  longitude: number,
  fileName: string,
  fileUrl: string
}


const MapPage = () => {
  const {query, isReady} = useRouter();
  const searchQuery = `search`;
  const selectedStoreQuery =`selected`;
  const [center, setCenter] = useState<selectedLocationCoordData>(
    {
      location: "서울 양천구", 
      lat: "37.524987",
      lng: "126.856181",
  });
  const [search, setSearch] = useState<searchData>({
      sort: "follow",
      searchKeyword: "",
      page: 1,
  })
  const [selectedStoreId, setSelectedStoreId] = useState<number>(-1);
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const {data: storeListData} = useGetMapStoreList({
    lat: center.lat, 
    lng: center.lng,
    sort: "follow",
    searchKeyword: "",
    page: 1,
  });
  const [searchHere, setSearchHere] = useState<boolean>(false);
  const centerCoord = useRef<string[]>(["37.524987", "126.856181"])



  useEffect(()=>{
    if(!isReady) return; 
    const selected = query[selectedStoreQuery]=== undefined ? -1: query[selectedStoreQuery];
    const search = query[searchQuery] === undefined ? '': query[searchQuery][0] ;
    const lat = query['lat'] === undefined ? "37.524987": query['lat'] ;
    const lng = query['lng'] === undefined ? "126.856181": query['lng'] ;

    // console.log("뭐냐,", center.lat, center.lng)
    console.log("뭐냐2", search, searchKeyword)
    // confirm('dddddddddd')
    
    setSelectedStoreId(Number(selected));
    setSearchKeyword(search==="?" ? '': search);
    setCenter({
      location: "서울 양천구", 
      lat: lat[0],
      lng: lng[0]
    })
  },[isReady, selectedStoreId, center.lat, center.lng])


  return (
    <Container>
      <SideNav markerData={storeListData} searchKeyword={searchKeyword} setCenter={setCenter} isSearch={searchKeyword!==undefined && searchKeyword!==''}/>
      {selectedStoreId!==-1&&storeListData&&<MarketDetailInfo storeId={selectedStoreId}/>}
      <Maps storeListData={storeListData} centerCoord={center} centerCoordRef={centerCoord} searchKeyword={searchKeyword} setCenter={setCenter} sidebar={selectedStoreId} setSearchHere={setSearchHere} setSelectedStoreId={setSelectedStoreId}/>
    </Container>
  );
};

export default MapPage;

const Container = styled.div`
  display: flex;
`;
