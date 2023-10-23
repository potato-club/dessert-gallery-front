import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/swiper-bundle.css';


export default function PopularStorePrevSlide() {

  const dummyData = [1,2,3,4,5,6]

  return (
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          effect="fade"
          direction="horizontal"
        >
          {dummyData.map((e, idx:number) => (
              <SwiperSlide key={`slide${idx}`}>
                <PrevPost key={`post${idx}`}/>
              </SwiperSlide>
            ))}
        </Swiper>
  );
}

const PrevPost = styled.div`
    width: 304px;
    height: 444px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 16px 16px;
    box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 15%);
    margin: 48px 0;
`