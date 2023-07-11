import React from 'react'
import { ReviewPostWrap, TitleText, InformationWrap, Summary} from './ReviewPost.style'
import SlideImage from '../../components/SlideImage/SlideImage'
import Rating from '../../components/Rating'
import Tag from '../../components/Tag'
import { ReviewPostValue } from '../../types/componentsProps'


export default function ReviewPost({width,height,title, imgSrc,summary,  reviewList}:ReviewPostValue) {
  return (
    <ReviewPostWrap width={width} height={height}>
      
      <SlideImage srcArray={[imgSrc]} width={width} height={height/10*4} bookmark={false} moveBtnType='none' />

      <InformationWrap>
        <TitleText size='13px'>{title}</TitleText>
        <Summary size='15px'>{summary}</Summary>
      </InformationWrap>
    
      {/* <ReviewWrap>
        <TopText >
          <UserIdText>{reviewList[0].userId}</UserIdText>
          <DateText>{reviewList[0].date}</DateText>
          <Rating size='medium' ratingValue={reviewList[0].rating}/>
        </TopText>
        <ContentsText>{reviewList[0].contents}</ContentsText>
      </ReviewWrap>

      <ReviewWrap>
        <TopText >
          <UserIdText>{reviewList[1].userId}</UserIdText>
          <DateText>{reviewList[1].date}</DateText>
          <Rating size='medium' ratingValue={reviewList[1].rating}/>
        </TopText>
        <ContentsText>{reviewList[1].contents}</ContentsText>
      </ReviewWrap> */}

      <Tag width='164px' height='32px' title='더보기' fontSize='12px' clickAble={true} hoverCss={true} onClickHandler={()=>{alert('click!')}}/>

    </ReviewPostWrap>
  )
}
