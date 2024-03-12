import React, { useEffect, useState } from "react";
import { getWriteAbleReview } from "../apis/controller/reviewPage";
const useGetWriteAbleStoreInfo = () => {
  const [writeAbleStoreInfo, setWriteAbleStoreInfo] = useState<writeAbleStroe[]|[]>([]);

  useEffect(() => {
    async function fetchStoreInfo() {
      try {
        const fetchedWriteStoreInfo = await getWriteAbleReview();
        setWriteAbleStoreInfo(fetchedWriteStoreInfo.data);
      } catch (error) {
        console.error("Error fetching write able store info:", error);
      }
    }

    fetchStoreInfo();
  }, []);
  return writeAbleStoreInfo;
};

export default useGetWriteAbleStoreInfo;

interface writeAbleStroe {
  id: number;
  name: string;
  content: string;
  address: string;
  storeImage: fileData
}

interface fileData {
    fileName: string
    fileUrl: string
}