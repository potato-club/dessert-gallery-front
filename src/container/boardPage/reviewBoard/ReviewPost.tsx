import React from 'react'
import { ReviewPostWrap, TitleText, InformationWrap, Summary, Box, BoxContentsStart, ReviewWrap, Text, TopTextWrap, TagWrap} from './ReviewPost.style'
import SlideImage from '../../../components/SlideImage/SlideImage'
import Rating from '../../../components/Rating'
import Tag from '../../../components/Tag'
import type { ReviewPostValue } from '../../../types/componentsProps'


export default function ReviewPost({width,height,title, imgSrc,summary,  reviewList}:ReviewPostValue) {
  /**차후 분리 */
  const DateToString = reviewList.map(e=> `${e.date.getFullYear()}-${(e.date.getMonth())+1}-${e.date.getDay()}`)
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
            <Text size='13px' color='#FF8D00' bold={true}>{reviewList[0].userId}</Text>
            <Text size='13px' color='#828282' marginRight={true}>{DateToString[0]}</Text>
            <Rating size='medium' ratingValue={reviewList[0].rating}/>
          </TopTextWrap>
          <Text size='11px' color='#000000' bold={true}>{reviewList[0].contents}</Text>
        </ReviewWrap>

        <ReviewWrap>
          <TopTextWrap >
            <Text size='13px' color='#FF8D00' bold={true}>{reviewList[1].userId}</Text>
            <Text size='13px' color='#828282' marginRight={true}>{DateToString[1]}</Text>
            <Rating size='medium' ratingValue={reviewList[1].rating}/>
          </TopTextWrap>
          <Text size='11px' color='#000000' bold={true}>{reviewList[1].contents}</Text>
        </ReviewWrap> 
        <TagWrap>
          <Tag width='164px' height='32px' title='더보기' fontSize='12px' clickAble={true} hoverCss={true} onClickHandler={()=>{alert('click!')}}/>
        </TagWrap>
      </BoxContentsStart>
    </ReviewPostWrap>
  )
}
