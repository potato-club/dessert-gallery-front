import React from "react";
import Comment from "./Comment";
import LoadingSpinner from "../LoadingSpinner";
import styled from "styled-components";
import { useInfinityModalComment } from "../../../../../hooks/useBoard";
import { useInfinityScrollLoading } from "../../../../../hooks/useInfinityScroll";

const CommentList = ({ boardId, postCommentList }: any) => {
  // infiniteQuery 모달 댓글 불러오기
  const { data, fetchNextPage, hasNextPage, isLoading, refetch } =
    useInfinityModalComment({ boardId });
  const { pageList, isLoad, ref } = useInfinityScrollLoading({
    data: data,
    isLoading,
    hasNextPage,
    fetchNextPage,
  });

  return (
    <Container>
      {postCommentList &&
        postCommentList.map((item: any, idx: number) => {
          return (
            <Comment
              nickname={item.nickname}
              comment={item.comment}
              profile={item.profile}
              key={idx}
            />
          );
        })}
      {pageList &&
        pageList.map((item: any, idx: number) => {
          return (
            <Comment
              nickname={item.nickname}
              comment={item.comment}
              profile={item.profile}
              key={idx}
            />
          );
        })}
      <IoDiv ref={ref}></IoDiv>
      {isLoad && (
        <LoadingDiv>
          <LoadingSpinner width={20} height={20} borderWidth={2} />
        </LoadingDiv>
      )}
    </Container>
  );
};

export default CommentList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const LoadingDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IoDiv = styled.div`
  margin-top: 30px;
`;
