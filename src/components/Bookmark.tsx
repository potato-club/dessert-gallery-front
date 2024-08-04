import React from "react";
import styled from "styled-components";
import { OnBookmark, OffBookmark } from "../../public/svg";

interface BookmarkPropsType {
  boardId: number;
  onBookmark: boolean;
  size: "big" | "medium" | "small";
  absolute?: boolean;
  onClickBookmark: (storeId: number) => void;
}

const Bookmark = ({
  boardId,
  onBookmark,
  size,
  absolute = false,
  onClickBookmark,
}: BookmarkPropsType) => {
  let svgSize = 38;
  if (size === "small") {
    svgSize = 23;
  } else if (size === "medium") {
    svgSize = 36;
  }
  return absolute ? (
    <div>
      {onBookmark ? (
        <BookmarkOnAbsoluteWrap
          sizeValue={svgSize}
          onClick={() => onClickBookmark(boardId)}
        >
          <OnBookmark width={svgSize} height={svgSize} />
        </BookmarkOnAbsoluteWrap>
      ) : (
        <BookmarkOffAbsoluteWrap
          sizeValue={svgSize}
          onClick={() => onClickBookmark(boardId)}
        >
          <OffBookmark width={svgSize} height={svgSize} />
        </BookmarkOffAbsoluteWrap>
      )}
    </div>
  ) : (
    <div>
      {onBookmark ? (
        <BookmarkOnWrap
          sizeValue={svgSize}
          onClick={() => onClickBookmark(boardId)}
        >
          <OnBookmark width={svgSize} height={svgSize} />
        </BookmarkOnWrap>
      ) : (
        <BookmarkOffWrap
          sizeValue={svgSize}
          onClick={() => onClickBookmark(boardId)}
        >
          <OffBookmark width={svgSize} height={svgSize} />
        </BookmarkOffWrap>
      )}
    </div>
  );
};

export default Bookmark;

const BookmarkOnWrap = styled.div<{ sizeValue: number }>`
  width: ${({ sizeValue }) => `${sizeValue}px`};
  height: ${({ sizeValue }) => `${sizeValue}px`};
  background-color: none;
  cursor: pointer;
`;

const BookmarkOffWrap = styled(BookmarkOnWrap)`
  background-color: none;
`;

const BookmarkOnAbsoluteWrap = styled.div<{ sizeValue: number }>`
  width: ${({ sizeValue }) => `${sizeValue}px`};
  height: ${({ sizeValue }) => `${sizeValue}px`};
  background-color: none;
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 20;
  cursor: pointer;
`;

const BookmarkOffAbsoluteWrap = styled(BookmarkOnAbsoluteWrap)`
  background-color: none;
`;
