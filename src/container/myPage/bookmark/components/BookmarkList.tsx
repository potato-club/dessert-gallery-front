import React from "react";
import styled from "styled-components";
import { useInfinityMyBookmark } from "../../../../hooks/useUser";
import BookmarkItem from "./BookmarkItem";
import { useInfinityScrollLoading } from "../../../../hooks/useInfinityScroll";
import LoadingSpinner from "../../../storePage/components/Modal/LoadingSpinner";
import NoneListBox from "../../components/NoneListBox";

interface BookmarkListType {
  boardId: number;
  thumbnail: any;
  createData: string;
}

const BookmarkList = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } =
    useInfinityMyBookmark();

  const { pageList, isLoad, ref } = useInfinityScrollLoading({
    data: data,
    isLoading,
    hasNextPage,
    fetchNextPage,
  });

  return (
    <Container>
      <ItemList>
        {pageList && pageList.length ? (
          pageList.map((item: BookmarkListType) => {
            return (
              <BookmarkItem
                key={item.boardId}
                boardId={item.boardId}
                thumbnail={item.thumbnail}
              />
            );
          })
        ) : (
          <NoneListBox content="북마크한 게시물이 없습니다." />
        )}
        <IoDiv ref={ref}></IoDiv>
        {isLoad && (
          <LoadingDiv>
            <LoadingSpinner width={40} height={40} borderWidth={2} />
          </LoadingDiv>
        )}
      </ItemList>
    </Container>
  );
};

export default BookmarkList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1122px;
  @media (max-width: 1470px) {
    width: 800px;
  }
  @media (max-width: 1190px) {
    width: 520px;
  }
`;
const IoDiv = styled.div`
  margin-top: 30px;
`;
const LoadingDiv = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
`;
