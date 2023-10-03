import React from 'react'
import styled from 'styled-components'
import Banner from './components/Banner'
import PopularStore from './components/PopularStore'
import FeedSwitcher from './components/FeedSwitcher'
import NewReview from './components/NewReview'
import NearbyStore from './components/NearbyStore'
import type { resReviewPost } from '../../types/apiTypes'

import { galleryPostValue } from '../../types/componentsProps'
import MoveToMap from './components/MoveToMap'

const imgSrc = [
  'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/09/11/11/47/cake-3669245_640.jpg'
];

const imgSrc2 = [
  'https://cdn.pixabay.com/photo/2016/11/29/11/38/cake-1869227_640.jpg',
  'https://cdn.pixabay.com/photo/2016/11/18/15/46/birthday-1835443_640.jpg',
  'https://cdn.pixabay.com/photo/2020/02/29/15/20/cake-4890393_640.jpg'
]

const data:galleryPostValue[] = [{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다 가장 긴 문장이란 어떤 것을 의미하는지요 ㅎ하하하 제대로 보이긴 하는자ㅣ?>',
  onBookmark: true,
  ratingValue: '4.8',
  title: '도시락박스',
  size: 'medium',
  tagValue: 'HOT!'
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: false,
  size: 'medium',
  ratingValue: '4.0',
  title: '늘봄 케이크',
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: true,
  ratingValue: '4.8',
  title: '하늘 케이크',
  size: 'medium',
  tagValue: 'NEW!'
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: true,
  ratingValue: '4.8',
  title: '늘봄 케이크',
  size: 'medium',
  tagValue: 'NEW!'
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: true,
  ratingValue: '4.8',
  title: '늘봄 케이크',
  size: 'medium',
  tagValue: 'NEW!'
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: false,
  ratingValue: '4.0',
  size: 'medium',

  title: '늘봄 케이크',
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: true,
  ratingValue: '4.8',
  title: '하늘 케이크',
  size: 'medium',
  tagValue: 'NEW!'
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: true,
  ratingValue: '4.8',
  title: '늘봄 케이크',
  size: 'medium',
  tagValue: 'NEW!'
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: true,
  ratingValue: '4.8',
  title: '인덱스 마지막!',
  size: 'medium',
  tagValue: 'NEW!'
},]


const storeListNew:galleryPostValue[] = [{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: true,
  ratingValue: '4.8',
  title: '도시락박스',
  tagValue: 'HOT!'
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: false,
  ratingValue: '4.0',
  title: '늘봄 케이크',
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: true,
  ratingValue: '4.8',
  title: '하늘 케이크',
  tagValue: 'NEW!'
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: true,
  ratingValue: '4.8',
  title: '늘봄 케이크',
  tagValue: 'NEW!'
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: true,
  ratingValue: '4.8',
  title: '늘봄 케이크',
  tagValue: 'NEW!'
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: false,
  ratingValue: '4.0',
  title: '늘봄 케이크',
},]

const storeListFol:galleryPostValue[] = [{
  width: 304,
  height: 444,
  imgArray: imgSrc2,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: true,
  ratingValue: '4.8',
  title: 'FOL도시락박스',
  tagValue: 'HOT!'
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc2,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: false,
  ratingValue: '4.0',
  title: 'FOL늘봄 케이크',
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc2,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: true,
  ratingValue: '4.8',
  title: 'FOL하늘 케이크',
  tagValue: 'NEW!'
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc2,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: true,
  ratingValue: '4.8',
  title: 'FOL늘봄 케이크',
  tagValue: 'NEW!'
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc2,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: true,
  ratingValue: '4.8',
  title: 'FOL늘봄 케이크',
  tagValue: 'NEW!'
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc2,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: false,
  ratingValue: '4.0',
  title: 'FOL늘봄 케이크',
},]


