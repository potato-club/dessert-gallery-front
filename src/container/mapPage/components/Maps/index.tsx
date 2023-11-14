import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LocationModal from "./LocationModal";
import type { selectedLocationCoordData } from "../../../../types/componentsData";
import ToastMessage from "../../../../components/ToastMessage";

interface coord {
  lat: string
  lng: string
}

interface props {
  centerCoord: selectedLocationCoordData
  setCenter: React.Dispatch<React.SetStateAction<selectedLocationCoordData>>
  sidebar: boolean
}

interface style {
  sidebar: boolean
}

const Maps = ({centerCoord, sidebar, setCenter}: props) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [moveMap, setMoveMap] = useState<boolean>(false);
  const [mapUpdate, setMapUpdate] = useState<boolean>(false)
  const renderedMap = useRef<any>(null);

  const onClickMoveMap = ()=> {
    setMoveMap(prev=> !prev)
  }

  const onChangeLocation = (str:string,lat:string, lng:string) => {
    console.log("중심 좌표 변경!", str, lat, lng)
    setCenter({
      location: str,
      lat: lat,
      lng:lng
    })
    setMoveMap(false)
    setMapUpdate(true);
    setTimeout(()=>{setMapUpdate(false)}, 3000)
    renderedMap.current.setCenter(new (window as any).kakao.maps.LatLng(lat, lng))
  }

  useEffect(()=>{

    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAPS_API_KEY}&autoload=false`;
    document.head.appendChild(script);

    // 스크립트 로드가 완료되면 메인 컴포넌트 렌더링
    script.onload = () => {
      (window as any).kakao.maps.load(function() {

        if (mapContainer && mapContainer.current) {
          let markerPosition  = new (window as any).kakao.maps.LatLng(centerCoord.lat,centerCoord.lng);
          var marker = new (window as any).kakao.maps.Marker({
            position: markerPosition
        });

          let mapOption = {
              center: new (window as any).kakao.maps.LatLng(centerCoord.lat,centerCoord.lng), // 지도의 중심좌표
              level: 5, // 지도의 확대 레벨
          };

          if(renderedMap.current === null){
            // 지도를 생성합니다
            console.log("지도 생성")
            let map = new (window as any).kakao.maps.Map(mapContainer.current, mapOption);
            renderedMap.current = map
            marker.setMap(map) ;

            // 드래그를 통한 좌표 이동
            (window as any).kakao.maps.event.addListener(map, 'tilesloaded', function() {
              console.log("centerCoord.str", centerCoord.location)  
                setCenter(prev => ({
                  location:  prev.location,
                  lat: map.getCenter().getLat(),
                  lng: map.getCenter().getLng()
                }))
                setMapUpdate(true);
                setTimeout(()=>{setMapUpdate(false)}, 3000)
            });
            // (window as any).kakao.maps.event.addListener(map, 'center_changed', function() {
            //     alert('center changed!');
            // });
          }
        }
      });
    };


  },[centerCoord.location])

  return (
    <Container sidebar={sidebar} ref={mapContainer} >
      <LocationSelectorBtn onClick={onClickMoveMap}/>
      {moveMap&& <LocationModal selectedLocation={centerCoord.location} onChangeLocation={onChangeLocation} onClickMoveMap={onClickMoveMap}/>}
      {mapUpdate&& <ToastMessage messageString="이 지역에서 다시 검색하기" timer={3000}  clickEvent={true} eventFunc={()=>alert("마커 새로고침")} key="mapUpdateToast"/>}
    </Container>
  );
};

export default Maps;

const Container = styled.div<style>`
  position: absolute;
  right: 0;
  width: 100%;
  width: calc(100% - 439px);
  height: 100%;
  ${({sidebar}) => {
        if(sidebar === true){
            return `width: calc(100% - 439px - 431px);`
        }
    }};
`;

const LocationSelectorBtn = styled.div`
  width: 35px;
  height: 35px;
  background-color: #fcf0e1;
  border: 2px solid #FF6F00;
  border-radius: 4px;
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 32;
  cursor: pointer;
`

