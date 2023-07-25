import React from 'react'
import { Wrapper } from './ReviewBoardContainer.style'
import BoardTop from '../boardComponents/BoardTop'
import BoardOption from '../boardComponents/boardFilterOption/BoardOption'
import Contents from './Contents'

function ReviewBoardContainer() {
  return (
    <Wrapper>
        <BoardTop title='후기 게시판' decription='다양한 가게의 후기를 볼 수 있는 가게 게시판입니다.' imgSrc={''}/>
        <BoardOption/>
        <Contents/>
    </Wrapper>
  )
}

export default ReviewBoardContainer