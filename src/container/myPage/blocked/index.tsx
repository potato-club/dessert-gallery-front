import React from 'react';
import styled from 'styled-components';
import BlockedList from './components/BlockedList';

const BlockedPage = () => {
  return (
    <Container>
      <Title>차단된 계정</Title>
      <BlockedList />
    </Container>
  );
};

export default BlockedPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 55px 0px;
  margin: 0px auto;
  height: 100vh;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
`;
