import React from 'react';
import { SlideImgBookmarkValue } from '../../types/componentsProps';
import { OnStar, OffStar } from '../../../public/svg';
import { BookmarkOnWrap, BookmarkOffWrap, BookmarkOnAbsoluteWrap, BookmarkOffAbsoluteWrap } from './Follow.style';

function Follow({ storeId, onBookmark, size, absolute = false, onClickBookmark }: SlideImgBookmarkValue) {
  let svgSize = 38;
  if (size === "small") {
    svgSize = 23;
  } else if (size === 'medium') {
    svgSize = 36;
  }

  if (absolute) {
    return (
      <div>
        {onBookmark ? (
          <BookmarkOnAbsoluteWrap sizeValue={svgSize} onClick={() => onClickBookmark(storeId)}>
            <OnStar
              width={svgSize}
              height={svgSize}
            />
          </BookmarkOnAbsoluteWrap>
        ) : (
          <BookmarkOffAbsoluteWrap sizeValue={svgSize} onClick={() => onClickBookmark(storeId)} >
            <OffStar
              width={svgSize}
              height={svgSize}
            />
          </BookmarkOffAbsoluteWrap>
        )}
      </div>
    );
  } else {
    return (
      <div>
        {onBookmark ? (
          <BookmarkOnWrap sizeValue={svgSize} onClick={() => onClickBookmark(storeId)}>
            <OnStar
              width={svgSize}
              height={svgSize}
            />
          </BookmarkOnWrap>
        ) : (
          <BookmarkOffWrap sizeValue={svgSize} onClick={() => onClickBookmark(storeId)} >
            <OffStar
              width={svgSize}
              height={svgSize}
            />
          </BookmarkOffWrap>
        )}
      </div>
    );
  }
}

export default Follow;