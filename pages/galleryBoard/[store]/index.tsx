import React from "react";
import StorePage from "../../../src/container/storePage/StorePage";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import {
  getStoreInfo,
  getStoreAnnounce,
  getPosterThumnail,
  getStoreReview,
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
  const storeId = Number(context.params?.store);
  const page = Number(context.params?.page);
  // storeId가 invalid 값일때 갤러리보드로 라우팅
  try {
    const storeInfo = await getStoreInfo({ storeId });
    const announceData = await getStoreAnnounce({ storeId });
    const posterThumnail = await getPosterThumnail({ storeId });
    // accessToken이 있을때는 팔로우 여부 등등을 판단해야함 (처리 필요)
    queryClient.prefetchQuery(["review", storeId], () =>
      getStoreReview({ storeId, page })
    );

    return {
      props: {
        dehydratedState: dehydrate(queryClient), // 초기 데이터 캐싱
        storeInfo,
        announceData,
        posterThumnail,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: "/galleryBoard",
        permanent: false,
      },
    };
  }
};
