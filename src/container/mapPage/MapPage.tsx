import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import MarketDetailInfo from "./components/SideNav/MarketInfos";
import SideNav from "./components/SideNav/SideNav";
import Maps from "./components/Maps";
import { useGetMapStoreList } from "../../hooks/useGetMapStoreList";
import { useRouter } from "next/router";
import { getMapStoreList } from "../../utils/getMapStoreList";
import { markerOverlayContents } from "../../libs/mrarkerOverlay";
import { mapCenterState } from "../../recoil/map/mapCenterStateAtom";
import { searchState } from "../../recoil/map/searchStateAtom";
import { selectedStoreState } from "../../recoil/map/selectedStoreStateAtom";

const MapPage = () => {
  const {query, isReady} = useRouter();
  /**kakaomap을 통해 생성될 맵의 HTMLDivElement 정보를 제공하는 ref*/ 
  const mapContainer = useRef<HTMLDivElement>(null);
  /**kakaomap을 통해 생성될 맵 객체를 담는 ref*/ 
  const renderedMap = useRef<any>(null);
  const renderedMarker = useRef<any>([]);
  const renderedOverlay  = useRef<any>([]);

  /** 지도 위치 변경 확인 state */
  const [moveMap, setMoveMap] = useState<boolean>(false);
  /** 지도 위치 변경에 따른 검색 api 재실행 여부 확인 state */
  const [mapUpdate, setMapUpdate] = useState<boolean>(false)
  
  
  /** 정보 */ 
  const [selectedStoreId, setSelectedStoreId] = useRecoilState(selectedStoreState);
  const [center, setCenter] = useRecoilState(mapCenterState);
  const [searchData, setSearchData] = useRecoilState(searchState);
  

  /** 검색, 주변 등 받아온 가게 리스트 */
  const [storeListData, setStoreListData] = useState<any[]>([]);
  const storeListDataPrev = useRef<any[]>([]);


  /** 가게 데이터를 받아오는 함수 */
  const fetchData = async (lat:string, lng: string, sort:string, searchKeyword:string) => {
    try {
      const data = await getMapStoreList({
        initData: storeListDataPrev.current,
        lat: lat,
        lng: lng,
        sort: sort,
        searchKeyword: searchKeyword,
        page: searchData.page,
        save: setStoreListData
      });

      if(data !== undefined) {
        storeListDataPrev.current=data;
        setStoreListData(storeListDataPrev.current);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  /** 중심 좌표를 변경하는 함수 */
  const onChangeLocation = (lat:string, lng:string) => {
    setCenter({
      lat: lat,
      lng:lng
    })
    setMoveMap(false)
    setMapUpdate(true);
    setTimeout(()=>{setMapUpdate(false)}, 5000)
    renderedMap.current.setCenter(new (window as any).kakao.maps.LatLng(lat, lng))
  }

  // 도메인 해석 및 링크 업데이트 / page 업데이트 
  useEffect(()=>{
    if(!isReady) return;
    
    if(searchData.page !== 1){
      fetchData(center.lat, center.lng,searchData.sort, searchData.searchKeyword);
    }
    else{
      const selected = query['selected']=== undefined ? -1: query['selected'];
      const search = query[`search`] === undefined ? '': query[`search`];
      const sort = query[`sort`] === undefined ? '':query[`sort`] ;
      const lat = query['lat'] === undefined ? "37.524987": query['lat'] ;
      const lng = query['lng'] === undefined ? "126.856181": query['lng'] ;
      
      setSelectedStoreId(Number(selected));
      setSearchData(prev => ({
        ...prev,
        sort: typeof sort === "string" ? sort: sort.join(),
        searchKeyword: search=== undefined ? "": search as string
      }))

        setCenter({
        lat: typeof lat === 'string'? lat: lat.join(),
        lng: typeof lng === 'string'? lng: lng.join(),
      })


      fetchData(typeof lat === 'string'? lat: lat.join(), typeof lng === 'string'? lng: lng.join(), typeof sort === "string" ? sort: sort.join(), typeof search === 'string'? search: search.join());
    }
  },[isReady, searchData.page]);

  /** 지도 정보 업데이트 */
  useEffect(()=>{
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAPS_API_KEY}&autoload=false`;
    document.head.appendChild(script);


    /** 마커와 overlay 찍기 및 지도 영역 재설정 함수 */
    const setMarker = () => {
      // renderedMarker.current가 초기화되지 않았다면 빈 배열로 초기화
      if (!renderedMarker.current) {
        renderedMarker.current = [];
      }

      if (renderedMarker.current.length > 0) {
        renderedMarker.current.map((marker: { setMap: (arg0: null) => any; }) => marker.setMap(null));
      }

      /** 마커와 오버레이를 포함하는 지도영역을 만들기 위한 변수 */
      let bounds = new (window as any).kakao.maps.LatLngBounds();  

      /** storeListData가 가지고 있는 마커 찍기 */
      renderedMarker.current = storeListData.filter(e=> e.latitude !==0 && e.longitude !== 0).map((marker: { latitude: number; longitude: number; storeName:string; }) => {

        /** 마커를 포함하는 지도 영역 확장 */  
        bounds.extend(new (window as any).kakao.maps.LatLng(marker.latitude, marker.longitude));
          return (new (window as any).kakao.maps.Marker({
                  position: new (window as any).kakao.maps.LatLng(marker.latitude, marker.longitude),
                }))
      });

      renderedMarker.current.forEach((e: { setMap: (arg0: any) => any; })=> {
        e.setMap(renderedMap.current)
      })

      /** 마커와 오버레이를 포함하는 지도영역을 재설정 */
      renderedMap.current.setBounds(bounds, 120, 120, 120, 120);

      /** marker overlay 생성 */
      renderedOverlay.current = storeListData.map((marker: { storeId: number, latitude: number; longitude: number; storeName:string; score:number; storeAddress: string, content: string, fileUrl:string}, idx) =>{ 
        /** 선택된 가게에 대한 overlay일 경우 디자인 변경 및 overlay가 가장 상단에 오도록 설정 */
        if(marker.storeId === selectedStoreId){
          let content = markerOverlayContents(marker.storeId === selectedStoreId, marker.storeId, searchData.searchKeyword, marker.storeName, searchData.sort, marker.latitude.toString(), marker.longitude.toString(), marker.score, marker.storeAddress, marker.content, marker.fileUrl) //추가~~~~
          
          let overlay = new (window as any).kakao.maps.CustomOverlay({
            content: content,
            map: renderedMap.current,
            zIndex: 100,
            position: new (window as any).kakao.maps.LatLng(marker.latitude, marker.longitude),  
          });

          return overlay;
        }else{
          let content = markerOverlayContents(marker.storeId === selectedStoreId, marker.storeId, searchData.searchKeyword, marker.storeName, searchData.sort, marker.latitude.toString(), marker.longitude.toString(), marker.score, marker.storeAddress, marker.content, marker.fileUrl) //추가~~~~
          
          let overlay = new (window as any).kakao.maps.CustomOverlay({
            content: content,
            map: renderedMap.current,
            zIndex: 10,
            position: new (window as any).kakao.maps.LatLng(marker.latitude, marker.longitude),  
          });
          return overlay;
        }
      })
    }



    // 스크립트 로드가 완료되면 메인 컴포넌트 렌더링
    script.onload = () => {
      (window as any).kakao.maps.load(function() {

        if (mapContainer && mapContainer.current) {
          let markerPosition  = new (window as any).kakao.maps.LatLng(center.lat,center.lng);
          var marker = new (window as any).kakao.maps.Marker({
            position: markerPosition
        });

          let mapOption = {
                center: new (window as any).kakao.maps.LatLng(center.lat,center.lng), // 지도의 중심좌표
                level: 6, // 지도의 확대 레벨
            };

          if(renderedMap.current === null){
            // 지도를 생성합니다
            console.log("지도 생성")
            let map = new (window as any).kakao.maps.Map(mapContainer.current, mapOption);
            renderedMap.current = map
            marker.setMap(map) ; // 지우면 에러
            marker.setMap(null) ;

            // 드래그를 통한 좌표 이동
            (window as any).kakao.maps.event.addListener(map, 'tilesloaded', function() {
                setCenter({
                  lat: map.getCenter().getLat(),
                  lng: map.getCenter().getLng()
                })
                setMapUpdate(true);
                setTimeout(()=>{setMapUpdate(false)}, 3000)
            });
          }

          if(storeListData&&storeListData.length>0) {
            setMarker();
          }
          renderedMap.current.relayout()
        }
      });
    };

  },[storeListData.length])

  return (
    <Container>
      <SideNav setSelectedStoreId={setSelectedStoreId} markerData={storeListData} setCenter={setCenter} selectedStoreId={selectedStoreId} center={center}/>
      {selectedStoreId!==-1&&storeListData&&<MarketDetailInfo storeId={selectedStoreId}/>}
      <Maps renderedMap={renderedMap} mapContainer={mapContainer} centerCoord={center} moveMap={moveMap} setMoveMap={setMoveMap} mapUpdate={mapUpdate} onChangeLocation={onChangeLocation}/>
    </Container>
  );
};

export default MapPage;

const Container = styled.div`
  display: flex;
  height: calc(100% - 96px);
  width: 100vw;
  @media screen and (max-width: 1280px) {
    width: 1280px; 
  }
  @media screen and (max-width: 480px) {
    min-width: 500px; 
  }
`;


