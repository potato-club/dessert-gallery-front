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
  gap: 58px 76px;
`;
const PostDiv = styled.div`
  width: 490px;
  height: 490px;
  background-color: black;
`;
