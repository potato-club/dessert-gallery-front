import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import LocationModal from "./LocationModal";
import type { selectedLocationCoordData } from "../../../../types/componentsData";
import ToastMessage from "../../../../components/ToastMessage";
import { selectedStoreState } from "../../../../recoil/map/selectedStoreStateAtom";

interface props  {
  centerCoord: selectedLocationCoordData
  mapContainer: React.RefObject<HTMLDivElement>
  moveMap: boolean
  setMoveMap: React.Dispatch<React.SetStateAction<boolean>>
  mapUpdate: boolean
  onChangeLocation: (lat: string, lng: string) => void
  renderedMap: any
}

interface style {
  sidebar: boolean
}

const Maps = ({renderedMap, mapContainer, moveMap, setMoveMap, mapUpdate, onChangeLocation}: props) => {
  const sidebar = useRecoilValue(selectedStoreState);

  useEffect(()=>{
    if(renderedMap.current){
      renderedMap.current.relayout()
    }
  }, [sidebar])

  const onClickMoveSearch = () => {
    if(renderedMap.current){
      let lat = renderedMap.current.getCenter().getLat();
      let lng = renderedMap.current.getCenter().getLng();
      window.location.href = `/map?&lat=${lat}&lng=${lng}`
    }
  }

  const onClickMoveMap = ()=> {
    setMoveMap(prev=> !prev)
  }

  return (
    <Container sidebar={sidebar !== -1 ? true:false} ref={mapContainer} >
      <LocationSelectorBtn onClick={onClickMoveMap}/>
      {moveMap&& <LocationModal onChangeLocation={onChangeLocation} onClickMoveMap={onClickMoveMap}/>}
      {mapUpdate&& <ToastMessage wrapType="none" messageString="이 지역에서 다시 검색하기" timer={3000}  clickEvent={true} eventFunc={onClickMoveSearch} key="mapUpdateToast"/>}
    </Container>
  );
};

export default Maps;

const Container = styled.div<style>`
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  ${({sidebar}) => {
        if(sidebar === true){
            return `width: calc(100% - 431px);`
        }
    }};

  @media (min-width: 1280px) {
    width: calc(100% - (340px + (438 - 340) * ((100vw - 1280px) / (1920 - 1280))));
    ${({sidebar}) => {
        if(sidebar === true){
            return `width: calc(100% - 378px - 380px);`
        }
    }};
  }
  @media (min-width: 1920px) {
    width: calc(100% - 439px);
    ${({sidebar}) => {
        if(sidebar === true){
            return `width: calc(100% - 438px - 438px);`
        }
    }};
  }
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

