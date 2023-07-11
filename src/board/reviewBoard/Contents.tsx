import React from 'react'
import ReviewPost from './ReviewPost'
import styled from 'styled-components'
import { UserReview } from '../../types/componentsProps'

const reviewData:UserReview[] = [
  {
    userId: '굿굿',
    date: new Date(2023, 5, 1),
    rating: '4.8',
    contents: '푹신한 시트와 진한 버터향이 좋아서 자주 시켜요! 제품 퀄리티도 고급스러워서 선물용으로 딱이에요!' 
  },
  {
    userId: '리뷰러',
    date: new Date(2023, 5, 1),
    rating: '4.8',
    contents: '어버이날 선물용으로 급하게 구매했는데빠르게 배송해주셔서 정말 감사합니다ㅜ 너무 좋...' 
  }
]

export default function Contents() {
  return (
    <Wrap>
        <ReviewPost 
          width={309} 
          height={580} 
          title='늘봄 케이크'
          imgSrc='https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg'
          summary='무료 배송! 레터링 케이크 버터크림 맛'
          reviewList={reviewData}
        />
        <ReviewPost 
          width={309} 
          height={580} 
          title='늘봄 케이크'
          imgSrc='https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg'
          summary='무료 배송! 레터링 케이크 버터크림 맛'
          reviewList={reviewData}
        />
        <ReviewPost 
          width={309} 
          height={580} 
          title='늘봄 케이크'
          imgSrc='https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg'
          summary='무료 배송! 레터링 케이크 버터크림 맛'
          reviewList={reviewData}
        />
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;