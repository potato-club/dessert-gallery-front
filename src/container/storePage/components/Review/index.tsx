import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useGetReviewList } from "../../../../hooks/useBoard";
import Review from "./Review";

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

  const getPageNumList = () => {
    const pageList = [];
    if (data) {
      for (let i = 1; i < data.totalPages + 1; i++) {
        pageList.push(i);
      }
    }
    return pageList;
  };

  const pageSize = 10; // 한 번에 표시할 페이지 수

  console.log(data);
  return (
    <Container>
      {data &&
        data.content.map((item: any, idx: number) => {
          return <Review storeReview={item} key={idx} />;
        })}
      <Pagenation>
        <PrevBtn>{"<"}</PrevBtn>
        {getPageNumList().map((pageNum) => (
          <PageNum
            onClick={() => {
              router.push(`${router.query.store}/?page=${pageNum}`);
            }}
            isFocus={pageNum == (router.query.page || 1)}
            key={pageNum}
          >
            {pageNum}
          </PageNum>
        ))}
        <NextBtn>{">"}</NextBtn>
      </Pagenation>
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
const Pagenation = styled.div`
  display: flex;
  gap: 10px;
`;
const button = css`
  border: none;
  background-color: white;
  cursor: pointer;
`;
const PrevBtn = styled.button`
  ${button}
`;
const NextBtn = styled.button`
  ${button}
`;
const PageNum = styled.button<{ isFocus: boolean }>`
  ${button}
  color: ${({ isFocus }) => (isFocus ? "#000" : "#828282")};
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`;
