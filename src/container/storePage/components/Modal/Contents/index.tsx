import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Bookmark from "../../../../../components/Bookmark";
import { useToggleBookmark } from "../../../../../hooks/useToggleBookmark";
import CommentList from "./CommentList";

const Content = ({ address, detailPoster, boardId }: any) => {
  const [onBookmarkState, setOnBookmarkState] = useState<boolean>(false);

  // bookmark 불리언값에 따른 onBookmarkState 상태 변경
  useEffect(() => {
    if (detailPoster) {
      setOnBookmarkState(detailPoster.bookmark);
    }
  }, [detailPoster]);

  const { toggleBookmarkState } = useToggleBookmark(boardId);

  return (
    <Container>
      <Top>
        <Address>{address}</Address>
        <Bookmark
          boardId={boardId}
          onBookmark={onBookmarkState}
          size="medium"
          onClickBookmark={() => {
            toggleBookmarkState();
          }}
        />
      </Top>

      {detailPoster && (
        <>
          <Title>{detailPoster.title}</Title>
          <TextContent>{detailPoster.content}</TextContent>
          <HashTagBox>
            {detailPoster.tags.map((item: string, idx: number) => {
              return <HashTag key={idx}>{item}</HashTag>;
            })}
          </HashTagBox>
        </>
      )}
      <CommentList boardId={boardId} />
    </Container>
  );
};

export default Content;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 408px;
  padding: 33px 28px;
  height: 444px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Address = styled.div`
  color: #828282;
  font-size: 15px;
  font-weight: 700;
  max-width: 300px;
`;
const Title = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  margin: 9px 0px 17px 0px;
  max-width: 300px;
`;
const TextContent = styled.div`
  color: #000;
  font-size: 15px;
  font-weight: 500;
`;
const HashTagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 17px;
  margin: 18px 0px 29px 0px;
`;
const HashTag = styled.div`
  color: #ff6f00;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
`;
