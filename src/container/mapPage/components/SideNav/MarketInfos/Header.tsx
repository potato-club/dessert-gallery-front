import React from "react";
import styled from "styled-components";
import Tag from "../../../../../components/Tag";
import Image from "next/image";
import { mapStoreDetail } from "../../../../../types/apiTypes";

// 가게 정보조회 api 들어와야함
const Header = ({store}:any) => {
  const url = window.location.href.split('?')[1].split('&')
  console.log("sssss\n\n", store)
  return (
    <>
      <Container>
        <ImageSet >
          <Image 
            src={store.storeImage.fileUrl}
            alt={store.storeImage.fileName} 
            layout="fill"
            objectFit="cover"
          />
        <Exit href={`/map?selected=-1&${url[1]}`}>X</Exit>
        </ImageSet>
        <StoreInfo>
          <Name>{store.name}</Name>
          <SubTitle>
            {store.info}
          </SubTitle>
          <ButtonList>
            <Tag
              title="가게 상세"
              width="94px"
              height="27px"
              clickAble={true}
              onClickHandler={() => { window.location.href = `/galleryBoard/${store.id}` }}
              inversion={true}
              hoverCss={true}
              fontSize="10px"
            />
            <Tag
              title="메시지 보내기"
              width="94px"
              height="27px"
              clickAble={true}
              onClickHandler={() => {}}
              fontSize="10px"
            />
          </ButtonList>
        </StoreInfo>
      </Container>
      <InfoList>
        <ListItem>
          <Title>가게 위치</Title>
          <Text>{store.address}</Text>
        </ListItem>
        <ListItem>
          <Title>가게 정보</Title>
          <Text>
            {store.content}
          </Text>
        </ListItem>
        <ListItem>
          <Title>전화 번호</Title>
          <Text>
            {store.phoneNumber}
          </Text>
        </ListItem>
      </InfoList>
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
`;

const Exit = styled.a`
  position: absolute;
  right: 0;

  margin: 4px;
  padding: 4px 8px;
  font-size: 24px;
  cursor: pointer;
  
  color: black; 
  text-decoration: none;
  outline: none;
  a:hover, a:active {
    text-decoration: none; 
    color: black; 
    background-color:#f59000;
  }
`
const ImageSet = styled.div`
  background-color: #fcf0e1;
  width: 100%;
  height: 139px;
  position: relative;
`;
const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 20px 30px;
`;
const Name = styled.h1`
  display: flex;
  justify-content: center;
  color: #000;
  font-size: 19px;
  font-weight: 700;
  line-height: normal;
`;
const SubTitle = styled.span`
  color: #828282;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  margin-top: 3px;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: center;
`;
const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const InfoList = styled.div`
  padding: 13px 30px;
  background-color: white;
`;
const ListItem = styled.div`
  display: flex;
  padding: 8px 0px;
  border-bottom: 1px solid #dedede;
  height: 30px;
  gap: 33px;
  white-space: nowrap;
`;
const Title = styled.span`
  color: #000;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
`;
const Text = styled.span`
  color: #828282;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`;
