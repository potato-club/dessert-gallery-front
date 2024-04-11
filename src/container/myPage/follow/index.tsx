import React from 'react';
import styled from 'styled-components';
import FollowList from './components/FollowList';

const FollowPage = () => {
  return (
    <Container>
      <InnerWrap>
        <Title>팔로우 관리</Title>
        <FollowList />
      </InnerWrap>
    </Container>
  );
};

export default FollowPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 55px;
  margin: 0px auto;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
`;
const InnerWrap = styled.div`
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
