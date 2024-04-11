import React from 'react';
import styled from 'styled-components';
import FollowItem from './FollowItem';
import LoadingSpinner from '../../../storePage/components/Modal/LoadingSpinner';

interface FollowListType {
  storeId: number;
  storeName: string;
  fileName: string;
  fileUrl: string;
}
interface Props {
  pageList: FollowListType[];
  isLoad: boolean;
  propRef: any;
}
const ItemList = ({ ...props }: Props) => {
  return (
    <Container>
      {props.pageList.map((item: FollowListType) => (
        <FollowItem
          key={item.storeId}
          storeName={item.storeName}
          fileUrl={item.fileUrl}
          storeId={item.storeId}
        />
      ))}
      <IoDiv ref={props.propRef} />
      {props.isLoad && (
        <LoadingDiv>
          <LoadingSpinner width={40} height={40} borderWidth={2} />
        </LoadingDiv>
      )}
    </Container>
  );
};

export default ItemList;

const IoDiv = styled.div``;
const LoadingDiv = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
