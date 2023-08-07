import React from 'react'
import GalleryPost from './GalleryPost'
import styled from 'styled-components'
import { galleryPostValue } from '../../../types/componentsProps';

const imgSrc = [
  'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/09/11/11/47/cake-3669245_640.jpg'
];

const data:galleryPostValue[] = [{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
  onBookmark: true,
  ratingValue: '4.8',
  title: '도시락박스',
  size: 'big',
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
  size: 'big',
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
  size: 'big',
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
  size: 'big',
  tagValue: 'NEW!'
},
{
  width: 304,
  height: 444,
  imgArray: imgSrc,
  location: '서울시 강서구 곰달레길 12',
  summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다. 맛있다.',
  onBookmark: true,
  ratingValue: '4.8',
  title: '늘봄 케이크',
}]

export default function Contents() {
  return (
    <Wrap>
      {data.map((e,idx)=>(
        <GalleryPost 
        key={idx}
        width={e.width} 
        height={e.height} 
        imgArray={e.imgArray} 
        location={e.location} 
        onBookmark={e.onBookmark} 
        ratingValue={e.ratingValue} 
        summary={e.summary} 
        title={e.title} 
        size={e.size} 
        tagValue={e.tagValue}
        />
      ))}
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;