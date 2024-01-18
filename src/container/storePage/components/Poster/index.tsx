import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { modalBg } from "../../../../recoil/modalBg/atom";

const Poster = ({ posterList, setBoardId }: any) => {
  const modalBgState = useSetRecoilState(modalBg);

  const onClick = (boardId: number) => {
    modalBgState(true);
    setBoardId(boardId);
  };

  return (
    <Container>
      {posterList &&
        posterList.map((item: any, idx: number) => (
          <PostDiv
            key={idx}
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
  background-color: #fdc886;
  &:hover {
    cursor: pointer;
  }
`;
