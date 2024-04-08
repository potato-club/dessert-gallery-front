import React, { useMemo } from 'react'
import { SlideImgBookmarkValue } from '../../types/componentsProps'
import { OnStar, OffStar } from '../../../public/svg';
import { BookmarkOnWrap, BookmarkOffWrap,BookmarkOnAbsoluteWrap,BookmarkOffAbsoluteWrap } from './Follow.style';

export default function Follow({storeId,onBookmark, size, absolute=false, onClickBookmark}:SlideImgBookmarkValue) {
  const svgSize = useMemo(() => {
    if (size === "small") {
      return 23;
    } else if (size === 'medium') {
      return 36;
    } else {
      return 38; // 기본값 설정
    }
  }, [size]);

  return absolute? (
    <div>
      {
        onBookmark
        ? (
            <BookmarkOnAbsoluteWrap sizeValue={svgSize} onClick={()=> onClickBookmark(storeId)}>
              <OnStar
                width={svgSize}
                height={svgSize}
                />
            </BookmarkOnAbsoluteWrap> 
            )
        : (
            <BookmarkOffAbsoluteWrap sizeValue={svgSize}  onClick={()=> onClickBookmark(storeId)} >
              <OffStar
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
            <BookmarkOnWrap sizeValue={svgSize} onClick={()=> onClickBookmark(storeId)}>
              <OnStar
                width={svgSize}
                height={svgSize}
                />
            </BookmarkOnWrap> 
            )
        : (
            <BookmarkOffWrap sizeValue={svgSize}  onClick={()=> onClickBookmark(storeId)} >
              <OffStar
                width={svgSize}
                height={svgSize}
                />
            </BookmarkOffWrap>
          )
      }
    </div>
  )
}
