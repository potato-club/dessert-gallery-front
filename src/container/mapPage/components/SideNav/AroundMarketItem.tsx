import React from "react";
import styled from "styled-components";
import Rating from "../../../../components/Rating";
import Image from "next/image";
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
  searchData:searchData
  setCenter: React.Dispatch<React.SetStateAction<selectedLocationCoordData>>
}

const AroundMarketItem = ({latitude, longitude, score, storeAddress, storeName, storeId, content, fileName, fileUrl,searchData, setCenter}: makerDataProps) => {
  console.log("why???")

  const onClickHandler = () => {
    setCenter((prev)=>({
      ...prev,
      lat: latitude.toString(),
      lng: longitude.toString()
  }))
    window.location.href = `/map?selected=${storeId}&search=${searchData.searchKeyword}&sort=${searchData.sort}&lat=${latitude}&lng=${longitude}`
  }
  return (
    <Container onClick={onClickHandler}>
      <TextInfoDiv>
        <Name>{storeName}</Name>
        <Address>{storeAddress}</Address>
        <Introduction>
          {content}
        </Introduction>
        <Rating size="small" ratingValue={`${score}`} />
      </TextInfoDiv>
      <ImageDiv>
        <Image
          src={fileUrl}
          alt={fileName}
          layout="fill"
          objectFit="cover"
        />
      </ImageDiv>
    </Container>
  );
};

export default AroundMarketItem;

const Container = styled.li`
  display: flex;
  width: 100%;
  height: 134px;
  background-color: white;
  padding: 21px;
  cursor: pointer;
`;
const TextInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-right: 45px;
`;
const ImageDiv = styled.div`
  position: relative;
  background-color: black;
  width: 100%;
`;
const Name = styled.h1`
  color: #000;
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
`;
const Address = styled.address`
  color: #000;
  font-size: 7px;
  font-weight: 400;
  line-height: normal;
`;
const Introduction = styled.div`
  color: #000;
  font-size: 8px;
  font-weight: 500;
  margin: 7px 0px 10px;
`;
