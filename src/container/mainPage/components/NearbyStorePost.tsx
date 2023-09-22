import React from 'react'
import { NearbyStorePostWrap, TextWrap,Text } from './NearbyStorePost.style'
import Image from 'next/image'
import Rating from '../../../components/Rating'
import Tag from '../../../components/Tag'

function NearbyStorePost() {
    const data =  {
        width: 304,
        height: 444,
        imgArray: 'https://cdn.pixabay.com/photo/2018/09/11/11/47/cake-3669245_640.jpg',
        location: '서울시 강서구 곰달레길 12',
        summary: '항상 언제든 늘 봄처럼 따스한 케이크를 드립니다',
        onBookmark: false,
        ratingValue: '4.0',
        title: 'FOL늘봄 케이크',
      }
  return (
    <NearbyStorePostWrap>
        <Image objectFit='cover' height={284} width={550} src={data.imgArray}/>
        <TextWrap>
            <Text bold fontSize='45px'>늘봄 케이크</Text>
            <Text fontSize='14px'>서울시 강서구 곰달레길 12</Text>
            <Text fontSize='12px'>항상 언제든 늘 봄처럼 떠스한 케이크를 드립니다</Text>
            <Rating size='medium' ratingValue='4.5'/>
            <Tag width='130px' height='32px' clickAble={true} title='보러가기' hoverCss={true} margin='8px 0 0 0' fontSize='11px' onClickHandler={()=>alert('click')}/>
        </TextWrap>
    </NearbyStorePostWrap>
  )
}

export default NearbyStorePost