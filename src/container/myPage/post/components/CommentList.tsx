import React from "react";
import styled from "styled-components";
import { useGetPostComment } from "../../../../hooks/useGetDetailPost";
import Comment from "./Comment";

interface DetailPostProps {
  storeId: number;
  postId: number;
}
const CommentList = ({ storeId, postId }: DetailPostProps) => {
  const postComment = useGetPostComment(postId);

  return (
    <CommentBox>
      {postComment?.map((item: any) => (
        <Comment
          storeId={storeId}
          commentId={item.id}
          nickname={item.nickname}
          comment={item.comment}
          profile={item.profile}
          writer={item.writer}
          key={item.id}
        />
      ))}
    </CommentBox>
  );
};

export default CommentList;

const CommentBox = styled.div`
  width: 100%;
  height: 170px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
