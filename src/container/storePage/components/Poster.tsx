import React from "react";
import styled from "styled-components";

const Poster = () => {
  return (
    <Container>
      <PostDiv />
      <PostDiv />
      <PostDiv />
      <PostDiv />
      <PostDiv />
      <PostDiv />
      <PostDiv />
      <PostDiv />
      <PostDiv />
    </Container>
  );
};

export default Poster;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 56px 55px;
`;
const PostDiv = styled.div`
  width: 328px;
  height: 328px;
  background-color: black;
`;
