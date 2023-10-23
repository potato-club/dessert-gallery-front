import React from "react";
import MyPage from "../../../src/container/myPage/MyPage";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import { getStoreInfo, getStoreReview } from "../../api/detailStore";
const myPage = () => {
  return (
    <>
      <MyPage />
    </>
  );
};

export default myPage;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const queryClient = new QueryClient();
//   const storeId = Number(context.params?.store);
//   const page = Number(context.params?.page) || 1;
//   try {
//     // accessToken이 있을때는 팔로우 여부 등등을 판단해야함 (처리 필요)
//     const storeInfo = await getStoreInfo({ storeId });
//     await queryClient.prefetchQuery(["review", storeId], () =>
//       getStoreReview({ storeId, page })
//     );

//     return {
//       props: {
//         dehydratedState: dehydrate(queryClient), // 초기 데이터 캐싱
//         storeInfo,
//       },
//     };
//   } catch (error) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
// };
