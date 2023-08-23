import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { modalBg } from "../../../../recoil/modalBg/atom";

const Poster = ({ posterThumnail, setBoardId }: any) => {
  const modalBgState = useSetRecoilState(modalBg);

  const onClick = (boardId: number) => {
    modalBgState(true);
    setBoardId(boardId);
  };

  return (
    <Container>
      {posterThumnail.map((item: any) => (
        <PostDiv
          key={item.boardId}
          src={item.thumbnail.fileUrl}
          onClick={() => onClick(item.boardId)}
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
