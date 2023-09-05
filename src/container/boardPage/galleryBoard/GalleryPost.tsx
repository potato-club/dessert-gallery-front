import React from 'react'
import { GalleryPostWrap, TitleText, InformationWrap,LocationText, Summary } from './GalleryPost.style'
import SlideImage from '../../../components/SlideImage/SlideImage'
import Tag from '../../../components/Tag'
import Rating from '../../../components/Rating'
import { galleryPostValue, galleryPostSizeValue } from '../../../types/componentsProps'
import Bookmark from '../../../components/SlideImage/Bookmark'


export default function GalleryPost({storeId, width,location,imgArray,ratingValue,summary,size='big', tagValue='none', bookmark, onBookmark ,title}:galleryPostValue) {
  let sizeValue:galleryPostSizeValue = {
    titleTextSize: '18px',
    locationTextSize: '12px',
    summaryTextSize: '12px',
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

  const onClickGalleryPost = ()=>{
    window.location.href  = `/galleryBoard/${storeId}`
  }


  return (
    <GalleryPostWrap width={width}>

      
      <SlideImage storeId={storeId} srcArray={imgArray} width={width} size={size} height={width} bookmark={true} onBookmark={onBookmark} dotIndicator={true} >
        {tagValue !=='none' && size === 'big' && <Tag title={tagValue} width='78px' height='30px' fontSize='12px' clickAble={false}  />}
        {tagValue !=='none' && size === 'medium' && <Tag title={tagValue} width='73px' height='28px' fontSize='11px' clickAble={false}  />}
        {tagValue !=='none' && size === 'small' && <Tag title={tagValue} width='46px' height='19px' fontSize='7px'  clickAble={false}  />}
      </SlideImage>

      <InformationWrap onClick={onClickGalleryPost}>
        <TitleText size={sizeValue.titleTextSize} >{title}</TitleText>
        <LocationText size={sizeValue.locationTextSize} >{location}</LocationText>
        <Summary size={sizeValue.summaryTextSize} >{summary}</Summary>
        <Rating size={sizeValue.ratingSize} ratingValue={ratingValue}/>
      </InformationWrap>
    
    </GalleryPostWrap>
  )
}
