import React from 'react'
import { Wrapper } from './GalleryBoardContainer.style'
import BoardTop from '../boardComponents/BoardTop'
import BoardOption from '../boardComponents/boardFilterOption/BoardOption'

function GalleryBoardContainer() {
  return (
    <Wrapper>
        <BoardTop title='가게 게시판' decription='가게 게시판의 설명과 어울리는 베이커리 사진을 함께 두면 배너로 좋을 것 같다.' imgSrc=''/>
        <BoardOption/>
    </Wrapper>
  )
}

export default GalleryBoardContainer