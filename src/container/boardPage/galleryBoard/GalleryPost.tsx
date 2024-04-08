import React, { useMemo } from 'react'
import { GalleryPostWrap, TitleText, InformationWrap,LocationText, Summary, TextWrap } from './GalleryPost.style'
import SlideImage from '../../../components/SlideImage/SlideImage'
import Tag from '../../../components/Tag'
import Rating from '../../../components/Rating'
import { galleryPostValue, galleryPostSizeValue } from '../../../types/componentsProps'


export default function GalleryPost({storeId, height=444, width,location,imgArray,ratingValue,summary,size='big', tagValue='none', bookmark, onBookmark ,title, margin="48px 0"}:galleryPostValue) {
  const sizeValue:galleryPostSizeValue = useMemo(() => {
    if (size === 'medium') {
      return {
        titleTextSize: '17px',
        locationTextSize: '12px',
        summaryTextSize: '12px',
        ratingSize: "medium",
        textPadding: "16px 20px"
      };
    } else if (size === 'small') {
      return {
        titleTextSize: '16px',
        locationTextSize: '10px',
        summaryTextSize: '10px',
        ratingSize: "small",
        textPadding: "10px 12px"
      };
    } else {
      return {
        titleTextSize: '18px',
        locationTextSize: '12px',
        summaryTextSize: '12px',
        ratingSize: "medium",
        textPadding: "16px 20px"
      }; // 기본값 설정
    }
  }, [size]);

  const onClickGalleryPost = ()=>{
    window.location.href  = `/galleryBoard/${storeId}`
  }

  console.log("storeID", storeId)


  return (
    <GalleryPostWrap width={width} height={height} margin={margin}>
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
        {ratingValue !== "-1" && <Rating size={sizeValue.ratingSize} ratingValue={ratingValue}/>}
      </InformationWrap>
    
    </GalleryPostWrap>
  )
}
