import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useGetStoreInfo, {
  useGetStorePost,
} from "../../../../hooks/useGetStoreInfo";
import DetailPost from "./DetailPost";
import { useEscKey } from "../../../../hooks/useEscKey";

interface StorePost {
  boardId: number;
  thumbnail: {
    fileName: string;
    fileUrl: string;
  };
  createdDate: string;
}

const Post = () => {
  const storeInfo = useGetStoreInfo();
  const storeId = storeInfo?.id;
  const storePost = useGetStorePost(storeId as number);
  const [postId, setPostId] = useState<number | null>(null);

  useEscKey(() => closeThing());

  const closeThing = () => {
    setPostId(null);
  };

  return (
    <>
      <BodyWrapper>
        {storePost?.map((post: StorePost, index: number) => (
          <PostImage
            key={post.boardId}
            src={post.thumbnail.fileUrl}
            alt={`Post Image ${index}`}
            onClick={() => setPostId(post.boardId)}
          />
        ))}
      </BodyWrapper>
      {postId && <DetailPost postId={postId} />}
    </>
  );
};

export default Post;

const BodyWrapper = styled.div`
  width: 835px;
  height: 100%;
  display: flex;
  flex-flow: wrap;
  gap: 57px;
`;

const PostImage = styled.img`
  width: 240px;
  height: 240px;
  &:hover {
    cursor: pointer;
  }
`;
