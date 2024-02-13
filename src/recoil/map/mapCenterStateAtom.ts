// state/mapCenterState.ts
import { atom } from 'recoil';
import { selectedLocationCoordData } from '../../types/componentsData';

/** MapPage 위치 정보와 좌표 값을 담는 state */ 
export const mapCenterState = atom<selectedLocationCoordData>({
  key: 'mapCenterState',
  default: {
    lat: "37.3596487398599",
    lng: "126.930876144565",
  },
});