import React from "react";
import styled from "styled-components";
import BlockedList from "./components/BlockedList";

const BlockedPage = () => {
  return (
    <Container>
      <InnerWrap>
        <Title>차단된 계정</Title>
        <BlockedList />
      </InnerWrap>
    </Container>
  );
};

export default BlockedPage;

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
