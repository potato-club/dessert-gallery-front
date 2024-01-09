import React, { useEffect, useState } from "react";
import { getStoreInfo } from "../apis/controller/postPage";
const useGetStoreInfo = () => {
  const [storeInfo, setStoreInfo] = useState<StoreInfo>(); // 초기 상태를 null로 설정

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
