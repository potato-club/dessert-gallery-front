import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styled from "styled-components";
import LoadingSpinner from "../../container/storePage/components/Modal/LoadingSpinner";
import { useGetReviewList } from "../../hooks/useBoard";
import PagingBox from "./PagingBox";
import Review, { StoreReviewType } from "./Review";

const ReviewList = () => {
  const router = useRouter();

  const { data, refetch, isLoading } = useGetReviewList({
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
    <>
      {isLoading ? (
        <LoadingWrapper>
          <LoadingSpinner width={50} height={50} borderWidth={2} />
        </LoadingWrapper>
      ) : data.content.length ? (
        <Container>
          {data.content.map((item: StoreReviewType, idx: number) => {
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
      ) : (
        <NoneReview>등록된 리뷰가 없습니다.</NoneReview>
      )}
    </>
  );
};

export default ReviewList;
const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 37px;
  margin-top: 53px;
`;
const NoneReview = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px;
  font-weight: 500;
`;
