import React from 'react';
import styled from 'styled-components';
import { useInfinityGetBlockedList } from '../../../../hooks/useFollowAction';
import { useInfinityScrollLoading } from '../../../../hooks/useInfinityScroll';
import LoadingSpinner from '../../../storePage/components/Modal/LoadingSpinner';
import NoneListBox from '../../components/NoneListBox';
import ItemList from './ItemList';

const BlockedList = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, refetch } =
    useInfinityGetBlockedList();
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
        <NoneListBox content="차단된 계정이 없습니다." />
      )}
    </Container>
  );
};

export default BlockedList;

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
const IoDiv = styled.div``;
const LoadingDiv = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InitLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
