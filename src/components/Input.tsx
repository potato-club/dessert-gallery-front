import React from "react";
import styled from "styled-components";

const Input = ({
  placeholder,
  marginBottom,
  type,
}: {
  /**
   * (선택)placeholder에 출력할 텍스트
   */
  placeholder?: string;

  /**
   * (선택)Input의 margin-bottom 값
   */
  marginBottom?: number;
  type?: "password";
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      marginBottom={marginBottom}
      type={type}
    ></StyledInput>
  );
};

export default Input;

const StyledInput = styled.input<{ marginBottom?: number }>`
  @media screen and (min-width: 1920px) {
    padding: 0 50px;
    width: 500px;
    height: 60px;
    font-size: 18px;
  }
  @media screen and (max-width: 1919px) {
    padding: 0 33px;
    width: 333px;
    height: 40px;
    font-size: 11px;
  }
  display: flex;
  /* align-items: center; */
  border: 2px solid #fdc886;
  border-radius: 50px;
  margin-bottom: ${(props) => props.marginBottom}px;

  //Input 컴포넌트 클릭 시 바깥에 생기는 검은 테두리를 없애는 용도
  outline: none;
  ::placeholder {
    color: #fdc886;
  }
`;
