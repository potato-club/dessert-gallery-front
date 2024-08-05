import React from 'react'
import { ReviewPostWrap, TitleText, InformationWrap, Summary, ContentsText, BoxContentsStart, ReviewWrap, Text, TopTextWrap, TagWrap, NoneReview} from './ReviewPost.style'
import SlideImage from '../../../components/SlideImage/SlideImage'
import Rating from '../../../components/Rating'
import Tag from '../../../components/Tag'
import type { ReviewPostValue } from '../../../types/componentsProps'


export default function ReviewPost({storeId, width,height,title, imgSrc,summary, reviewList}:ReviewPostValue) {

  /**차후 분리 */

  let fir = new Date(reviewList[0].createDate);
  let sec = reviewList[1]? new Date(reviewList[1].createDate): null;
  
  let dateToString = sec !== null ?( [`${fir.getFullYear()}-${(fir.getMonth()) + 1}-${fir.getDate()}`,
                                     `${sec.getFullYear()}-${(sec.getMonth()) + 1}-${sec.getDate()}`,])
                                  :([`${fir.getFullYear()}-${(fir.getMonth()) + 1}-${fir.getDate()}`,])

  const onClickMoreButton = () => {
    window.location.href = `/galleryBoard/${storeId}`
  }


  return (
    <ReviewPostWrap width={width} height={height}>
      
      <SlideImage srcArray={[imgSrc]} width={width} height={height/10*4} bookmark={false} moveBtnType='none' />
      <BoxContentsStart>
        <InformationWrap>
          <TitleText size='13px'>{title}</TitleText>
          <Summary size='15px'>{summary}</Summary>

        </InformationWrap>
        {
          reviewList[0]&&
          <ReviewWrap>
            <TopTextWrap >
              <Text size='13px' color='#FF8D00' bold={true}>{reviewList[0].nickname}</Text>
              <Text size='13px' color='#828282' marginRight={true}>{dateToString[0]}</Text>
              <Rating size='medium' ratingValue={String(reviewList[0].score)}/>
            </TopTextWrap>
            <ContentsText size='11px' color='#000000' bold={true}>{reviewList[0].content}</ContentsText>
          </ReviewWrap>
        }
        {
          reviewList[1]?
          (<ReviewWrap>
            <TopTextWrap >
              <Text size='13px' color='#FF8D00' bold={true}>{reviewList[1].nickname}</Text>
              <Text size='13px' color='#828282' marginRight={true}>{dateToString[1]}</Text>
              <Rating size='medium' ratingValue={String(reviewList[1].score)}/>
            </TopTextWrap>
            <ContentsText size='11px' color='#000000' bold={true}>{reviewList[1].content}</ContentsText>
          </ReviewWrap>):
          (<NoneReview/>) 
        }
        <TagWrap>
          <Tag width='164px' height='32px' title='더보기' fontSize='12px' clickAble={true} hoverCss={true} onClickHandler={onClickMoreButton}/>
        </TagWrap>
      </BoxContentsStart>
    </ReviewPostWrap>
  )
}
