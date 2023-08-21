import React from "react";
import styled from "styled-components";
import Review from "./Review";
const ReviewList = () => {
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
