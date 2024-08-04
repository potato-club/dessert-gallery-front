import React, { useEffect } from 'react'
import styled from 'styled-components'
import Banner from './components/Banner'
import PopularStore from './components/PopularStore'
import FeedSwitcher from './components/FeedSwitcher'
import NewReview from './components/NewReview'
import NearbyStore from './components/NearbyStore'
import type { resReviewPost } from '../../types/apiTypes'
import { useSetRecoilState } from 'recoil';
import { JWTStateAtom } from '../../recoil/login/JWTStateAtom';
import { galleryPostValue } from '../../types/componentsProps'
import MoveToMap from './components/MoveToMap'
import { useUserState } from '../../hooks/useUser'
import { accountInfoState } from '../../recoil/login/accountInfoStateAtom'
import { getLoginUserInfo } from '../../apis/controller/myPage'



function MainPage() {
  const {isGuest} = useUserState();
  const setAccountInfo = useSetRecoilState(accountInfoState);
  const getUsers = async ()=>{
    if(!isGuest){
      const data = await getLoginUserInfo();
      setAccountInfo({
        isLogin: true,
        nickname: data.nickname,
        loginType: data.loginType,
        userRole: data.userRole,
        storeId: data.storeId,
        fileName: data.fileName,
        fileUrl: data.fileUrl
      })
    }else{
      setAccountInfo({
        isLogin: false,
        nickname: null,
        loginType: null,
        userRole: null,
        storeId: null,
        fileName:null,
        fileUrl: null
      })
    }
  }

  useEffect(()=>{
    getUsers()
  },[isGuest])

  return (
    <MainWrap>
      <Banner/>
      <PopularStore/>
      <FeedSwitcher/>
      <NewReview/>
      <NearbyStore />
      <MoveToMap/>
    </MainWrap>
  )
}

export default MainPage

const MainWrap = styled.div`
`