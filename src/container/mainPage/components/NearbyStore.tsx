import React from 'react'
import styled from 'styled-components'
import {NearbyStoreWrap, TitleWrap, TextLogo,SumText  } from './NearbyStore.style'
import NearbyStorePost from './NearbyStorePost'

function NearbyStore() {
  return (
    <NearbyStoreWrap>
      <TitleWrap>
        <TextLogo>FIND!</TextLogo>
        <SumText>내 근처에 무슨 가게가 있을지 궁금하지 않으세요?</SumText>
      </TitleWrap>
      <NearbyStorePost/>
      <NearbyStorePost/>
    </NearbyStoreWrap>
  )
}

export default NearbyStore

