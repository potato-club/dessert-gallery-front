import React from "react";
import styled from "styled-components";
import ReviewList from "../../../../components/ReviewList";

const Review = () => {
  return <ReviewList />;
};

export default Review;

const BodyWrapper = styled.div`
  width: 53%;
  height: 100%;
  display: flex;
  flex-flow: wrap;
  gap: 43px;
  justify-content: space-between;
`;

const PostImage = styled.img`
  width: 240px;
  height: 240px;
  &:hover {
    cursor: pointer;
  }
`;
