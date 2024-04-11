import React from 'react';
import styled from 'styled-components';
import { useInfinityGetFollow } from '../../../../hooks/useFollowAction';
import { useInfinityScrollLoading } from '../../../../hooks/useInfinityScroll';
import NoneListBox from '../../components/NoneListBox';
import ItemList from './ItemList';

const FollowList = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, refetch } =
    useInfinityGetFollow();
  const { pageList, isLoad, ref } = useInfinityScrollLoading({
    data: data,
    isLoading,
    hasNextPage,
    fetchNextPage,
  });

  return (
    <Container>
      {pageList?.length ? (
        <ItemList pageList={pageList} isLoad={isLoad} propRef={ref} />
      ) : (
        <NoneListBox content="팔로우한 가게가 없습니다." />
      )}
    </Container>
  );
};

export default FollowList;

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
