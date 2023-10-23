import React from 'react'
import { GalleryPostWrap, TitleText, InformationWrap,LocationText, Summary, TextWrap } from './GalleryPost.style'
import SlideImage from '../../../components/SlideImage/SlideImage'
import Tag from '../../../components/Tag'
import Rating from '../../../components/Rating'
import { galleryPostValue, galleryPostSizeValue } from '../../../types/componentsProps'


export default function GalleryPost({storeId, height=444, width,location,imgArray,ratingValue,summary,size='big', tagValue='none', bookmark, onBookmark ,title}:galleryPostValue) {
  let sizeValue:galleryPostSizeValue = {
    titleTextSize: '18px',
    locationTextSize: '12px',
    summaryTextSize: '12px',
    ratingSize: "medium",
    textPadding: "16px 20px"
  }

  if(size === 'medium'){
    sizeValue.titleTextSize = '17px';
  }else if(size === 'small'){
    sizeValue.titleTextSize = '16px';
    sizeValue.locationTextSize = '10px';
    sizeValue.summaryTextSize = '10px';
    sizeValue.ratingSize = "small"
    sizeValue.textPadding = "10px 12px"
  }

  const onClickGalleryPost = ()=>{
    window.location.href  = `/galleryBoard/${storeId}`
  }


  return (
    <GalleryPostWrap width={width} height={height}>
      <SlideImage storeId={storeId} srcArray={imgArray} width={width} size={size} height={width} bookmark={bookmark} onBookmark={onBookmark} >
        {tagValue !=='none' && size === 'big' && <Tag title={tagValue} width='78px' height='30px' fontSize='12px' clickAble={false}  />}
        {tagValue !=='none' && size === 'medium' && <Tag title={tagValue} width='73px' height='28px' fontSize='11px' clickAble={false}  />}
        {tagValue !=='none' && size === 'small' && <Tag title={tagValue} width='46px' height='19px' fontSize='7px'  clickAble={false}  />}
      </SlideImage>

      <InformationWrap textPadding={sizeValue.textPadding} onClick={onClickGalleryPost}>
        <TextWrap>
          <TitleText size={sizeValue.titleTextSize} >{title}</TitleText>
          <LocationText size={sizeValue.locationTextSize} >{location}</LocationText>
          <Summary size={size} textSize={sizeValue.summaryTextSize} >{summary}</Summary>
        </TextWrap>
        <Rating size={sizeValue.ratingSize} ratingValue={ratingValue}/>
      </InformationWrap>
    
    </GalleryPostWrap>
  )
}
