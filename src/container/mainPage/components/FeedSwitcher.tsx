import React, {useState} from 'react'
import Image from 'next/image';
import { smileLogo } from '../../../../public/image';
import { FeedSwitcherWrap,ContentsWrap,NenuWrap,PostWrap,TextLogo,ToggleWrap,TextFollow, TextNEW, MoveStoreListWrap, SummaryText } from './FeedSwitcher.style';
import { galleryPostValue } from '../../../types/componentsProps';
import Tag from '../../../components/Tag';
import { useGetRecentStores,useGetFollowBoardList } from '../../../hooks/useGetMain';
import FeedFollowStore from './FeedFollowStore';
import FeedRecentGallery from './FeedRecentGallery';
import FeedPrev from './FeedPrev';
import FeedGuest from './FeedGuest';

interface FeedSwitcherProps {
  storeListNew: galleryPostValue[];
  storeListFol: galleryPostValue[];
}

function FeedSwitcher({storeListNew,storeListFol }:FeedSwitcherProps) {
  const [selected, setSelected] = useState<number>(1);
  const { data: recentStores, isLoading: recentStoresLoading, error: recentStoresError } = useGetRecentStores();
  const { data: followBoardList, isLoading: followBoardListLoading, error: followBoardListError } = useGetFollowBoardList();
  const guest = false;

  console.log("check: ", recentStores, recentStoresLoading, recentStoresError)
  console.log("check 팔로우한 가게: ", followBoardList, followBoardListLoading, followBoardListError)

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
            <TextFollow menu={selected} onClick={()=>onChangeFeed(2)}>팔로우한 가게</TextFollow>
          </ToggleWrap>
          <MoveStoreListWrap>
            <Image alt='' src={smileLogo.src} width={smileLogo.width} height={smileLogo.height}/>
            <SummaryText>더 많은 가게들을 지금 확인하세요 :)</SummaryText>
            <Tag title='보러가기' height='55px' width='229px' clickAble={true} fontSize='21px' hoverCss={true} onClickHandler={onClickMovegalleryBoard}/>
          </MoveStoreListWrap>
        </NenuWrap>
        {(recentStoresLoading || followBoardListLoading) && <FeedPrev/>}
        {selected === 1 && recentStoresLoading === false &&(<FeedRecentGallery contents={recentStores}/>)}
        {selected === 2 && guest &&(<FeedGuest/>)}
        {selected === 2 && !guest && followBoardListLoading === false &&(<FeedFollowStore contents={followBoardList}/>)}
      </ContentsWrap>
    </FeedSwitcherWrap>
  )
}

export default FeedSwitcher

