import React from "react";
import styled from "styled-components";

const Input = ({
  placeholder,
}: {
  /**
   * (선택)placeholder에 출력할 텍스트
   */
  placeholder?: string;
}) => {
  return <StyledInput placeholder={placeholder}></StyledInput>;
};

export default Input;

const StyledInput = styled.input`
  display: block;
  padding: 0 50px;
  width: 500px;
  height: 60px;
  border: 2px solid #fdc886;
  font-size: 18px;
  border-radius: 50px;
  // Input 컴포넌트 클릭 시 바깥에 생기는 검은 테두리를 없애는 용도
  outline: none;
`;
