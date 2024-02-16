import React from "react";
import styled, { css } from "styled-components";
import { usePagenate } from "../../hooks/usePagenate";
import ArrowRightIcon from "/public/svg/storePage/keyboard_right.svg";
import ArrowLeftIcon from "/public/svg/storePage/keyboard_left.svg";

const PagingBox = ({ data }: any) => {
  const {
    currentPage,
    handlePageChange,
    pages,
    handleNextGroup,
    handlePrevGroup,
    lastPageGroup,
    pageGroupsNum,
  } = usePagenate({ apiData: data });

  const isActive = (pageNum: number) => {
    return pageNum == currentPage;
  };
  return (
    <>
      <Container>
        {pageGroupsNum !== 0 && (
          <PrevBtn onClick={handlePrevGroup}>
            <ArrowLeftIcon fill="#f68d1f" />
          </PrevBtn>
        )}
        {pages.map((pageNum) => (
          <PageNumBtn
            onClick={() => {
              handlePageChange(pageNum);
            }}
            active={isActive(pageNum)}
            key={pageNum}
          >
            {pageNum}
          </PageNumBtn>
        ))}
        {pageGroupsNum !== lastPageGroup && (
          <NextBtn onClick={handleNextGroup}>
            <ArrowRightIcon fill="#f68d1f" />
          </NextBtn>
        )}
      </Container>
    </>
  );
};

export default PagingBox;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    display: none;
  }
`;
const PrevBtn = styled.button`
  ${button}
`;
const NextBtn = styled.button`
  ${button}
`;
const PageNumBtn = styled.button<{ active: boolean }>`
  width: 32px;
  height: 32px;
  color: ${({ active }) => (active ? "#fff" : "#00000099")};
  background-color: ${({ active }) => (active ? "#f68d1f" : "white")};
  border-radius: ${({ active }) => active && "32px"};
  border: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
