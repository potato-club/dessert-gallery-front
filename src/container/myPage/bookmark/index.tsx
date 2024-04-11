import React from 'react';
import styled from 'styled-components';
import BookmarkList from './components/BookmarkList';

const BookmarkPage = () => {
  return (
    <Container>
      <InnerWrap>
        <Title>최근 저장한 북마크</Title>
        <BookmarkList />
      </InnerWrap>
    </Container>
  );
};

export default BookmarkPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0px auto;
  padding: 55px 0px;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
`;
const InnerWrap = styled.div`
  width: 100%;
  height: 100%;
`;
