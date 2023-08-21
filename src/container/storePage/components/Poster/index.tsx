import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { modalBg } from "../../../../recoil/modalBg/atom";

const Poster = ({ posterThumnail }: any) => {
  const modalBgState = useSetRecoilState(modalBg);

  const onClick = () => {
    modalBgState(true);
  };
  return (
    <Container>
      {posterThumnail.map((item: any, idx: number) => (
        <PostDiv
          key={idx}
          src={item.thumbnail.fileUrl}
          onClick={onClick}
        ></PostDiv>
      ))}
    </Container>
  );
};

export default Poster;

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 52px 58px;
`;
const PostDiv = styled.img`
  width: 328px;
  height: 328px;
  &:hover {
    cursor: pointer;
  }
`;
