import React from "react";
import styled from "styled-components";
import FollowList from "./components/FollowList";

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
`;
const InnerWrap = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
