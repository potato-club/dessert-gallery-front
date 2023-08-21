import React from "react";
import StorePage from "../../../src/container/storePage/StorePage";
import { GetServerSideProps } from "next";
import {
  getStoreInfo,
  getStoreAnnounce,
  getStorePoster,
} from "../../api/detailStore";

export interface StoreProps {
  storeInfo: any;
  announceData: any;
  storePoster: any;
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
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJybGFlaGRyYnM1ODBAbmF2ZXIuY29tIiwicm9sZXMiOiJNQU5BR0VSIiwiaWF0IjoxNjkyNjM2MzQzLCJleHAiOjE2OTI2MzgxNDN9.VinkSCsZQCDyl6tp71roRfczld3s9MKfLMWEFMgNfno";
  const storeInfo = await getStoreInfo(accessToken);
  const announceData = await getStoreAnnounce(accessToken);
  const storePoster = await getStorePoster(accessToken);
  return {
    props: { storeInfo, announceData, storePoster },
  };
};
