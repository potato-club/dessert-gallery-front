import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LocationModal from "./LocationModal";
import type { selectedLocationCoordData } from "../../../../types/componentsData";
import ToastMessage from "../../../../components/ToastMessage";

interface coord {
  lat: string
  lng: string
}

interface makerDataProps {
  latitude: number
  longitude: number
  score: number
  storeAddress: string
  storeName:string
}
interface props {
  centerCoord: selectedLocationCoordData
  setCenter: React.Dispatch<React.SetStateAction<selectedLocationCoordData>>
  sidebar: boolean
  markerData: makerDataProps[]
  setSearchHere: React.Dispatch<React.SetStateAction<boolean>>
}

interface style {
  sidebar: boolean
}

const Maps = ({markerData, centerCoord, sidebar, setCenter,  setSearchHere}: props) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [moveMap, setMoveMap] = useState<boolean>(false);
  const [mapUpdate, setMapUpdate] = useState<boolean>(false)
  const renderedMap = useRef<any>(null);
  const renderedMarker = useRef<any>([]);
  const renderedOverlay  = useRef<any>([]);

  const onClickMoveMap = ()=> {
    setMoveMap(prev=> !prev)
  }

  const onClickToastMessage = () => {
    console.log('컴포넌트 클릭 - 마커 재검색')
    setSearchHere(prev => !prev)
    setMapUpdate(false)
  }

  const onChangeLocation = (str:string,lat:string, lng:string) => {
    setCenter({
      location: str,
      lat: lat,
      lng:lng
    })
    setMoveMap(false)
    setMapUpdate(true);
    setTimeout(()=>{setMapUpdate(false)}, 5000)
    renderedMap.current.setCenter(new (window as any).kakao.maps.LatLng(lat, lng))
  }

  useEffect(()=>{

    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAPS_API_KEY}&autoload=false`;
    document.head.appendChild(script);


    const setMarker = () => {
      // renderedMarker.current가 초기화되지 않았다면 빈 배열로 초기화
      if (!renderedMarker.current) {
        renderedMarker.current = [];
      }

      if (renderedMarker.current.length > 0) {
        renderedMarker.current.map((marker: { setMap: (arg0: null) => any; }) => marker.setMap(null));
      }
      renderedMarker.current = markerData.map((marker: { latitude: number; longitude: number; storeName:string; }) => new (window as any).kakao.maps.Marker({
        position: new (window as any).kakao.maps.LatLng(marker.latitude, marker.longitude),
      }));

      renderedMarker.current.forEach((e: { setMap: (arg0: any) => any; })=> e.setMap(renderedMap.current))

      ////////
          //marker overlay 생성
      renderedOverlay.current = markerData.map((marker: { latitude: number; longitude: number; storeName:string; score:number; storeAddress: string}) =>{ 

        let content = `
        <style>
          .customoverlay {position:relative;bottom:85px;border-radius:6px;border: 1px solid #ccc;border-bottom:2px solid #ddd;float:left;}
          .customoverlay:nth-of-type(n) {border:0; box-shadow:0px 1px 2px #888;}
          .customoverlay a {display:block;text-decoration:none;color:#000;text-align:center;border-radius:6px;font-size:14px;font-weight:bold;overflow:hidden;background: #FF8D01;background: #FF8D01 url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;}
          .customoverlay .info {display:block;text-align:center;background:#fff;margin-right:35px;padding:8px 15px;font-size:14px;font-weight:bold;}
          .customoverlay .info .score {display:flex; margin-top:4px; align-items: center}
          .customoverlay .info .score .value {margin-left: 4px; margin-top:2px}
          .customoverlay:after {content:'';position:absolute;margin-left:-12px;left:50%;bottom:-12px;width:22px;height:12px;}
        </style>
        <div class="customoverlay"> 
            <a href=""> 
                <span class="info" >
                  <div class="overlayTitle">${marker.storeName}</div>
                  <div class="score">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ff8d01" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <div class="value">${marker.score}</div>
                  </div>
                </span>
            </a> 
        </div>`

        let overlay = new (window as any).kakao.maps.CustomOverlay({
          content: content,
          map: renderedMap.current,
          position: new (window as any).kakao.maps.LatLng(marker.latitude, marker.longitude),  
        });

        return overlay;

      })


      //마커 클릭시 오버레이 표시
      renderedMarker.current.forEach((marker: any)=> {
        renderedOverlay.current.forEach((overlay: { setMap: (arg0: any) => void; })=> {
          (window as any).kakao.maps.event.addListener(marker, 'click', function() {
            overlay.setMap(renderedMap.current);
          })
        })
      })
      ///////
    }

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
            marker.setMap(map) ; // 지우면 에러
            marker.setMap(null) ;

            // 드래그를 통한 좌표 이동
            (window as any).kakao.maps.event.addListener(map, 'tilesloaded', function() {
              console.log("centerCoord.str", centerCoord.location)  
                setCenter((prev: { location: any; }) => ({
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

          if(markerData ) {
            setMarker();
          }
          
        }
      });
    };


  },[centerCoord.location, markerData])

  return (
    <Container sidebar={sidebar} ref={mapContainer} >
      <LocationSelectorBtn onClick={onClickMoveMap}/>
      {moveMap&& <LocationModal selectedLocation={centerCoord.location} onChangeLocation={onChangeLocation} onClickMoveMap={onClickMoveMap}/>}
      {mapUpdate&& <ToastMessage wrapType="none" messageString="이 지역에서 다시 검색하기" timer={3000}  clickEvent={true} eventFunc={onClickToastMessage} key="mapUpdateToast"/>}
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

