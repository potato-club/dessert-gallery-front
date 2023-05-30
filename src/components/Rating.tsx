import React from "react";
import styled from "styled-components";

interface IRatingProps {
  /**
   * 평점 컴포넌트의 전체적인 사이즈 조절
   */
  size: "small" | "medium" | "large";
  /**
   * 평점 value 값
   */
  ratingValue?: string;
}
/**
 * 후기에대한 평점을 나타내는 컴포넌트입니다.
 */
const Rating = ({ size, ratingValue }: IRatingProps) => {
  return (
    <Container size={size}>
      <ImgBox size={size} />
      <RatingValue size={size}>{ratingValue}</RatingValue>
    </Container>
  );
};

export default Rating;

const Container = styled.div<IRatingProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  ${({ size }) => {
    switch (size) {
      case "small":
        return `height:15px;`;
      case "medium":
        return `height:20px;`;
      case "large":
        return `height:25px;`;
      default:
        return "";
    }
  }}
`;
const ImgBox = styled.div<IRatingProps>`
  background-color: brown;
  ${({ size }) => {
    switch (size) {
      case "small":
        return `width: 15px; height:15px;`;
      case "medium":
        return `width: 20px; height:20px;`;
      case "large":
        return `width: 25px; height:25px;`;
      default:
        return "";
    }
  }}
`;
const RatingValue = styled.div<IRatingProps>`
  line-height: 100%;
  ${({ size }) => {
    switch (size) {
      case "small":
        return `font-size: 15px;`;
      case "medium":
        return `font-size: 20px;`;
      case "large":
        return `font-size: 25px;`;
      default:
        return "";
    }
  }}
`;
