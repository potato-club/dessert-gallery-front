import React from 'react'
import GalleryPost from '../../boardPage/galleryBoard/GalleryPost'
import { PostWrap } from './FeedSwitcher.style'
import { resGalleryPost } from '../../../types/apiTypes'

interface contentsProps {
  contents: resGalleryPost[],
  isGuest: boolean ;
}

export default function FeedRecentGallery({contents, isGuest}: contentsProps) {
  return (
    <PostWrap>
          {
              contents.slice(0,6).map((e:resGalleryPost) => (
                <GalleryPost
                  key={e.id}
                  width={184}
                  height={270}
                  imgArray={[e.fileUrl]}
                  location={e.address}
                  onBookmark={e.followId === null ? false: true} 
                  ratingValue={e.score}
                  summary={e.content}
                  title={e.name}
                  size={'small'}
                  tagValue={Number(e.score) > 4.5 ? "HOT": "none"}
                  storeId={e.id}
                  bookmark={isGuest? false:true}/> 
              ))
          }
        </PostWrap>
  )
}
