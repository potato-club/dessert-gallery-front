import React from "react";
import styled from "styled-components";

interface SvgProps {
  /**
   * svg의 경로 작성
   */
  svg: React.ReactNode;
  /**
   * px 단위로 작성
   */
  width: string;
  /**
   * px 단위로 작성
   */
  height: string;
}
const Svg = ({ svg, width, height }: SvgProps) => {
  console.log(svg);
  return (
    <Container width={width} height={height}>
      {svg}
    </Container>
  );
};

export default Svg;

const Container = styled.svg`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
