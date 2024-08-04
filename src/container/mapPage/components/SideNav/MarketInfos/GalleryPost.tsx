import React, { useMemo } from 'react'
import { GalleryPostWrap, TitleText, InformationWrap,LocationText, Summary, TextWrap } from './GalleryPost.style'
import SlideImage from '../../../../../components/SlideImage/SlideImage'
import Tag from '../../../../../components/Tag'
import Rating from '../../../../../components/Rating'
import { galleryPostValue, galleryPostSizeValue } from '../../../../../types/componentsProps'


export default function GalleryPost({storeId, height=444, width,location,imgArray,ratingValue,summary,size='big', tagValue='none', bookmark, onBookmark ,title, margin="8px"}:galleryPostValue) {
  const sizeValue:galleryPostSizeValue = useMemo(() => {
      return {
        titleTextSize: '12px',
        locationTextSize: '12px',
        summaryTextSize: '8px',
        ratingSize: "medium",
        textPadding: "8px 16px"
      };
  }, []);

  const onClickGalleryPost = ()=>{
    window.location.href  = `/galleryBoard/${storeId}`
  }

  return (
    <GalleryPostWrap width={104} height={height} margin={margin}>
      <SlideImage storeId={storeId} srcArray={imgArray} width={104} size={size} height={94} bookmark={bookmark} onBookmark={onBookmark} borderRadius={true}>
        {tagValue !=='none' && size === 'big' && <Tag title={tagValue} width='78px' height='30px' fontSize='12px' clickAble={false}  />}
        {tagValue !=='none' && size === 'medium' && <Tag title={tagValue} width='73px' height='28px' fontSize='11px' clickAble={false}  />}
        {tagValue !=='none' && size === 'small' && <Tag title={tagValue} width='46px' height='19px' fontSize='7px'  clickAble={false}  />}
      </SlideImage>

      <InformationWrap textPadding={sizeValue.textPadding} onClick={onClickGalleryPost}>
        <TextWrap>
          <TitleText size={sizeValue.titleTextSize} >{title}</TitleText>
          <Summary size={size} textSize={sizeValue.summaryTextSize} >{summary}</Summary>
        </TextWrap>
        {ratingValue !== "-1" && <Rating size={sizeValue.ratingSize} ratingValue={ratingValue}/>}
      </InformationWrap>
    
    </GalleryPostWrap>
  )
}
