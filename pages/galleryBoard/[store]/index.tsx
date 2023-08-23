import React from "react";
import StorePage from "../../../src/container/storePage/StorePage";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import {
  getStoreInfo,
  getStoreAnnounce,
  getPosterThumnail,
  getStoreReview,
  getDetailPoster,
} from "../../api/detailStore";

export interface StoreProps {
  storeInfo: any;
  announceData: any;
  posterThumnail: any;
  storeReview: any;
  detailPoster: any;
}

const Store: React.FC<StoreProps> = (props) => {
  return (
    <>
      <StorePage {...props} />
    </>
  );
};

export default Store;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJybGFlaGRyYnM1ODBAbmF2ZXIuY29tIiwicm9sZXMiOiJNQU5BR0VSIiwiaWF0IjoxNjkyNzczOTQ1LCJleHAiOjE2OTI3NzU3NDV9.7oQ5Y78WrO2q8Lk4iuGqq7yGq83uDuMgW3sB9Eso72E";
  const storeInfo = await getStoreInfo(accessToken);
  const announceData = await getStoreAnnounce(accessToken);
  const posterThumnail = await getPosterThumnail(accessToken);
  const storeReview = await getStoreReview(accessToken);

  return {
    props: {
      dehydratedState: dehydrate(queryClient), // 초기 데이터 캐싱 dehydrate
      storeInfo,
      announceData,
      posterThumnail,
      storeReview,
    },
  };
};
