import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

const StoreProfile = () => {
  return (
    <Container>
      <Image
        src="/image/storeProfile.png"
        width="320px"
        height="321px"
        alt=""
      />
      <InnerContainer>
        <InfoContent>
          <StoreName>늘봄 케이크</StoreName>
          <SubTitle>레터링 케이크 주문 제작</SubTitle>
          <MainPhrase>
            항상 언제든 늘 봄처럼 따스한 케이크를 <br />
            드립니다 글루톈프리 케이크로 건강하게 =0
          </MainPhrase>
          <Address>서울시 강서구 곰달래길 12</Address>
          <StoreNumber>010-1234-5678</StoreNumber>
          <StoreInfo>
            <InfoView>
              <Name>게시물</Name>
              <Number>15</Number>
            </InfoView>
            <InfoView>
              <Name>팔로워</Name>
              <Number>2354</Number>
            </InfoView>
            <InfoView></InfoView>
          </StoreInfo>
          <BtnList></BtnList>
        </InfoContent>
      </InnerContainer>
    </Container>
  );
};

export default StoreProfile;

const Container = styled.div`
  display: flex;
  width: 640px;
  height: 321px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
  background-color: #fffdf9;
`;
const InnerContainer = styled.div`
  padding: 44px 36px 39px;
`;
const InfoContent = styled.div`
  display: flex;
  max-width: 247px;
  flex-direction: column;
`;
const textcss = css`
  color: #000;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`;

const StoreName = styled.h1`
  ${textcss}
  font-size: 28px;
  font-weight: 700;
`;
const SubTitle = styled.h2`
  ${textcss}
  color: #828282;
  font-weight: 700;
  margin-bottom: 9px;
`;
const MainPhrase = styled.p`
  ${textcss}
  margin-bottom: 11px;
`;
const Address = styled.p`
  ${textcss}
  margin-bottom: 10px;
`;
const StoreNumber = styled.p`
  ${textcss}
  margin-bottom: 12px;
`;
const StoreInfo = styled.div`
  display: flex;
  gap: 33px;
`;
const InfoView = styled.div`
  display: flex;
  gap: 13px;
`;
const Name = styled.span`
  ${textcss}
  font-weight: 700;
`;
const Number = styled.span`
  ${textcss}
  color: #828282;
  font-size: 13px;
`;
const BtnList = styled.div``;
