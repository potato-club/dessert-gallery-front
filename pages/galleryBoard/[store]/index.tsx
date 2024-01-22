import React from "react";
import StorePage from "../../../src/container/storePage/StorePage";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import {
  getStoreInfo,
  getStoreAnnounce,
  getPosterList,
  getStoreReview,
} from "../../../src/apis/controller/detailStore";
import { calendarPageApi } from "../../../src/apis/controller/calendarPage";

export interface StoreProps {
  storeId: number;
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
    // // accessToken이 있을때는 팔로우 여부 등등을 판단해야함 (처리 필요)
    await queryClient.prefetchQuery(["review", storeId], () =>
      getStoreReview({ storeId, page })
    );
    await queryClient.prefetchQuery(["storeAnnounce", storeId], () =>
      getStoreAnnounce(storeId)
    );
    await queryClient.prefetchQuery(["posterList", storeId], () =>
      getPosterList(storeId)
    );

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    await queryClient.prefetchQuery(["schedule", year, month], () =>
      calendarPageApi.getStoreCalendar(storeId, { year, month })
    );

    return {
      props: {
        dehydratedState: dehydrate(queryClient), // 초기 데이터 캐싱
        storeId,
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
