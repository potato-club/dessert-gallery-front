import React from 'react';
import styled from 'styled-components';
import NoneListBox from '../../components/NoneListBox';
import { useInfinityMyBookmark } from '../../../../hooks/useUser';
import { useInfinityScrollLoading } from '../../../../hooks/useInfinityScroll';
import ItemList from './ItemList';
import LoadingSpinner from '../../../storePage/components/Modal/LoadingSpinner';

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
      {isLoading ? (
        <InitLoading>
          <LoadingSpinner width={100} height={100} borderWidth={5} />
        </InitLoading>
      ) : pageList?.length ? (
        <ItemList pageList={pageList} isLoad={isLoad} propRef={ref} />
      ) : (
        <NoneListBox content="북마크한 게시물이 없습니다." />
      )}
    </Container>
  );
};

export default BookmarkList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1122px;
  height: 100%;
  @media (max-width: 1470px) {
    width: 800px;
  }
  @media (max-width: 1190px) {
    width: 520px;
  }
`;
const InitLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
