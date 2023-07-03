import React from 'react'
import { Wrapper } from './GalleryBoardContainer.style'
import BoardTop from '../boardComponents/BoardTop'
import BoardOption from '../boardComponents/boardFilterOption/BoardOption'
import Contents from './Contents'
import TopTitleImage from './../../../public/assets/galleryboard/TopTitleImage.png'

function GalleryBoardContainer() {
  return (
    <Wrapper>
        <BoardTop title='가게 게시판' decription='다양한 가게의 게시물을 볼 수 있는 가게 게시판입니다.' imgSrc={TopTitleImage}/>
        <BoardOption/>
        <Contents/>
    </Wrapper>
  )
}

export default GalleryBoardContainer