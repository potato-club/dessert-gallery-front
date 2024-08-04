import React from 'react';
import styled from 'styled-components';
import BookmarkList from './components/BookmarkList';

const BookmarkPage = () => {
  return (
    <Container>
      <Title>최근 저장한 북마크</Title>
      <BookmarkList />
    </Container>
  );
};

export default BookmarkPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  padding: 55px 0px;
  height: 100%;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
`;
