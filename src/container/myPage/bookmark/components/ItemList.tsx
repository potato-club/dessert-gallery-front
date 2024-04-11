import React, { RefObject } from 'react';
import styled from 'styled-components';
import BookmarkItem from './BookmarkItem';
import LoadingSpinner from '../../../storePage/components/Modal/LoadingSpinner';

interface BookmarkListType {
  boardId: number;
  thumbnail: any;
  createData: string;
}
interface Props {
  pageList: BookmarkListType[];
  isLoad: boolean;
  propRef: any;
}
const ItemList = ({ ...props }: Props) => {
  return (
    <Container>
      {props.pageList.map((item: BookmarkListType) => {
        return (
          <BookmarkItem
            key={item.boardId}
            boardId={item.boardId}
            thumbnail={item.thumbnail}
          />
        );
      })}
      <IoDiv ref={props.propRef}></IoDiv>
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
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
`;
