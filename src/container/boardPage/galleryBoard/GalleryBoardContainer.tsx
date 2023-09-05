import React, {useState, useEffect} from 'react'
import { Wrapper } from './GalleryBoardContainer.style'
import BoardTop from '../boardComponents/BoardTop'
import BoardOption from '../boardComponents/boardFilterOption/BoardOption'
import Contents from './Contents'
import TopTitleImage from './../../../public/assets/galleryboard/TopTitleImage.png'
import { useGetStoreBoardListdData } from '../../../hooks/useGetStoreBoardList'
import type { selectOrder } from '../../../types/componentsProps'
import { boardOptionData } from '../../../types/componentsData'
import type { galleryBoardContentsList } from '../../../types/apiTypes'
import ToastMessage from '../../../components/ToastMessage'

function GalleryBoardContainer() {
  const [pageCount, setPageCount] = useState<number>(1)
  const [orderOption, setOrderOption] = useState<selectOrder>({
    kor: '팔로워순',
    eng: 'FOLLOWER'
  })
  const [optionData, setOptionData] = useState<boardOptionData>({
    location: '',
    selectSearchWord: [],
  })

  useEffect(()=>{}, [orderOption.eng, optionData.location, optionData.selectSearchWord,pageCount])

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
          setPageCount(prev=>prev+1)
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

  }, [hasNextPage, isFetchingNextPage, fetchNextPage, data, status]);


  if(status === "success"){
    console.log("데이터 판별 여부 확인 중: !data.pages[0]", !data.pages[0])
  }


  return (
    <Wrapper>
        <BoardTop title='가게 게시판' decription='다양한 가게의 게시물을 볼 수 있는 가게 게시판입니다.' imgSrc={''}/>
        <BoardOption orderOption={orderOption} setOrderOption={setOrderOption} optionData={optionData} setOptionData={setOptionData} setPageCount={setPageCount} />
        {status === "loading" && <ToastMessage messageString='불러오는 중...' timer={5000}/>}
        {status === "error" && <p>error</p>}
        {status === "success" && data.pages[pageCount-1].length !==0 && <Contents data={data.pages} />}
        {status === "success" && data.pages[pageCount-1].length ===0 && <ToastMessage messageString='더이상 불러올 가게 정보가 없습니다.' timer={5000}/>}
        
    </Wrapper>
  )
}

export default GalleryBoardContainer