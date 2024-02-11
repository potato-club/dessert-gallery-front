export type boardOptionData = {
  location: string,
  selectSearchWord:string[],
}

export type filterData = {
  selected: string,
  idx: number
  state: boolean
}

/**
 * selected: 선택된 태그 글자
 * menu: 메뉴 카테고리 선택
 * 1 - 지역
 * 2 - 검색어
 */
export type tagClickData = {
  menu: number
  idx?: number
}

export type locationData = {
  city: string,
  child: string[]
}

export type coord = {
  title: string
  lat: string
  lng: string
}

export type locationCoordData = {
  city: string,
  child: coord[]
}

export type selectedLocationCoordData = {
  lat: string;
  lng: string;
}

export type selectLocationOptionData = {
  location: locationData,
  idx: number
}
export type selectLocationCoordOptionData = {
  location: locationCoordData,
  idx: number
}

export type searchData = {
  sort: string ,
  searchKeyword: string,
  page: number,
}