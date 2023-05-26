import React from "react";
import styled from "styled-components";

const Input = ({ placeholder }: { placeholder: string }) => {
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
  outline: none;
`;
