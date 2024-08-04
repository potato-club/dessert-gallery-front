import React, {useState} from 'react'
import Image from 'next/image';
import { smileLogo } from '../../../../public/image';
import { FeedSwitcherWrap,ContentsWrap,NenuWrap,PostWrap,TextLogo,ToggleWrap,TextFollow, TextNEW, MoveStoreListWrap, SummaryText } from './FeedSwitcher.style';
import { galleryPostValue, mainComponentsProps } from '../../../types/componentsProps';
import Tag from '../../../components/Tag';
import { useGetRecentStores,useGetFollowBoardList } from '../../../hooks/useGetMain';
import FeedFollowStore from './FeedFollowStore';
import FeedRecentGallery from './FeedRecentGallery';
import FeedPrev from './FeedPrev';
import FeedGuest from './FeedGuest';
import { useLoginUserInfo, useUserState } from '../../../hooks/useUser';
import { accountInfoState } from '../../../recoil/login/accountInfoStateAtom';
import { useRecoilValue } from 'recoil';


interface FeedSwitcherProps {
  storeListNew: galleryPostValue[];
  storeListFol: galleryPostValue[];
}

function FeedSwitcher() {
  const [selected, setSelected] = useState<number>(1);
  const { data: recentStores, isLoading: recentStoresLoading, error: recentStoresError } = useGetRecentStores();
  const {isGuest} = useUserState();
  const accountInfo = useRecoilValue(accountInfoState);


  const onClickMovegalleryBoard = () => {
    window.location.href = '/galleryBoard'
  }

  const onChangeFeed = (n:number) => {
    setSelected(n);
  }


  return (
    <FeedSwitcherWrap>
      <ContentsWrap>
        <NenuWrap>
          <ToggleWrap>
            {
              selected === 1 ? <TextLogo>NEW!</TextLogo> : <TextLogo>FOL!</TextLogo>
            }
            <TextNEW menu={selected} onClick={()=>onChangeFeed(1)}>새로운 가게</TextNEW>
            {accountInfo?.userRole === "USER" && <TextFollow menu={selected} onClick={()=>onChangeFeed(2)}>팔로우한 가게</TextFollow>}
          </ToggleWrap>
          <MoveStoreListWrap>
            <Image alt='' src={smileLogo.src} width={smileLogo.width} height={smileLogo.height}/>
            <SummaryText>더 많은 가게들을 지금 확인하세요 :)</SummaryText>
            <Tag title='보러가기' height='55px' width='229px' clickAble={true} fontSize='21px' hoverCss={true} onClickHandler={onClickMovegalleryBoard}/>
          </MoveStoreListWrap>
        </NenuWrap>
        {selected === 1 &&recentStoresLoading && <FeedPrev/>}
        {selected === 1 && recentStoresLoading === false &&(<FeedRecentGallery userInfo={accountInfo} isGuest={isGuest} contents={recentStores}/>)}
        {selected === 2 && !accountInfo.isLogin &&(<FeedGuest/>)}
        {selected === 2 && accountInfo.isLogin &&(<FeedFollowStore />)}
      </ContentsWrap>
    </FeedSwitcherWrap>
  )
}

export default FeedSwitcher

