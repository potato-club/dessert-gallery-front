import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import styled from "styled-components";
import Market from "./Market";
import { Search } from "../../../../../public/svg";
import Tag from "../../../../components/Tag";
import { selectedLocationCoordData } from "../../../../types/componentsData";
interface searchData {
  sort: string ,
  searchKeyword: string,
  page: number,
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
interface props {
  markerData: makerDataProps[]
  isSearch: boolean
  searchKeyword: string
  selectedStoreId: number
  center: selectedLocationCoordData
  setCenter: React.Dispatch<React.SetStateAction<selectedLocationCoordData>>
  searchData: searchData
  setSearchData: React.Dispatch<React.SetStateAction<searchData>>
}



const SideNav = ({markerData, isSearch, searchData, selectedStoreId, center, setCenter, setSearchData}: props) => {
  const [searchWord, setSearchWord] = useState<string>(searchData.searchKeyword)
  console.log("markerData",markerData)

  const onChangeSearchWord = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
    console.log("어째서..?", searchWord)
  }
   /**
   * 검색어 입력 후 enter 키 입력시 동작 함수
   * @param e : enter key press 여부
   */
   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // 엔터 키가 입력되었을 때 동작할 코드 작성
    if (e.key === 'Enter') {
      setSearchData(prev => ({
        ...prev,
        searchKeyword: searchWord
      }))
    window.location.href = `/map?selected=-1&search=${searchWord}&sort=${searchData.sort}&lat=${center.lat}&lng=${center.lng}`
    }
  };


  const onChangeSortScore = () => {
    setSearchData(prev => ({
      ...prev,
      sort:"score"
    }))
  }
  const onChangeSortFollow = () => {
    setSearchData(prev => ({
      ...prev,
      sort:"follow"
    }))
  }
  return (
    <Container>
      <SideHeader>
        <SearchForm>
          <Search width="16px" height="16px" />
          <SearchInput type="text" placeholder="가게를 검색해 주세요." value={searchWord} onChange={onChangeSearchWord} onKeyDown={handleKeyDown}></SearchInput>
        </SearchForm>
        <FilterList>
          {/**
           * sort: true 
           */}
          <Tag
            title="평점순"
            width="62px"
            height="25px"
            fontSize="10px"
            clickAble={true}
            inversion={searchData.sort === "score"}
            hoverCss={true}
            onClickHandler={onChangeSortScore}
          />
          {/**
           * sort: false 
           */}
          <Tag
            title="팔로워순"
            width="62px"
            height="25px"
            fontSize="10px"
            clickAble={true}
            inversion={searchData.sort === "follow"}
            hoverCss={true}
            onClickHandler={onChangeSortFollow}
          />
        </FilterList>
      </SideHeader>

      <Market markerData={markerData} searchData={searchData} isSearch={isSearch} setCenter={setCenter}/>
    </Container>
  );
};

export default SideNav;
const Container = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #fcf0e1;
  width: 340px;
  height: 100vh;
  position: relative;
  z-index: 2;
  @media (min-width: 1280px) {
    width: calc(340px + (438 - 340) * ((100vw - 1280px) / (1920 - 1280)));
  }
  @media (min-width: 1920px) {
    width: 438px;
  }
`;
const SideHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 29px 14px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
  position: relative;
  z-index: 3;
`;
const SearchForm = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #ff8d00;
  background-color: white;
  padding: 11px 14px;
`;
const SearchInput = styled.input`
  border: none;
  width: 100%;
  height: 20px;
  padding-left: 15px;
  outline: none;
  ::placeholder {
    color: black;
    font-size: 11px;
    font-size: 500;
  }
`;
const FilterList = styled.div`
  display: flex;
  gap: 12px;
`;
