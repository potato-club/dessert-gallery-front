import React from 'react'
import { SlideImgBookmarkValue } from '../../types/componentsProps'
import { OnBookmark, OffBookmark } from '../../../public/svg';
import { BookmarkOnWrap, BookmarkOffWrap,BookmarkOnAbsoluteWrap,BookmarkOffAbsoluteWrap } from './Bookmark.style';

export default function Bookmark({onBookmark, size, absolute=false, onClickBookmark}:SlideImgBookmarkValue) {
  let svgSize = 38;
  if (size === "small") {
    svgSize = 23;
  } else if(size === 'medium') {
    svgSize = 36;
  }
  return absolute? (
    <div>
      {
        onBookmark
        ? (
            <BookmarkOnAbsoluteWrap sizeValue={svgSize} onClick={onClickBookmark}>
              <OnBookmark
                width={svgSize}
                height={svgSize}
                />
            </BookmarkOnAbsoluteWrap> 
            )
        : (
            <BookmarkOffAbsoluteWrap sizeValue={svgSize}  onClick={onClickBookmark} >
              <OffBookmark
                width={svgSize}
                height={svgSize}
                />
            </BookmarkOffAbsoluteWrap>
          )
      }
    </div>
  ):(
    <div>
      {
        onBookmark
        ? (
            <BookmarkOnWrap sizeValue={svgSize} onClick={onClickBookmark}>
              <OnBookmark
                width={svgSize}
                height={svgSize}
                />
            </BookmarkOnWrap> 
            )
        : (
            <BookmarkOffWrap sizeValue={svgSize}  onClick={onClickBookmark} >
              <OffBookmark
                width={svgSize}
                height={svgSize}
                />
            </BookmarkOffWrap>
          )
      }
    </div>
  )
}
