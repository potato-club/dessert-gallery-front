import React from "react";
import styled from "styled-components";
import Tag from "../../../../../components/Tag";

// 가게 정보조회 api 들어와야함
const Header = () => {
  return (
    <>
      <Container>
        <ImageSet></ImageSet>
        <StoreInfo>
          <Name>닐라닐라 바닐라</Name>
          <SubTitle>
            {"가게에 대한 설명을 기재합니다 기재합니다" || "default"}
          </SubTitle>
          <ButtonList>
            <Tag
              title="팔로우"
              width="94px"
              height="27px"
              clickAble={true}
              onClickHandler={() => {}}
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
          <Text>서울시 강서구 곰달래길 12</Text>
        </ListItem>
        <ListItem>
          <Title>가게 정보</Title>
          <Text>
            수제 바닐라 비건 친환경
            케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크케이크
          </Text>
        </ListItem>
        <ListItem>
          <Title>전화 번호</Title>
          <Text>010-1234-5678</Text>
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
const ImageSet = styled.div`
  background-color: #fcf0e1;
  width: 100%;
  height: 139px;
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
