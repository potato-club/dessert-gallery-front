import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { galleryPostValue } from '../../../types/componentsProps';
import GalleryPost from '../../boardPage/galleryBoard/GalleryPost';

interface PopularStoreProps {
  propsData: galleryPostValue[];
}

export default function PopularStore({ propsData }: PopularStoreProps) {
  useEffect(() => {}, [propsData]);

  return (
    <PopularStoreWrap>
      <TextWrap>
        <TitleText>인기 가게 게시글</TitleText>
        <SummaryText>사진을 드래그하면 더 멋진 인기 게시물과 신규 게시물을 더 보실 수 있습니다</SummaryText>
      </TextWrap>
      <ContentsWrap>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          effect="fade"
          direction="horizontal"
        >
          {propsData.length > 0 &&
            propsData.map((e, idx) => (
              <SwiperSlide key={`slide${idx}`}>
                <GalleryPost
                  key={idx}
                  width={e.width}
                  height={e.height}
                  imgArray={e.imgArray}
                  location={e.location}
                  onBookmark={e.onBookmark}
                  ratingValue={e.ratingValue}
                  summary={e.summary}
                  title={e.title}
                  size={e.size}
                  tagValue={e.tagValue}
                />
              </SwiperSlide>
            ))}
        </Swiper>
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
  margin: 60px 0 53px 0;
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