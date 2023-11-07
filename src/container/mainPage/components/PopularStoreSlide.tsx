import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import GalleryPost from '../../boardPage/galleryBoard/GalleryPost';
import { resGalleryPost } from '../../../types/apiTypes';
import styled from 'styled-components';

interface PopularStoreProps {
  popularStoreList: resGalleryPost[];
  isGuest: boolean;
}

export default function PopularStoreSlide({ popularStoreList,isGuest }: PopularStoreProps) {

  useEffect(() => {}, [popularStoreList]);

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={parseInt(`${window.innerWidth/304 - 1}`)}
      effect="fade"
      direction="horizontal"
    >
      {popularStoreList && popularStoreList.length > 0 &&
        popularStoreList.filter((e: resGalleryPost,idx: number)=> idx<6).map((e:resGalleryPost, idx:number) => (
          <SwiperSlide key={`slide${idx}`}>
            <GalleryPost
              key={e.id}
              width={304}
              imgArray={[e.fileUrl]}
              location={e.address}
              onBookmark={e.followId === null ? false: true} 
              ratingValue={e.score}
              summary={e.content}
              title={e.name}
              size='medium'
              tagValue={Number(e.score) > 4.5 ? "HOT": "none"}
              height={444}
              storeId={e.id}
              bookmark={isGuest?false:true}/>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}