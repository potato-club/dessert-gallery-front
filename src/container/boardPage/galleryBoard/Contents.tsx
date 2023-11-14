import React, {useEffect} from 'react'
import GalleryPost from './GalleryPost'
import styled from 'styled-components'
import { useGetStoreBoardListdData } from '../../../hooks/useGetStoreBoardList';
import type { resGalleryPost } from '../../../types/apiTypes';
import ToastMessage from '../../../components/ToastMessage';

const imgSrc = [
  'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/09/11/11/47/cake-3669245_640.jpg'
];

// const data:galleryPostValue[] = [
//  {
//   width: 304,
//   imgArray: imgSrc,
//   location: '서울시 강서구 곰달레길 12',
//   summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
//   ratingValue: '4.8',
//   title: '도시락박스',
//   size: 'big',
//   tagValue: 'HOT!'
// },
// {
//   width: 304,
//   imgArray: imgSrc,
//   location: '서울시 강서구 곰달레길 12',
//   summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
//   ratingValue: '4.0',
//   title: '늘봄 케이크',
// },
// {
//   width: 304,
//   imgArray: imgSrc,
//   location: '서울시 강서구 곰달레길 12',
//   summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
//   ratingValue: '4.8',
//   title: '하늘 케이크',
//   size: 'big',
//   tagValue: 'NEW!'
// },
// {
//   width: 304,
//   imgArray: imgSrc,
//   location: '서울시 강서구 곰달레길 12',
//   summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
//   ratingValue: '4.8',
//   title: '늘봄 케이크',
//   size: 'big',
//   tagValue: 'NEW!'
// },
// {
//   width: 304,
//   imgArray: imgSrc,
//   location: '서울시 강서구 곰달레길 12',
//   summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
//   ratingValue: '4.8',
//   title: '늘봄 케이크',
//   size: 'big',
//   tagValue: 'NEW!'
// },
// {
//   width: 304,
//   imgArray: imgSrc,
//   location: '서울시 강서구 곰달레길 12',
//   summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다. 맛있다.',
//   ratingValue: '4.8',
//   size: 'big',
//   title: '늘봄 케이크',
// }
// ]

export default function Contents({data}: {data: resGalleryPost[][]}) {
  return (
    <Wrap>
      {data.map((el)=>(
        el.map((e: resGalleryPost)=>(
          <GalleryPost 
          storeId={e.id}
          key={e.id}
          width={304} 
          height={460}
          imgArray={[e.fileUrl]} 
          location={e.address} 
          bookmark={true}
          onBookmark={e.followId === null ? false: true} 
          ratingValue={e.score} 
          summary={e.content} 
          title={e.name} 
          size={"big"} 
          tagValue={Number(e.score) > 4.5 ? "HOT": "none"}
          />
        ))
      ))}
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 1100px;
  display: grid;
  grid-template-columns: repeat(3, auto); /* 각 열의 너비를 설정 */
  justify-content: start;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 94px; /* 그리드 아이템 간의 간격 설정 */
`;