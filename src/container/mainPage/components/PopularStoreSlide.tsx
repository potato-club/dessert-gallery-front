import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import GalleryPost from '../../boardPage/galleryBoard/GalleryPost';
import { resGalleryPost } from '../../../types/apiTypes';
import styled from 'styled-components';
import { useLoginUserInfo } from '../../../hooks/useUser';
import { LeftMoveButtonIcon, RightMoveButtonIcon } from '../../../../public/svg';
import SwiperCore from 'swiper';

interface PopularStoreProps {
  popularStoreList: resGalleryPost[];
  isGuest: boolean;
}

export default function PopularStoreSlide({ popularStoreList,isGuest }: PopularStoreProps) {
  const { data: userInfo } = useLoginUserInfo();
  const [slideCnt, setSlideCnt] = useState(3);
  const [idx, setIdx] = useState(0);
  const [swiper, setSwiper] = useState<SwiperCore>();
  const dataLength = useRef(popularStoreList.length>6 ? 6:popularStoreList.length);

  useEffect(() => {
    setSlideCnt(Math.trunc(window.innerWidth/380));
    console.log("왜이래!!",Math.trunc(window.innerWidth/380) )
  }, [popularStoreList, userInfo, slideCnt]);


  const moveToNext = () => {
    swiper?.slideToLoop(6, 300, true)
    setIdx(6)
  }

  const moveToPrev = () => {
    if(idx-2 >= 0){
      swiper?.slideToLoop(0, 300, true)
      setIdx(0)
    }
  }

  const moveSlide = () => {
    if(swiper?.realIndex !==undefined){
      setIdx(swiper?.activeIndex*(slideCnt-1) > 6? 6: swiper?.activeIndex*(slideCnt-1))
    }
  }

  if(isGuest){
    return (
      <Wrap>
        {
          idx !== 0 && 
          <IconHoverLeftWrap className='icon' onClick={moveToPrev}>
            <SvgWrap>
              <LeftMoveButtonIcon stroke='#ff6f00e4' width={24} height={24}/>
            </SvgWrap>
          </IconHoverLeftWrap>
        }
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={80}
          slidesOffsetBefore={200}
          slidesOffsetAfter={200}
          slidesPerView={slideCnt}
          slidesPerGroup={slideCnt-1}
          effect="fade"
          direction="horizontal"
          onActiveIndexChange={moveSlide}
          simulateTouch={true}
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
                  bookmark={false}/>
              </SwiperSlide>
            ))}
        </Swiper>
        {
          idx<6 && 
          <IconHoverRightWrap className='icon' onClick={moveToNext}>
            <SvgWrap>
              <RightMoveButtonIcon width={24} height={24} stroke='#ff6f00e4'/>
            </SvgWrap>
          </IconHoverRightWrap>
        }
      </Wrap>
    );
  }else{
    return (
      <Wrap>
        {
          idx !== 0 && 
          <IconHoverLeftWrap className='icon' onClick={moveToPrev}>
            <SvgWrap>
              <LeftMoveButtonIcon stroke='#ff6f00e4' width={24} height={24}/>
            </SvgWrap>
          </IconHoverLeftWrap>
        }
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={80}
          slidesOffsetBefore={200}
          slidesOffsetAfter={200}
          slidesPerView={slideCnt}
          slidesPerGroup={slideCnt-1}
          effect="fade"
          direction="horizontal"
          onActiveIndexChange={moveSlide}
          simulateTouch={true}
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
                  bookmark={userInfo?.userRole === 'USER'?true:false}/>
              </SwiperSlide>
            ))}
        </Swiper>
        {
          idx<6 && 
          <IconHoverRightWrap className='icon' onClick={moveToNext}>
            <SvgWrap>
              <RightMoveButtonIcon width={24} height={24} stroke='#ff6f00e4'/>
            </SvgWrap>
          </IconHoverRightWrap>
        }
      </Wrap>
    );
  }
}
const Wrap = styled.div`
  position: relative;
  &:hover {
    /* 부모 요소가 호버될 때 자식 요소의 특정 클래스 스타일 변경 */
    .icon {
      /* 변경할 스타일 */
      display: flex;
    }
  }
  z-index: 30;
`
const IconHoverWrap = styled.div`
  position:absolute;
  top: 50%;
  
  width: 34px;
  height: 34px;
  top: 50%;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 0px 6px 1px #0000003d;
  display: none;
`

const IconHoverLeftWrap = styled(IconHoverWrap)`
  left: 3%;
`

const IconHoverRightWrap = styled(IconHoverWrap)`
  right: 3%;
`

const SvgWrap = styled.div`
  path {
    filter: drop-shadow(0 0 0.35rem #ffb356);
  }
`;