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
import { useUserState } from '../../hooks/useUser'



function MainPage() {
  const {isGuest} = useUserState();


  return (
    <MainWrap>
      <Banner/>
      <PopularStore isGuest={isGuest}/>
      <FeedSwitcher isGuest={isGuest}/>
      <NewReview/>
      <NearbyStore />
      <MoveToMap/>
    </MainWrap>
  )
}

export default MainPage

const MainWrap = styled.div``