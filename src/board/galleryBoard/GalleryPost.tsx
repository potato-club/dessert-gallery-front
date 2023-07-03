import React from 'react'
import { GalleryPostWrap, TitleText, InformationWrap,LocationText, Summary } from './GalleryPost.style'
import SlideImage from '../../components/SlideImage/SlideImage'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import { galleryPostValue } from '../../types/componentsProps'


export default function GalleryPost({width,height,location,imgArray, onBookmark,ratingValue,summary,tagSize='none', tagValue='none',title}:galleryPostValue) {
  return (
    <GalleryPostWrap width={width} height={height}>
      
      <SlideImage srcArray={imgArray} width={width} height={width} bookmark={true} onBookmark={onBookmark} >
        {tagValue !=='none' && tagSize === 'big' && <Tag title={tagValue} width='116px' height='46px' clickAble={false}  />}
        {tagValue !=='none' && tagSize === 'medium' && <Tag title={tagValue} width='73px' height='28px' fontSize='11px' clickAble={false}  />}
        {tagValue !=='none' && tagSize === 'small' && <Tag title={tagValue} width='116px' height='46px' fontSize='7px'  clickAble={false}  />}
      </SlideImage>

      <InformationWrap>
        <TitleText>{title}</TitleText>
        <LocationText>{location}</LocationText>
        <Summary>{summary}</Summary>
        <Rating size='medium' ratingValue={ratingValue}/>
      </InformationWrap>
    
    </GalleryPostWrap>
  )
}
