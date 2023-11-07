import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useGetReviewList } from "../../hooks/useBoard";
import { usePagenate } from "../../hooks/usePagenate";
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

  const {
    currentPage,
    handlePageChange,
    pages,
    handleNextGroup,
    handlePrevGroup,
    lastPageGroup,
    pageGroups,
  } = usePagenate({ apiData: data });

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
      <Pagenation>
        {pageGroups !== 0 && (
          <PrevBtn onClick={() => handlePrevGroup(pageGroups)}>{"<"}</PrevBtn>
        )}
        {pages.map((pageNum) => (
          <PageNum
            onClick={() => {
              handlePageChange(pageNum);
            }}
            isFocus={pageNum == (currentPage || 1)}
            key={pageNum}
          >
            {pageNum}
          </PageNum>
        ))}
        {pageGroups !== lastPageGroup && (
          <NextBtn onClick={() => handleNextGroup(pageGroups)}>{">"}</NextBtn>
        )}
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
