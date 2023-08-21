import React, { useState } from "react";
import styled, { css } from "styled-components";
import Tag from "../../../components/Tag";

const StoreProfile = ({ storeInfo }: any) => {
  const {
    name,
    introduction,
    address,
    phoneNumber,
    storeImage,
    postCount,
    followers,
    follow,
    id,
  } = storeInfo;

  return (
    <Container>
      <StoreImg src={storeImage.fileUrl} />
      <InnerContainer>
        <InfoContent>
          <StoreName>{name}</StoreName>
          <SubTitle>레터링 케이크 주문 제작</SubTitle>
          <MainPhrase>{introduction}</MainPhrase>
          <Address>{address}</Address>
          <StoreNumber>{phoneNumber}</StoreNumber>
          <StoreInfo>
            <InfoView>
              <Name>게시물</Name>
              <Number>{postCount}</Number>
            </InfoView>
            <InfoView>
              <Name>팔로워</Name>
              <Number>{followers}</Number>
            </InfoView>
            <InfoView></InfoView>
          </StoreInfo>
          <BtnList>
            <StoreProfileBtn
              title={follow ? "팔로우 끊기" : "팔로우"}
              clickAble={true}
              hoverCss={true}
              width="90px"
              height="30px"
              fontSize="12px"
              inversion={true}
            />
            <StoreProfileBtn
              title="메세지 보내기"
              clickAble={true}
              hoverCss={true}
              width="136px"
              height="30px"
              fontSize="12px"
            />
          </BtnList>
        </InfoContent>
      </InnerContainer>
    </Container>
  );
};

export default StoreProfile;

const StoreImg = styled.img`
  width: 320px;
  height: 320px;
`;
const StoreProfileBtn = styled(Tag)``;
const Container = styled.div`
  display: flex;
  width: 640px;
  height: 320px;
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
  min-height: 50px;
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
  align-items: center;
  gap: 13px;
`;
const Name = styled.span`
  ${textcss}
  font-size: 13px;
  font-weight: 700;
`;
const Number = styled.span`
  ${textcss}
  color: #828282;
  font-size: 13px;
`;
const BtnList = styled.div`
  display: flex;
  gap: 21px;
  margin-top: 19px;
`;
