import React from 'react'
import { GalleryPostWrap, TitleText, InformationWrap,LocationText, Summary } from './GalleryPost.style'
import SlideImage from '../../components/SlideImage/SlideImage'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'

const imgSrc = [
  'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/09/11/11/47/cake-3669245_640.jpg'
];

export default function GalleryPost() {
  return (
    <GalleryPostWrap>
      <SlideImage srcArray={imgSrc} width={455} height={455} bookmark={true} onBookmark={true} >
      <Tag title='NEW' width='116px' height='46px' clickAble={false}  />
      </SlideImage>
      <InformationWrap>
        <TitleText>멍멍카페</TitleText>
        <LocationText>서울시 강서구 곰달레길 12</LocationText>
        <Summary>반려견을 위한 디저트를 판매하고 있어요내 강아지와 함께하는 생일파티!</Summary>
        <Rating size='medium' ratingValue='4.5'/>
      </InformationWrap>
    </GalleryPostWrap>
  )
}
