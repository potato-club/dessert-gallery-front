import React from "react";
import styled from "styled-components";
import Review from "./Review";
const ReviewList = ({ storeReview }: any) => {
  // console.log(storeReview);

  return (
    <Container>
      <Review />
      <Review />
      <Review />
      <Review />
    </Container>
  );
};

export default ReviewList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
  margin-top: 53px;
`;
