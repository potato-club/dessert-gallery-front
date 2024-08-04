import React from 'react'
import styled from 'styled-components'
import {NearbyStoreWrap, TitleWrap, TextLogo,SumText  } from './NearbyStore.style'
import NearbyStorePost from './NearbyStorePost'
import { useGetNearbyStore } from '../../../hooks/useGetMain';
import { nearbyStore } from '../../../types/apiTypes';

function NearbyStore() {

  const {data, isLoading, error} = useGetNearbyStore();

  return (
    <NearbyStoreWrap>
      <TitleWrap>
        <TextLogo>FIND!</TextLogo>
        <SumText>내 근처에 무슨 가게가 있을지 궁금하지 않으세요?</SumText>
      </TitleWrap>
      {!isLoading && (data.slice(0,2).map(
        (e: nearbyStore, idx: number)=> (
          <NearbyStorePost item={e} key={idx}/>
        )
      ))}
    </NearbyStoreWrap>
  )
}

export default NearbyStore

