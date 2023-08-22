import React from 'react'
import styled from 'styled-components'
import Banner from './components/Banner'
import PopularStore from './components/PopularStore'
import FeedSwitcher from './components/FeedSwitcher'

function MainPage() {
  return (
    <MainWrap>
      <Banner/>
      <PopularStore/>
      <FeedSwitcher/>
    </MainWrap>
  )
}

export default MainPage

const MainWrap = styled.div``