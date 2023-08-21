import React from "react";
import StorePage from "../../../src/container/storePage/StorePage";
import { GetServerSideProps } from "next";
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
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJybGFlaGRyYnM1ODBAbmF2ZXIuY29tIiwicm9sZXMiOiJNQU5BR0VSIiwiaWF0IjoxNjkyNjQwNzMxLCJleHAiOjE2OTI2NDI1MzF9.XFdm8IJtFnMsKFurfDzEbC-Mnf7qmuKICle0UAdHM-c";
  const storeInfo = await getStoreInfo(accessToken);
  const announceData = await getStoreAnnounce(accessToken);
  const posterThumnail = await getPosterThumnail(accessToken);
  const storeReview = await getStoreReview(accessToken);
  const detailPoster = await getDetailPoster(accessToken);

  return {
    props: {
      storeInfo,
      announceData,
      posterThumnail,
      storeReview,
      detailPoster,
    },
  };
};
