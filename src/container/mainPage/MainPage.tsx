import React from 'react'
import styled from 'styled-components'
import Banner from './components/Banner'
import PopularStore from './components/PopularStore'
import FeedSwitcher from './components/FeedSwitcher'
import NewReview from './components/NewReview'
import NearbyStore from './components/NearbyStore'

import { galleryPostValue } from '../../types/componentsProps'

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
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
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


function MainPage() {
  return (
    <MainWrap>
      <Banner/>
      <PopularStore propsData={data}/>
      <FeedSwitcher storeListNew={storeListNew} storeListFol={storeListFol}/>
      <NewReview/>
      <NearbyStore/>
    </MainWrap>
  )
}

export default MainPage

const MainWrap = styled.div``