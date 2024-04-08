import React from "react";
import styled from "styled-components";
import { useInfinityGetBlockedList } from "../../../../hooks/useFollowAction";
import { useInfinityScrollLoading } from "../../../../hooks/useInfinityScroll";
import LoadingSpinner from "../../../storePage/components/Modal/LoadingSpinner";
import NoneListBox from "../../components/NoneListBox";
import BlockedItem from "./BlockedItem";

interface BlockedListType {
  userName: string;
  fileName: string;
  fileUrl: string;
}

const BlockedList = ({ ...props }) => {
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
      ) : (
        <ItemList>
          {pageList && pageList.length ? (
            pageList.map((item: BlockedListType) => (
              <BlockedItem
                key={item.userName}
                userName={item.userName}
                fileUrl={item.fileUrl}
                storeId={props.storeId}
              />
            ))
          ) : (
            <NoneListBox content="차단된 계정이 없습니다." />
          )}
          <IoDiv ref={ref}></IoDiv>
          {isLoad && (
            <LoadingDiv>
              <LoadingSpinner width={40} height={40} borderWidth={2} />
            </LoadingDiv>
          )}
        </ItemList>
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
const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 580px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const InitLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
