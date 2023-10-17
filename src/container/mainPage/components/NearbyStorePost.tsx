import React from 'react'
import { NearbyStorePostWrap, TextWrap,Text } from './NearbyStorePost.style'
import Image from 'next/image'
import Rating from '../../../components/Rating'
import Tag from '../../../components/Tag'
import { nearbyStore } from '../../../types/apiTypes'

interface nearbyStoreProps {
  item: nearbyStore
}

function NearbyStorePost({item}: nearbyStoreProps) {


  return (
    <NearbyStorePostWrap>
        <Image objectFit='cover' height={284} width={550}/>
        <TextWrap>
            <Text bold fontSize='45px'>{item.storeName}</Text>
            <Text fontSize='14px'>{item.storeAddress}</Text>
            <Rating size='medium' ratingValue={item.score}/>
            <Tag width='130px' height='32px' clickAble={true} title='보러가기' hoverCss={true} margin='8px 0 0 0' fontSize='11px' onClickHandler={()=>alert('click')}/>
        </TextWrap>
    </NearbyStorePostWrap>
  )
}

export default NearbyStorePost