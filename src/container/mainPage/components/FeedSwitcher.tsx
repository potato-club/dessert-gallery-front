import React, {useState} from 'react'
import Image from 'next/image';
import { smileLogo } from '../../../../public/image';
import { FeedSwitcherWrap,ContentsWrap,NenuWrap,PostWrap,TextLogo,ToggleWrap,TextFollow, TextNEW, MoveStoreListWrap, SummaryText } from './FeedSwitcher.style';
import { galleryPostValue } from '../../../types/componentsProps';
import Tag from '../../../components/Tag';
import GalleryPost from '../../boardPage/galleryBoard/GalleryPost';

interface FeedSwitcherProps {
  storeListNew: galleryPostValue[];
  storeListFol: galleryPostValue[];
}

function FeedSwitcher({storeListNew,storeListFol }:FeedSwitcherProps) {
  const [selected, setSelected] = useState<number>(1);

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
            <TextNEW menu={selected} onClick={()=>onChangeFeed(1)}>새로운 게시글</TextNEW>
            <TextFollow menu={selected} onClick={()=>onChangeFeed(2)}>팔로우한 게시글</TextFollow>
          </ToggleWrap>
          <MoveStoreListWrap>
            <Image alt='' src={smileLogo.src} width={smileLogo.width} height={smileLogo.height}/>
            <SummaryText>더 많은 게시글들을 지금 확인하세요 :)</SummaryText>
            <Tag title='보러가기' height='55px' width='229px' clickAble={true} fontSize='21px' hoverCss={true} onClickHandler={onClickMovegalleryBoard}/>
          </MoveStoreListWrap>
        </NenuWrap>
        <PostWrap>
          {
            selected===1 && (
              storeListNew.map((e,idx)=>(
                <GalleryPost
                  key={idx}
                  width={184}
                  height={270}
                  imgArray={e.imgArray}
                  location={e.location}
                  onBookmark={e.onBookmark}
                  ratingValue={e.ratingValue}
                  summary={e.summary}
                  title={e.title}
                  size={'small'}
                  tagValue={e.tagValue} 
                  storeId={e.storeId}
                  bookmark={true}                />
              ))
            )
          }
          {
            selected===2 && (
              storeListFol.map((e,idx)=>(
                <GalleryPost
                  key={idx}
                  width={184}
                  height={270}
                  imgArray={e.imgArray}
                  location={e.location}
                  onBookmark={e.onBookmark}
                  ratingValue={e.ratingValue}
                  summary={e.summary}
                  title={e.title}
                  size={'small'}
                  tagValue={e.tagValue} storeId={0} bookmark={false}                />
              ))
            )
          }
        </PostWrap>
      </ContentsWrap>
    </FeedSwitcherWrap>
  )
}

export default FeedSwitcher

