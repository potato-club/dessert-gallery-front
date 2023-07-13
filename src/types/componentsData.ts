export type boardOptionData = {
  location: string[],
  selectSearchWord:string,
  filterOption: filterData[],
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
 * 2 - 종류
 * 3 - 검색어
 */
export type tagClickData = {
  selected?: string,
  menu: number
  idx?: number
}