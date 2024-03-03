import React from "react";
import styled from "styled-components";
import FollowItem from "./FollowItem";
import LoadingSpinner from "../../../storePage/components/Modal/LoadingSpinner";
import { useInfinityGetFollow } from "../../../../hooks/useFollowAction";
import { useInfinityScrollLoading } from "../../../../hooks/useInfinityScroll";

interface FollowListType {
  storeId: number;
  storeName: string;
  fileName: string;
  fileUrl: string;
}

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
      <ItemList>
        {pageList &&
          pageList.map((item: FollowListType) => (
            <FollowItem
              key={item.storeId}
              storeName={item.storeName}
              fileUrl={item.fileUrl}
              storeId={item.storeId}
            />
          ))}
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

export default FollowList;

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
const IoDiv = styled.div``;
const LoadingDiv = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 580px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
