import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MarketDetailInfo from "./components/SideNav/MarketInfos";
import SideNav from "./components/SideNav/SideNav";
import Maps from "./components/Maps";
import type { selectedLocationCoordData } from "../../types/componentsData";
import { useGetMapStoreList } from "../../hooks/useGetMapStoreList";
import { useRouter } from "next/router";
import { getMapStoreList } from "../../utils/getMapStoreList";

interface searchData {
  sort: string ,
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


const MapPage = () => {
  const {query, isReady} = useRouter();
  const searchQuery = `search`;
  const selectedStoreQuery =`selected`;
  const sortQuery =`sort`;
  const [center, setCenter] = useState<selectedLocationCoordData>(
    {
      location: "서울 양천구", 
      lat: "37.524987",
      lng: "126.856181",
  });
  const [searchData, setSearchData] = useState<searchData>({
      sort: "follow",
      searchKeyword: "",
      page: 1,
  })
  const [selectedStoreId, setSelectedStoreId] = useState<number>(-1);
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  // const {data: storeListData} = searchKeyword? useGetSearchMapStoreList({
  //   sort: search.sort,
  //   searchKeyword: search.searchKeyword,
  //   page: search.page,
  // }): useGetMapStoreList({
  //   lat: center.lat, 
  //   lng: center.lng,
  // }) ;


  const [storeListData, setStoreListData] = useState<any[]>([]);
  // const {data: storeListData} = searchKeyword? useGetSearchMapStoreList({
  //   sort: search.sort,
  //   searchKeyword: search.searchKeyword,
  //   page: search.page,
  // }): getNearbyCoordMarkerList(center.lat,center.lng) ;

  const [searchHere, setSearchHere] = useState<boolean>(false);
  // const [loading, setLoading] = useState<boolean>(false);
  const centerCoord = useRef<string[]>(["37.524987", "126.856181"])


  useEffect(()=>{
    const fetchData = async () => {
      try {
        const data = await getMapStoreList({
          initData: storeListData,
          lat: center.lat,
          lng: center.lng,
          sort: searchData.sort,
          searchKeyword: searchData.searchKeyword,
          page: searchData.page,
          save: setStoreListData
        });
  
        console.log("업데이트,!!!!!", data)
        if(data !== undefined) setStoreListData(data);
  
        console.log("search", data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    if(!isReady) return;
    
    const selected = query[selectedStoreQuery]=== undefined ? -1: query[selectedStoreQuery];
    const search = query[searchQuery] === undefined ? '': query[searchQuery];
    const sort = query[sortQuery] === "score" ? "score": "follow" ;
    const lat = query['lat'] === undefined ? "37.524987": query['lat'] ;
    const lng = query['lng'] === undefined ? "126.856181": query['lng'] ;

    // console.log("뭐냐,", center.lat, center.lng)
    console.log("뭐냐2", search, searchKeyword)
    // confirm('dddddddddd')
    
    setSelectedStoreId(Number(selected));
    setSearchData(prev => ({
      ...prev,
      sort: sort === undefined ? "": sort,
      searchKeyword: search=== undefined ? "": search as string
    }))
    setCenter({
      location: "서울 양천구", 
      lat: lat[0],
      lng: lng[0]
    })
    centerCoord.current = [lat[0], lng[0]]


    fetchData();
    console.log("힘듦", storeListData)
  },[isReady, selectedStoreId, center.lat, center.lng, searchData.searchKeyword]);


  return (
    <Container>
      <SideNav markerData={storeListData} searchKeyword={searchKeyword} setCenter={setCenter} selectedStoreId={selectedStoreId} center={center} searchData={searchData} setSearchData={setSearchData} isSearch={searchKeyword!==undefined && searchKeyword!==''}/>
      {selectedStoreId!==-1&&storeListData&&<MarketDetailInfo storeId={selectedStoreId}/>}
      <Maps storeListData={storeListData} centerCoord={center} centerCoordRef={centerCoord} searchData={searchData} setCenter={setCenter} sidebar={selectedStoreId} setSearchHere={setSearchHere} setSelectedStoreId={setSelectedStoreId}/>
    </Container>
  );
};

export default MapPage;

const Container = styled.div`
  display: flex;
`;
