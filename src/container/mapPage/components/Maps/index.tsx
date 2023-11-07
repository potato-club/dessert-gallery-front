import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LocationModal from "./LocationModal";
import type { selectedLocationCoordData } from "../../../../types/componentsData";

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
  const [renderedMap, setRenderedMap] = useState<any>(null);

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
    renderedMap.setCenter(new (window as any).kakao.maps.LatLng(lat, lng))
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
    
          if(renderedMap === null){
            // 지도를 생성합니다
            let map = new (window as any).kakao.maps.Map(mapContainer.current, mapOption);
            setRenderedMap(map)
            marker.setMap(map) ;
          }
        }
      });
    };

    
  },[])

  return (
    <Container sidebar={sidebar} ref={mapContainer} >
      <LocationSelectorBtn onClick={onClickMoveMap}/>
      {moveMap&& <LocationModal selectedLocation={centerCoord.location} onChangeLocation={onChangeLocation} onClickMoveMap={onClickMoveMap}/>}
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

