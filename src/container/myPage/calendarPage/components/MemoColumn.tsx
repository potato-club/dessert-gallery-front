import React from "react";
import styled from "styled-components";

const MemoColumn = ({ ...props }) => {
  return (
    <Container>
      <input type="checkbox" />
      <InputContent isSuccess={props.isSuccess}>{props.content}</InputContent>
    </Container>
  );
};

export default MemoColumn;

const Container = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 25px;
    height: 25px;
    margin-right: 18px;
  }
`;
const InputContent = styled.span<{ isSuccess: boolean }>`
  color: ${({ isSuccess }) => (isSuccess ? "#828282" : "#000")};
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 700;
`;
