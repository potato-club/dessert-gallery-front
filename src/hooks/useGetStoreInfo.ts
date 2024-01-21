import React, { useEffect, useState } from "react";
import { getStoreInfo, getStorePost } from "../apis/controller/postPage";
const useGetStoreInfo = () => {
  const [storeInfo, setStoreInfo] = useState<StoreInfo>();

  useEffect(() => {
    async function fetchStoreInfo() {
      try {
        const fetchedStoreInfo = await getStoreInfo();
        setStoreInfo(fetchedStoreInfo.data);
      } catch (error) {
        console.error("Error fetching store info:", error);
      }
    }

    fetchStoreInfo();
  }, []);
  return storeInfo;
};

export default useGetStoreInfo;
interface StoreInfo {
  id: number;
  name: string;
  info: string;
  content: string;
  address: string;
  phoneNumber: string;
  storeImage: {
    fileName: string;
    fileUrl: string;
  };
  postCount: 0;
  reviewCount: 0;
}

export const useGetStorePost = (storeId: number) => {
  const [storePost, setStorePost] = useState<StorePost[] | null>(null);

  useEffect(() => {
    async function fetchStorePost() {
      try {
        const fetchedStorePost = await getStorePost(storeId);
        setStorePost(fetchedStorePost);
      } catch (error) {}
    }

    fetchStorePost();
  }, [storeId]);

  return storePost;
};

interface StorePost {
  boardId: number;
  thumbnail: {
    fileName: string;
    fileUrl: string;
  };
  createdDate: string;
}
