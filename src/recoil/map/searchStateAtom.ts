// state/searchState.ts
import { atom } from 'recoil';
import { searchData } from '../../types/componentsData';
/** MapPage 검색 정보를 담는 state */ 
export const searchState = atom<searchData>({
  key: 'searchState',
  default: {
    sort: "",
    searchKeyword: "",
    page: 1,
}});