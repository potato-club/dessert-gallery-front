import React, {useEffect} from 'react'
import GalleryPost from './GalleryPost'
import styled from 'styled-components'
import { galleryPostValue } from '../../../types/componentsProps';
import { useGetStoreBoardListdData } from '../../../hooks/useGetStoreBoardList';
import type { galleryBoardContentsValue } from '../../../types/componentsProps';
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

export default function Contents({pageCount,orderOption,optionData}: galleryBoardContentsValue) {

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,} = useGetStoreBoardListdData({
    page: pageCount.toString(),
    sortType: orderOption.eng,
    address: optionData.location,
    searchType: optionData.selectSearchWord
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        // 스크롤 하단에 도달하면 다음 페이지의 데이터를 불러옴
        if (hasNextPage && !isFetchingNextPage) {
          console.log("Before fetchNextPage:", data, hasNextPage, isFetchingNextPage);
          fetchNextPage();
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
    console.log("satus", status)
    console.log("data", data)
    window.removeEventListener("scroll", handleScroll);
    };

  }, [hasNextPage, isFetchingNextPage, fetchNextPage, pageCount, orderOption, optionData, data, status]);


  if(status === "loading"){
    return <ToastMessage messageString='불러오는 중...' timer={5000}/>
  }

  if(status === "error"){
    return <p>error</p>
  }

  if(status === "success"){
    if(data.pages[0] ==! undefined){
      <ToastMessage messageString='더이상 불러올 가게가 없습니다.' timer={5000}/>
    }
    return (
      <Wrap>
        {status === "success" &&  data.pages.map((e,idx)=>(
          <GalleryPost 
          key={e[0].id}
          width={304} 
          height={472} 
          imgArray={[e[0].fileUrl]} 
          location={e[0].address} 
          onBookmark={e[0].bookmarkId !== null ? false: true} 
          ratingValue={e[0].score} 
          summary={e[0].content} 
          title={e[0].name} 
          size={"big"} 
          tagValue={e[0].score > 4.5 ? "HOT": "none"}
          />
        ))}
      </Wrap>
    )
  }
}

const Wrap = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;