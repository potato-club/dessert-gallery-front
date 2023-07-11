import React from "react";
import styled from "styled-components";

const Input = ({
  placeholder,
  marginBottom,
}: {
  /**
   * (선택)placeholder에 출력할 텍스트
   */
  placeholder?: string;

  /**
   * (선택)Input의 margin-bottom 값
   */
  marginBottom?: number;
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      marginBottom={marginBottom}
    ></StyledInput>
  );
};

export default Input;

const StyledInput = styled.input<{ marginBottom?: number }>`
  display: flex;
  padding: 0 50px;
  width: 500px;
  height: 60px;
  line-height: 60px;
  border: 2px solid #fdc886;
  font-size: 18px;
  border-radius: 50px;
  margin-bottom: ${(props) => props.marginBottom}px;

  //Input 컴포넌트 클릭 시 바깥에 생기는 검은 테두리를 없애는 용도
  outline: none;
  ::placeholder {
    color: #fdc886;
  }
`;
