import React, { useEffect } from 'react';
import styled from 'styled-components';
import 'swiper/swiper-bundle.css';
import { galleryPostValue } from '../../../types/componentsProps';
import { useGetPopularStores } from '../../../hooks/useGetMain';
import PopularStorePrevSlide from './PopularStorePrevSlide';
import PopularStoreSlide from './PopularStoreSlide';
import type { mainComponentsProps } from '../../../types/componentsProps';


export default function PopularStore({ isGuest }: mainComponentsProps) {
  const {data, isLoading, error} = useGetPopularStores();
  console.log("popularStoreList", data, isLoading, error);

  useEffect(() => {}, [isGuest]);

  return (
    <PopularStoreWrap>
      <TextWrap>
        <TitleText>인기 가게 게시글</TitleText>
        <SummaryText>사진을 드래그하면 더 멋진 인기 가게와 신규 가게들을 확인하실 수 있습니다</SummaryText>
      </TextWrap>
      <ContentsWrap>
        {isLoading && <PopularStorePrevSlide/>}
        {!isLoading && <PopularStoreSlide isGuest={isGuest} popularStoreList={data}/>}
      </ContentsWrap>
    </PopularStoreWrap>
  );
}

const PopularStoreWrap = styled.div`
  width: 100vw;
  height: 708px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0 24px 0;
`;

const TitleText = styled.div`
  font-family: noto-sans-cjk-kr;
  font-weight: bold;
  font-size: 40px;
`;

const SummaryText = styled.div`
  font-family: noto-sans-cjk-kr;
  font-size: 12px;
  margin-top: 7px;
`;

const ContentsWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
  width: 100vw;

  .swiper-wrapper {
    width: 100vw;
  }

  .swiper-container {
    width: 100%; 
    height: auto;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center; 
  }
`;
