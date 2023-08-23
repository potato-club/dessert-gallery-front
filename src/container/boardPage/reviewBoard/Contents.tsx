import React from 'react'
import ReviewPost from './ReviewPost'
import styled from 'styled-components'
import { UserReview, ReviewPostValue } from '../../../types/componentsProps'

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

const reviewPostData:ReviewPostValue[] = [
  {
    width : 309,
    height : 580,
    title: '늘봄 케이크',
    imgSrc: 'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg',
    summary: '무료 배송! 레터링 케이크 버터크림 맛',
    reviewList: reviewData
  },
  {
    width : 309,
    height : 580,
    title: '늘봄 케이크',
    imgSrc: 'https://cdn.pixabay.com/photo/2017/10/30/10/07/birthday-2901945_640.jpg',
    summary: '무료 배송! 레터링 케이크 버터크림 맛',
    reviewList: reviewData
  },
  {
    width : 309,
    height : 580,
    title: '늘봄 케이크',
    imgSrc: 'https://cdn.pixabay.com/photo/2015/02/17/15/33/wedding-cake-639516_640.jpg',
    summary: '무료 배송! 레터링 케이크 버터크림 맛',
    reviewList: reviewData
  },
  {
    width : 309,
    height : 580,
    title: '늘봄 케이크',
    imgSrc: 'https://cdn.pixabay.com/photo/2015/10/23/21/01/bake-1003685_640.jpg',
    summary: '무료 배송! 레터링 케이크 버터크림 맛',
    reviewList: reviewData
  },
  {
    width : 309,
    height : 580,
    title: '늘봄 케이크',
    imgSrc: 'https://cdn.pixabay.com/photo/2016/09/30/04/01/wedding-cake-1704427_640.jpg',
    summary: '무료 배송! 레터링 케이크 버터크림 맛',
    reviewList: reviewData
  },
  {
    width : 309,
    height : 580,
    title: '늘봄 케이크',
    imgSrc: 'https://cdn.pixabay.com/photo/2015/03/12/10/37/birthday-669968_640.jpg',
    summary: '무료 배송! 레터링 케이크 버터크림 맛',
    reviewList: reviewData
  },
  {
    width : 309,
    height : 580,
    title: '늘봄 케이크',
    imgSrc: 'https://cdn.pixabay.com/photo/2018/02/08/18/28/strawberry-pie-3140025_640.jpg',
    summary: '무료 배송! 레터링 케이크 버터크림 맛',
    reviewList: reviewData
  }
];

export default function Contents() {
  return (
    <Wrap>
      {
        reviewPostData.map((e)=>(
        <ReviewPost 
          key={e.imgSrc}
          width={e.width} 
          height={e.height} 
          title={e.title}
          imgSrc={e.imgSrc}
          summary={e.summary}
          reviewList={reviewData}
        />))
      }
        
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;