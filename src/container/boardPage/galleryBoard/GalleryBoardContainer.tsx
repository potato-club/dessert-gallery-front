import React, {useState, useEffect} from 'react'
import { Wrapper } from './GalleryBoardContainer.style'
import BoardTop from '../boardComponents/BoardTop'
import BoardOption from '../boardComponents/boardFilterOption/BoardOption'
import Contents from './Contents'
import TopTitleImage from './../../../public/assets/galleryboard/TopTitleImage.png'
import { useGetStoreBoardListdData } from '../../../hooks/useGetStoreBoardList'
import type { selectOrder } from '../../../types/componentsProps'
import { boardOptionData } from '../../../types/componentsData'

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

  return (
    <Wrapper>
        <BoardTop title='가게 게시판' decription='다양한 가게의 게시물을 볼 수 있는 가게 게시판입니다.' imgSrc={''}/>
        <BoardOption orderOption={orderOption} setOrderOption={setOrderOption} optionData={optionData} setOptionData={setOptionData}/>
        <Contents pageCount={pageCount} orderOption={orderOption} optionData={optionData}/>
    </Wrapper>
  )
}

export default GalleryBoardContainer