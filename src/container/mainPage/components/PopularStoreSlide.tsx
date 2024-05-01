import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import GalleryPost from '../../boardPage/galleryBoard/GalleryPost';
import { resGalleryPost } from '../../../types/apiTypes';
import styled from 'styled-components';
import { useLoginUserInfo } from '../../../hooks/useUser';
import { LeftMoveButtonIcon, RightMoveButtonIcon } from '../../../../public/svg';

interface PopularStoreProps {
  popularStoreList: resGalleryPost[];
  isGuest: boolean;
}

export default function PopularStoreSlide({ popularStoreList,isGuest }: PopularStoreProps) {
  const { data: userInfo } = useLoginUserInfo();
  const [slideCnt, setSlideCnt] = useState(3);

  useEffect(() => {
    setSlideCnt(Math.trunc(window.innerWidth/380));
  }, [popularStoreList, userInfo, slideCnt]);


  if(isGuest){
    return (
      <Wrap>
        {
          slideCnt<=6 && 
          <IconHoverLeftWrap className='icon'>
            <SvgWrap>
              <LeftMoveButtonIcon width={24} height={24}/>
            </SvgWrap>
          </IconHoverLeftWrap>
        }
        <Swiper
          spaceBetween={80}
          slidesOffsetBefore={200}
          slidesOffsetAfter={200}
          slidesPerView={slideCnt}
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
                  bookmark={false}/>
              </SwiperSlide>
            ))}
        </Swiper>
        {
          slideCnt<=6 && 
          <IconHoverRightWrap className='icon'>
            <SvgWrap>
              <RightMoveButtonIcon width={24} height={24}/>
            </SvgWrap>
          </IconHoverRightWrap>
        }
      </Wrap>
    );
  }else{
    return (
      <Wrap>
        {
          slideCnt<=6 && 
          <IconHoverLeftWrap className='icon'>
            <SvgWrap>
              <LeftMoveButtonIcon width={24} height={24}/>
            </SvgWrap>
          </IconHoverLeftWrap>
        }
        <Swiper
          spaceBetween={80}
          slidesOffsetBefore={200}
          slidesOffsetAfter={200}
          slidesPerView={slideCnt}
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
                  bookmark={userInfo?.userRole === 'USER'?true:false}/>
              </SwiperSlide>
            ))}
        </Swiper>
        {
          slideCnt<=6 && 
          <IconHoverRightWrap className='icon'>
            <SvgWrap>
              <RightMoveButtonIcon width={24} height={24}/>
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
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0px 0px 6px 1px #6d6d6d3e;
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
    filter: drop-shadow(0 0 0.25rem #333333ac);
  }
`;