import React from "react";
import StorePage from "../../../src/container/storePage/StorePage";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import { getStoreAnnounce } from "../../../src/apis/controller/detailStore";
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

  // storeId가 invalid 값일때 갤러리보드로 라우팅
  try {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    await queryClient.prefetchQuery(["schedule", year, month], () =>
      calendarPageApi.getStoreCalendar(storeId, { year, month })
    );
    await queryClient.prefetchQuery(["storeAnnounce", storeId], () =>
      getStoreAnnounce(storeId)
    );

    return {
      props: {
        dehydratedState: dehydrate(queryClient), // 초기 데이터 캐싱
        storeId,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/galleryBoard",
        permanent: false,
      },
    };
  }
};
