import React from "react";
import styled from "styled-components";
import Image from "next/image";
import StarSvg from "../../public/svg/rating/star.svg";
import Svg from "./Svg";

interface IRatingProps {
  /**
   * 평점 컴포넌트의 전체적인 사이즈 조절
   */
  size: "small" | "medium";
  /**
   * 평점 value 값
   */
  ratingValue?: string;
}
/**
 * 후기에대한 평점을 나타내는 컴포넌트입니다.
 */
const Rating = ({ size, ratingValue = "0.0" }: IRatingProps) => {
  let imgWidth = "20px";
  let imgHeight = "19px";
  if (size == "small") {
    imgWidth = "13px";
    imgHeight = "12px";
  } else {
    imgWidth = "20px";
    imgHeight = "19px";
  }
  return (
    <Container size={size}>
      <ImgBox size={size}>
        <Svg svg={<StarSvg />} width={imgWidth} height={imgHeight} />
      </ImgBox>
      <RatingValue size={size}>{ratingValue}</RatingValue>
    </Container>
  );
};

export default Rating;

const Container = styled.div<IRatingProps>`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  ${({ size }) => {
    switch (size) {
      case "small":
        return `height:15px;`;
      case "medium":
        return `height:24px;`;
      default:
        return "";
    }
  }}
`;
const ImgBox = styled.div<IRatingProps>`
  display: flex;
  ${({ size }) => {
    switch (size) {
      case "small":
        return `width: 13px; height:12px;`;
      case "medium":
        return `width: 20px; height:19px;`;
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
        return `font-size: 10px;`;
      case "medium":
        return `font-size: 16px;`;
      default:
        return "";
    }
  }}
`;
