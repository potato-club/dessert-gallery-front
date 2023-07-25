import React from 'react'
import { GalleryPostWrap, TitleText, InformationWrap,LocationText, Summary } from './GalleryPost.style'
import SlideImage from '../../../components/SlideImage/SlideImage'
import Tag from '../../../components/Tag'
import Rating from '../../../components/Rating'
import { galleryPostValue, galleryPostSizeValue } from '../../../types/componentsProps'


export default function GalleryPost({width,height,location,imgArray, onBookmark,ratingValue,summary,size='big', tagValue='none',title}:galleryPostValue) {
  let sizeValue:galleryPostSizeValue = {
    titleTextSize: '18px',
    locationTextSize: '10px',
    summaryTextSize: '10px',
    ratingSize: "medium"
  }

  if(size === 'medium'){
    sizeValue.titleTextSize = '17px';
  }else if(size === 'small'){
    sizeValue.titleTextSize = '11px';
    sizeValue.locationTextSize = '6px';
    sizeValue.summaryTextSize = '6px';
    sizeValue.ratingSize = "small"
  }

  return (
    <GalleryPostWrap width={width} height={height}>
      
      <SlideImage srcArray={imgArray} width={width} size={size} height={width} bookmark={true} onBookmark={onBookmark} dotIndicator={true} >
        {tagValue !=='none' && size === 'big' && <Tag title={tagValue} width='78px' height='30px' fontSize='12px' clickAble={false}  />}
        {tagValue !=='none' && size === 'medium' && <Tag title={tagValue} width='73px' height='28px' fontSize='11px' clickAble={false}  />}
        {tagValue !=='none' && size === 'small' && <Tag title={tagValue} width='46px' height='19px' fontSize='7px'  clickAble={false}  />}
      </SlideImage>

      <InformationWrap>
        <TitleText size={sizeValue.titleTextSize} >{title}</TitleText>
        <LocationText size={sizeValue.locationTextSize} >{location}</LocationText>
        <Summary size={sizeValue.summaryTextSize} >{summary}</Summary>
        <Rating size={sizeValue.ratingSize} ratingValue={ratingValue}/>
      </InformationWrap>
    
    </GalleryPostWrap>
  )
}
