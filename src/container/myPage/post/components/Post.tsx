import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useGetStoreInfo, {
  useGetStorePost,
} from "../../../../hooks/useGetStoreInfo";
import DetailPost from "./DetailPost";
import { useEscKey } from "../../../../hooks/useEscKey";
import { getStorePost } from "../../../../apis/controller/postPage";

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
  const [postId, setPostId] = useState<number | null>(null);
  const [storePost, setStorePost] = useState<StorePost[] | null>(null);

  useEffect(() => {
    async function fetchStorePost() {
      try {
        const fetchedStorePost = await getStorePost(storeId as number);
        setStorePost(fetchedStorePost);
      } catch (error) {
        console.error("잠시후에 다시 시도해 주세요.", error);
      }
    }
    if (storeId) {
      fetchStorePost();
    }
  }, [storeId]);

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
