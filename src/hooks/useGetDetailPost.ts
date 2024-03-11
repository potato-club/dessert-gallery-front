import { useEffect, useState } from "react";
import {
  getDetailPost,
  getDetailPostComment,
} from "../apis/controller/postPage";

export const useGetDetailPost = (storeId: number) => {
  const [detailPost, setDetailPost] = useState<DetailPost | null>(null);

  useEffect(() => {
    async function fetchStorePost() {
      try {
        const fetchedStorePost = await getDetailPost(storeId);
        setDetailPost(fetchedStorePost);
      } catch (error) {}
    }

    fetchStorePost();
  }, [storeId]);

  return detailPost;
};

interface DetailPost {
  title: string;
  content: string;
  images: [
    {
      fileName: string;
      fileUrl: string;
    }
  ];
  tags: [string];
  owner: true;
  bookmark: true;
}

export const useGetPostComment = (storeId: number) => {
  const [postComment, setPostComment] = useState<PostComment[] | null>(null);

  useEffect(() => {
    async function fetchStorePost() {
      try {
        const fetchedStorePost = await getDetailPostComment(storeId);
        setPostComment(fetchedStorePost);
      } catch (error) {}
    }

    fetchStorePost();
  }, [storeId]);

  return postComment;
};

interface PostComment {
  nickname: string;
  comment: string;
  profile: {
    fileName: string;
    fileUrl: string;
  };
  createdDate: string;
}
