import React, {useState, useEffect, useRef} from 'react'
import { Wrapper } from './GalleryBoardContainer.style'
import BoardTop from '../boardComponents/BoardTop'
import BoardOption from '../boardComponents/boardFilterOption/BoardOption'
import Contents from './Contents'
import { useGetStoreBoardListdData } from '../../../hooks/useGetStoreBoardList'
import type { selectOrder } from '../../../types/componentsProps'
import { boardOptionData } from '../../../types/componentsData'
import type { resGalleryPost } from '../../../types/apiTypes'
import ToastMessage from '../../../components/ToastMessage'
import { BoardBanner } from '../../../../public/image'
import Bottom from '../boardComponents/Bottom'

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
  const [toast, setToast] = useState<boolean>(false)
  const [resData, setResData] = useState<resGalleryPost[][]>([])
  const observerRef = useRef<HTMLDivElement>(null);

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
      searchType: optionData.selectSearchWord,
      setToast: setToast,
      setResData: setResData,
      resData: resData
    });

  useEffect(() => {
    // Intersection Observer 콜백
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && status === "success") {
        window.scrollTo(0, window.scrollY - 100);
        setPageCount((prev) => prev + 1);
        fetchNextPage();
      }
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };

  }, [hasNextPage, isFetchingNextPage, fetchNextPage, orderOption.eng, optionData.location, optionData.selectSearchWord,pageCount]);



  return (
    <Wrapper>
        <BoardTop title='가게 게시판' decription='다양한 가게의 게시물을 볼 수 있는 가게 게시판입니다.' imgSrc={BoardBanner.src}/>
        <BoardOption orderOption={orderOption} setOrderOption={setOrderOption} optionData={optionData} setOptionData={setOptionData} setPageCount={setPageCount} />
        {status === "loading" && <ToastMessage messageString='불러오는 중...' timer={5000} wrapType={'map'}/>}
        {status === "error" && <p>error</p>}
        {status === "success" &&  resData.length !== 0 && <Contents data={resData} />}
        {status === "success" && toast && <ToastMessage messageString='더이상 불러올 가게 정보가 없습니다.' timer={5000} wrapType={'map'}/>}
        <Bottom observerRef={observerRef}/> 
    </Wrapper>
  )
}

export default GalleryBoardContainer