import React from 'react'
import { MiddleWrap, Contents, InformationWrap, ReviewPostWrap, TitleText, StoreWrap, StoreInfo, Text, StoreInfoTextWrap, AddressText, Background } from './RecentReviews.style'
import SlideImage from '../../../components/SlideImage/SlideImage'
import Rating from '../../../components/Rating'
import type { recentReviewListProps} from '../../../types/componentsProps'
import Tag from '../../../components/Tag'
import Image from 'next/image'
import defaultPhoto from '../../../../public/image/defaultPhoto.png'
import Logo from "../../../../public/svg/common/logo.svg";



function RecentReviews({height,width,imgSrc,reviewList,storeId,address,title}: recentReviewListProps) {
  const onClickMoreButton = () => {
    window.location.href  = `/galleryBoard/${storeId}`
  }
  console.log("RecentReviews", height,width,imgSrc,reviewList,storeId,address,title)
  return (
    <ReviewPostWrap width={width} height={height}>
      {reviewList[0]?.fileUrl && <SlideImage srcArray={reviewList[0]?.fileUrl ? [reviewList[0]?.fileUrl] : [defaultPhoto]} width={width} height={width} bookmark={false} moveBtnType='none' />}
      {!reviewList[0]?.fileUrl && <Background><Logo width={250} height={250}/></Background>}
      <InformationWrap>
        <Contents>{reviewList[0].content}</Contents>
        <MiddleWrap>
          <TitleText>{reviewList[0].nickname}</TitleText>
          <Rating size='small' ratingValue={String(reviewList[0].score)}/>
        </MiddleWrap>
        <StoreWrap>
          <StoreInfo>
            <StoreInfo>
              <Text size='9px' bold>{title}</Text>
              <AddressText size='7px'>{address}</AddressText>
            </StoreInfo>
            <Tag height='18px' width='73px' title='더보기' clickAble={true} hoverCss={true} fontSize='7px' key={storeId} onClickHandler={onClickMoreButton} />
          </StoreInfo>
          <Background>
            {
              imgSrc !== null
              ? <Image width={72} height={72} src={imgSrc}/>
              : <Logo  width={72} height={72}/>
            }
            
          </Background>
        </StoreWrap>
      </InformationWrap>
    </ReviewPostWrap>
  )
}

export default RecentReviews

