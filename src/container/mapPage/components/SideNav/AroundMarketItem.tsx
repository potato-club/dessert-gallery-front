import React from "react";
import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import Rating from "../../../../components/Rating";
import Image from "next/image";
import { selectedLocationCoordData } from "../../../../types/componentsData";
import { selectedStoreState } from "../../../../recoil/map/selectedStoreStateAtom";

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
  searchData:searchData
  setCenter: React.Dispatch<React.SetStateAction<selectedLocationCoordData>>
}

interface style{
  isSelected: boolean
}


const AroundMarketItem = ({latitude, longitude, score, storeAddress, storeName, storeId, content, fileName, fileUrl,searchData, setCenter}: makerDataProps) => {
  const selectedStoreId = useRecoilValue(selectedStoreState);
  const onClickHandler = () => {
    setCenter((prev)=>({
      ...prev,
      lat: latitude.toString(),
      lng: longitude.toString()
  }))
    window.location.href = `/map?selected=${storeId}&search=${searchData.searchKeyword}&sort=${searchData.sort}&lat=${latitude}&lng=${longitude}`
  }
  return (
    <Container isSelected={selectedStoreId===storeId} onClick={onClickHandler}>
      <TextInfoDiv>
        <Name>{storeName}</Name>
        <Address>{storeAddress}</Address>
        <Introduction>
          {content}
        </Introduction>
        <Rating size="small" ratingValue={`${score}`} />
      </TextInfoDiv>
      <ImageDiv>
        {fileUrl !== null &&<Image
          src={fileUrl}
          alt={fileName}
          layout="fill"
          objectFit="cover"
        />}
      </ImageDiv>
    </Container>
  );
};

export default AroundMarketItem;

const Container = styled.li<style>`
  display: flex;
  width: 100%;
  height: fit-content;
  background-color: white;
  padding: 21px;
  cursor: pointer;
  border-radius: 6px;  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  ${({isSelected}) => {
        if(isSelected){
            return `border: 2px solid #ff6f00;`
        }
  }};

`;
const TextInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-right: 24px;
`;
const ImageDiv = styled.div`
  position: relative;
  background-color: #ff6f00;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;
const Name = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  font-family: noto-sans-cjk-kr;
`;
const Address = styled.address`
font-family: noto-sans-cjk-kr;
  color: #000;
  font-size: 8px;
  font-weight: 400;
  line-height: normal;
  margin: 4px 0px 4px;
`;
const Introduction = styled.div`
  font-family: noto-sans-cjk-kr;
  color: #000;
  font-size: 9px;
  font-weight: 500;
  margin: 0px 0px 10px;
`;
