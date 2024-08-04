import React from 'react';
import styled from 'styled-components';
import FollowList from './components/FollowList';

const FollowPage = () => {
  return (
    <Container>
      <Title>팔로우 관리</Title>
      <FollowList />
    </Container>
  );
};

export default FollowPage;

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
