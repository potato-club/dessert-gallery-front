import React, {useState, useEffect} from 'react'
import { Wrapper } from './ReviewBoardContainer.style'
import BoardTop from '../boardComponents/BoardTop'
import { useGetReviewBoardListdData } from '../../../hooks/useGetReviewBoardList'
import BoardOption from '../boardComponents/boardFilterOption/BoardOption'
import type { selectOrder } from '../../../types/componentsProps'
import type { resReviewPost } from '../../../types/apiTypes'
import { boardOptionData } from '../../../types/componentsData'
import ToastMessage from '../../../components/ToastMessage'
import Contents from './Contents'
import { BoardBanner } from '../../../../public/image'

function ReviewBoardContainer() {
  const [pageCount, setPageCount] = useState<number>(1)
  const [orderOption, setOrderOption] = useState<selectOrder>({
    kor: '팔로워순',
    eng: 'FOLLOWER'
  })
  const [optionData, setOptionData] = useState<boardOptionData>({
    location: '',
    selectSearchWord: [],
  })
  const [toast, setToast] = useState<boolean>(false)
  const [resData, setResData] = useState<resReviewPost[][]>([])

  useEffect(()=>{}, [orderOption.eng, optionData.location, optionData.selectSearchWord,pageCount])

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,} = useGetReviewBoardListdData({
      page: pageCount.toString(),
      sortType: orderOption.eng,
      address: optionData.location,
      searchType: optionData.selectSearchWord,
      setToast: setToast,
      setResData: setResData,
      resData: resData
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
    console.log("데이터 판별 여부 확인 중: !data.pages[0]", data)
  }

  return (
    <Wrapper>
        <BoardTop title='후기 게시판' decription='다양한 가게의 후기를 볼 수 있는 가게 게시판입니다.' imgSrc={BoardBanner.src}/>
        <BoardOption orderOption={orderOption} setOrderOption={setOrderOption} optionData={optionData} setOptionData={setOptionData} setPageCount={setPageCount} />
        {status === "loading" && <ToastMessage messageString='불러오는 중...' timer={5000}/>}
        {status === "error" && <p>error</p>}
        {status === "success" && resData.length !== 0 && <Contents data={resData} />}
        {status === "success" && toast && <ToastMessage messageString='더이상 불러올 리뷰 정보가 없습니다.' timer={5000}/>}
    </Wrapper>
  )
}

export default ReviewBoardContainer