import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { modalBg } from "../../../../recoil/modalBg/atom";
import { useGetInfinityPosterList } from "../../../../hooks/useBoard";
import LoadingSpinner from "../Modal/LoadingSpinner";
import { useInfinityScrollLoading } from "../../../../hooks/useInfinityScroll";

const Poster = ({ storeId, setBoardId }: any) => {
  const modalBgState = useSetRecoilState(modalBg);
  const onClick = (boardId: number) => {
    modalBgState(true);
    setBoardId(boardId);
  };

  const { posterList, isLoading, hasNextPage, fetchNextPage } =
    useGetInfinityPosterList(storeId);
  const { pageList, isLoad, ref } = useInfinityScrollLoading({
    data: posterList,
    isLoading,
    hasNextPage,
    fetchNextPage,
  });

  return (
    <Container>
      <PosterList>
        {pageList &&
          pageList.map((item: any) => (
            <PostDiv
              key={item.boardId}
              src={item.thumbnail.fileUrl}
              onClick={() => onClick(item.boardId)}
            ></PostDiv>
          ))}
      </PosterList>
      <IoDiv ref={ref}></IoDiv>
      {isLoad && (
        <LoadingDiv>
          <LoadingSpinner width={40} height={40} borderWidth={2} />
        </LoadingDiv>
      )}
    </Container>
  );
};

export default Poster;

const Container = styled.div``;
const PosterList = styled.div`
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
const IoDiv = styled.div`
  margin-top: 30px;
`;
const LoadingDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
