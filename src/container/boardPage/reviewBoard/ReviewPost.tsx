import React from 'react'
import { ReviewPostWrap, TitleText, InformationWrap, Summary, Box, BoxContentsStart, ReviewWrap, Text, TopTextWrap, TagWrap} from './ReviewPost.style'
import SlideImage from '../../../components/SlideImage/SlideImage'
import Rating from '../../../components/Rating'
import Tag from '../../../components/Tag'
import type { ReviewPostValue } from '../../../types/componentsProps'


export default function ReviewPost({width,height,title, imgSrc,summary, reviewList}:ReviewPostValue) {
  console.log("힝",reviewList[0].createdDate)
  /**차후 분리 */
  let dateToString;
  if (reviewList && reviewList[0] && reviewList[0].createdDate) {
    dateToString = reviewList.map(e => `${e.createdDate.getFullYear()}-${(e.createdDate.getMonth()) + 1}-${e.createdDate.getDate()}`);
    // ...
  }

  return (
    <ReviewPostWrap width={width} height={height}>
      
      <SlideImage srcArray={[imgSrc]} width={width} height={height/10*4} bookmark={false} moveBtnType='none' />
      <BoxContentsStart>
        <InformationWrap>
          <TitleText size='13px'>{title}</TitleText>
          <Summary size='15px'>{summary}</Summary>

        </InformationWrap>
        <ReviewWrap>
          <TopTextWrap >
            <Text size='13px' color='#FF8D00' bold={true}>{reviewList[0].nickname}</Text>
            {/* <Text size='13px' color='#828282' marginRight={true}>{dateToString[0]}</Text> */}
            <Rating size='medium' ratingValue={String(reviewList[0].score)}/>
          </TopTextWrap>
          <Text size='11px' color='#000000' bold={true}>{reviewList[0].content}</Text>
        </ReviewWrap>

        <ReviewWrap>
          <TopTextWrap >
            <Text size='13px' color='#FF8D00' bold={true}>{reviewList[1].nickname}</Text>
            {/* <Text size='13px' color='#828282' marginRight={true}>{dateToString[1]}</Text> */}
            <Rating size='medium' ratingValue={String(reviewList[1].score)}/>
          </TopTextWrap>
          <Text size='11px' color='#000000' bold={true}>{reviewList[1].content}</Text>
        </ReviewWrap> 
        <TagWrap>
          <Tag width='164px' height='32px' title='더보기' fontSize='12px' clickAble={true} hoverCss={true} onClickHandler={()=>{alert('click!')}}/>
        </TagWrap>
      </BoxContentsStart>
    </ReviewPostWrap>
  )
}
