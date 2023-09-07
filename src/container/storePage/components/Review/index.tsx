import React from "react";
import styled from "styled-components";
import Review from "./Review";

const ReviewList = ({ storeReview }: any) => {
  console.log(storeReview);

  return (
    <Container>
      {storeReview.content.map((item: any, idx: number) => {
        return <Review storeReview={item} key={idx} />;
      })}
      {/* <Pagenation></Pagenation> */}
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
