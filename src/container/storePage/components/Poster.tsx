import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { modalBg } from "../../../recoil/modalBg/atom";

const Poster = () => {
  const modalBgState = useSetRecoilState(modalBg);

  const onClick = () => {
    modalBgState(true);
  };
  return (
    <Container>
      <PostDiv onClick={onClick} />
      <PostDiv onClick={onClick} />
      <PostDiv onClick={onClick} />
      <PostDiv onClick={onClick} />
      <PostDiv onClick={onClick} />
      <PostDiv onClick={onClick} />
      <PostDiv onClick={onClick} />
    </Container>
  );
};

export default Poster;

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 52px 58px;
`;
const PostDiv = styled.div`
  width: 328px;
  height: 328px;
  background-color: black;
  &:hover {
    cursor: pointer;
  }
`;
