import React from "react";
import styled from "styled-components";

interface LoadingSpinnerProps {
  width: number;
  height: number;
  borderWidth: number;
}
const LoadingSpinner = ({ ...props }: LoadingSpinnerProps) => {
  return <Spinner {...props} />;
};

export default LoadingSpinner;

const Spinner = styled.div<LoadingSpinnerProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  box-sizing: border-box;
  border: ${({ borderWidth }) => `${borderWidth}px`} solid rgba(0, 0, 0, 0.4);
  border-right-color: rgba(0, 0, 0, 0);
  border-radius: 100%;
  animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
