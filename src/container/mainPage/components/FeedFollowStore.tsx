import React from 'react'
import GalleryPost from '../../boardPage/galleryBoard/GalleryPost'
import { PostWrap } from './FeedSwitcher.style'
import { followStore } from '../../../types/apiTypes'

interface contentsProps {
  contents: followStore[] ;
}

export default function FeedFollowStore({contents}: contentsProps) {
  return (
    <PostWrap>
          {
              contents.slice(0,6).map((e:followStore, idx:number) => (
                <GalleryPost
                  key={`recGallery${idx}`}
                  width={208}
                  height={320}
                  imgArray={[e.fileUrl]}
                  summary={e.nickname}
                  title={e.storeName}
                  size={'small'}
                  storeId={e.idx} 
                  location={''} ratingValue={''} bookmark={false} onBookmark={false}                  />
              ))
          }
        </PostWrap>
  )
}
