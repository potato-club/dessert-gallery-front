import React from 'react'
import GalleryPost from '../../boardPage/galleryBoard/GalleryPost'
import { LogoImage, PostWrap, Wrap, InfoText, FollowWrap } from './FeedSwitcher.style'
import { followStore } from '../../../types/apiTypes'
import Tag from '../../../components/Tag';

interface contentsProps {
  contents: followStore[] ;
}

export default function FeedFollowStore({contents}: contentsProps) {

  const onClickMovePage = () => {
    window.location.href = '/galleryBoard'
  }

  return (
    <FollowWrap>
      <PostWrap>
          {
              contents.length>0 &&contents.slice(0,6).map((e:followStore, idx:number) => (
                <GalleryPost
                  key={`recGallery${idx}`}
                  width={208}
                  height={320}
                  imgArray={[e.fileUrl]}
                  summary={e.nickname}
                  title={e.storeName}
                  size={'small'}
                  storeId={e.idx} 
                  location={''} 
                  ratingValue={''}
                  bookmark={false}
                  onBookmark={false}
                />
              ))
          }
      </PostWrap>
          {
            contents.length === 0 && 
            (
              <Wrap>
                <LogoImage/>
                <InfoText>
                  아직 팔로우한 가게가 없어요!
                </InfoText>
                <Tag height='40px' width='240px' title='가게 게시판가기' margin='16px 0' clickAble={true} onClickHandler={onClickMovePage}/>
              </Wrap>
            )
          }
        </FollowWrap>
  )
}
