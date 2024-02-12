import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useGetReviewList } from "../../hooks/useBoard";
import PagingBox from "./PagingBox";
import Review, { StoreReviewType } from "./Review";

const ReviewList = () => {
  const router = useRouter();

  const { data, refetch } = useGetReviewList({
    page: router.query.page || 1,
    storeId: router.query.store,
    options: {
      refetchOnWindowFocus: false,
    },
  });
  // 쿼리의 page가 바뀔때마다 리뷰 데이터 refetch
  useEffect(() => {
    refetch();
  }, [router.query.page, refetch]);

  return (
    <Container>
      {data &&
        data.content.map((item: StoreReviewType, idx: number) => {
          return (
            <Review
              key={idx}
              userName={item.userName}
              content={item.content}
              score={item.score}
              images={item.images}
              createDate={item.createDate}
            />
          );
        })}
      <PagingBox data={data} />
    </Container>
  );
};

export default ReviewList;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 37px;
  margin-top: 53px;
`;