const recReviewData: resReviewPost[] = [
  {
    id: 1,
    storeId: 1,
    storeName: "동균 가게",
    content: "안녕하세요 새로 가입한 동균 가게입니다. 맛보장 합니다 ㅎㅎ",
    fileUrl: "https://dessert-gallery.s3.ap-northeast-2.amazonaws.com/26c8478d-f050-4b30-881d-b4b0617bab01-%E1%84%83%E1%85%A9%E1%86%BC%E1%84%80%E1%85%B2%E1%86%AB.jpg",
    address: "경기 군포시 산본로323번길 20-25 우정빌딩 303, 304호 위치합니다",
    name: "ManagerTest1",
    reviewList: [
      {
        content: "이렇",
        createDate: "2023-09-07T23:17:45.70922",
        nickname: "ManagerTest1",
        score: 5,
        fileName: "9485ae31-a6e8-4cdd-bff6-a152479a1d97-동균.jpg",
        fileUrl: "https://dessert-gallery.s3.ap-northeast-2.amazonaws.com/9485ae31-a6e8-4cdd-bff6-a152479a1d97-%E1%84%83%E1%85%A9%E1%86%BC%E1%84%80%E1%85%B2%E1%86%AB.jpg"
      },
      {
        content: "abcabcabcabcabc abcabcabcabcabc abcabcabcabcabc abcabcabcabcabc",
        createDate: "2023-09-07T23:14:31.163722",
        nickname: "ManagerTest1",
        score: 5,
        fileName: "b46b7b4e-2ad2-43d0-939d-a959987d3d39-동균.jpg",
        fileUrl: "https://dessert-gallery.s3.ap-northeast-2.amazonaws.com/b46b7b4e-2ad2-43d0-939d-a959987d3d39-%E1%84%83%E1%85%A9%E1%86%BC%E1%84%80%E1%85%B2%E1%86%AB.jpg"
      }
    ]
  },
  {
    id: 2,
    storeId: 2,
    storeName: "윤윤 도시락 케이크",
    content: "신선한 유기농 크림치즈와 동물성 생크림 사용",
    fileUrl: "https://dessert-gallery.s3.ap-northeast-2.amazonaws.com/46387989-bf5e-45f6-bdcb-4865b29ffa29-%EC%9C%A4%EB%AF%B8.jpg",
    address: "서울 양천구 오목로",
    name: "해피빈",
    reviewList: [
      {
        content: "리뷰 2개... 메",
        createDate: "2023-09-12T19:02:35.22534",
        nickname: "해피빈",
        score: 4.7,
        fileName: "2dafd8bb-3ae0-4878-bd77-9b6d8242c1fe-cupcakes-690040_1920.jpg",
        fileUrl: "https://dessert-gallery.s3.ap-northeast-2.amazonaws.com/2dafd8bb-3ae0-4878-bd77-9b6d8242c1fe-cupcakes-690040_1920.jpg"
      },
      {
        content: "일단 디자인보다 진짜 맛있어요",
        createDate: "2023-09-12T19:02:06.65517",
        nickname: "해피빈",
        score: 4.7,
        fileName: "f65a7ae6-9539-4c43-a4d5-62fafc459486-cupcakes-690040_1920.jpg",
        fileUrl: "https://dessert-gallery.s3.ap-northeast-2.amazonaws.com/f65a7ae6-9539-4c43-a4d5-62fafc459486-cupcakes-690040_1920.jpg"
      }
    ]
  },
  {
    id: 1,
    storeId: 1,
    storeName: "동균 가게",
    content: "안녕하세요 새로 가입한 동균 가게입니다. 맛보장 합니다 ㅎㅎ",
    fileUrl: "https://dessert-gallery.s3.ap-northeast-2.amazonaws.com/26c8478d-f050-4b30-881d-b4b0617bab01-%E1%84%83%E1%85%A9%E1%86%BC%E1%84%80%E1%85%B2%E1%86%AB.jpg",
    address: "경기 군포시 산본로323번길 20-25 우정빌딩 303, 304호",
    name: "ManagerTest1",
    reviewList: [
      {
        content: "이렇",
        createDate: "2023-09-07T23:17:45.70922",
        nickname: "ManagerTest1",
        score: 5,
        fileName: "9485ae31-a6e8-4cdd-bff6-a152479a1d97-동균.jpg",
        fileUrl: "https://dessert-gallery.s3.ap-northeast-2.amazonaws.com/9485ae31-a6e8-4cdd-bff6-a152479a1d97-%E1%84%83%E1%85%A9%E1%86%BC%E1%84%80%E1%85%B2%E1%86%AB.jpg"
      },
      {
        content: "abcabcabcabcabc abcabcabcabcabc abcabcabcabcabc abcabcabcabcabc",
        createDate: "2023-09-07T23:14:31.163722",
        nickname: "ManagerTest1",
        score: 5,
        fileName: "b46b7b4e-2ad2-43d0-939d-a959987d3d39-동균.jpg",
        fileUrl: "https://dessert-gallery.s3.ap-northeast-2.amazonaws.com/b46b7b4e-2ad2-43d0-939d-a959987d3d39-%E1%84%83%E1%85%A9%E1%86%BC%E1%84%80%E1%85%B2%E1%86%AB.jpg"
      }
    ]
  },
  {
    id: 2,
    storeId: 2,
    storeName: "윤윤 도시락 케이크",
    content: "신선한 유기농 크림치즈와 동물성 생크림 사용",
    fileUrl: "https://dessert-gallery.s3.ap-northeast-2.amazonaws.com/46387989-bf5e-45f6-bdcb-4865b29ffa29-%EC%9C%A4%EB%AF%B8.jpg",
    address: "서울 양천구 오목로",
    name: "해피빈",
    reviewList: [
      {
        content: "리뷰 2개... 메",
        createDate: "2023-09-12T19:02:35.22534",
        nickname: "해피빈",
        score: 4.7,
        fileName: "2dafd8bb-3ae0-4878-bd77-9b6d8242c1fe-cupcakes-690040_1920.jpg",
        fileUrl: "https://dessert-gallery.s3.ap-northeast-2.amazonaws.com/2dafd8bb-3ae0-4878-bd77-9b6d8242c1fe-cupcakes-690040_1920.jpg"
      },
      {
        content: "일단 디자인보다 진짜 맛있어요",
        createDate: "2023-09-12T19:02:06.65517",
        nickname: "해피빈",
        score: 4.7,
        fileName: "f65a7ae6-9539-4c43-a4d5-62fafc459486-cupcakes-690040_1920.jpg",
        fileUrl: "https://dessert-gallery.s3.ap-northeast-2.amazonaws.com/f65a7ae6-9539-4c43-a4d5-62fafc459486-cupcakes-690040_1920.jpg"
      }
    ]
  }
];


function MainPage() {
  return (
    <MainWrap>
      <Banner/>
      <PopularStore propsData={data}/>
      <FeedSwitcher storeListNew={storeListNew} storeListFol={storeListFol}/>
      <NewReview recentReviewList={recReviewData}/>
      <NearbyStore/>
      <MoveToMap/>
    </MainWrap>
  )
}

export default MainPage

const MainWrap = styled.div``