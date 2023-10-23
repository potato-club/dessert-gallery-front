import React from 'react'
import styled from 'styled-components'
import Banner from './components/Banner'
import PopularStore from './components/PopularStore'
import FeedSwitcher from './components/FeedSwitcher'
import NewReview from './components/NewReview'
import NearbyStore from './components/NearbyStore'
import type { resReviewPost } from '../../types/apiTypes'
import { useRecoilValue } from 'recoil';
import { JWTStateAtom } from '../../recoil/login/JWTStateAtom';
import { galleryPostValue } from '../../types/componentsProps'
import MoveToMap from './components/MoveToMap'



function MainPage() {
  const jwtData = useRecoilValue(JWTStateAtom);
  const guest = jwtData.accessToken === '' ? true:false;

  return (
    <MainWrap>
      <Banner/>
      <PopularStore isGuest={guest}/>
      <FeedSwitcher isGuest={guest}/>
      <NewReview/>
      <NearbyStore />
      <MoveToMap/>
    </MainWrap>
  )
}

export default MainPage

const MainWrap = styled.div``