import React from 'react'
import { SlideImgBookmarkValue } from '../../types/componentsProps'
import { OnBookmark, OffBookmark } from '../../../public/svg';
import { BookmarkOnWrap, BookmarkOffWrap } from './Bookmark.style';

export default function Bookmark({onBookmark, size, onClickBookmark}:SlideImgBookmarkValue) {
  let svgSize = 38;
  if (size === "small") {
    svgSize = 23;
  } else if(size === 'medium') {
    svgSize = 36;
  }
  return (
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
