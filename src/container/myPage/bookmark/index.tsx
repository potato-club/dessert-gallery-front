import React from "react";
import styled from "styled-components";
import BookmarkList from "./components/BookmarkList";

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
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
const InnerWrap = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
