import React from 'react';
import BlockedItem from './BlockedItem';
import LoadingSpinner from '../../../storePage/components/Modal/LoadingSpinner';
import styled from 'styled-components';
import { useLoginUserInfo } from '../../../../hooks/useUser';

interface BlockedListType {
  userName: string;
  fileName: string;
  fileUrl: string;
}

interface Props {
  pageList: BlockedListType[];
  isLoad: boolean;
  propRef: any;
}

const ItemList = ({ ...props }: Props) => {
  const { data: userInfo } = useLoginUserInfo();

  return (
    <Container>
      {props.pageList.map((item: BlockedListType) => (
        <BlockedItem
          key={item.userName}
          userName={item.userName}
          fileUrl={item.fileUrl}
          storeId={userInfo?.storeId}
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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
