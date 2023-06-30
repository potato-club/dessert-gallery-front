import React from "react";
import styled from "styled-components";

interface FilterBtnProps {
  value: string;
}
const FilterBtn = ({ value }: FilterBtnProps) => {
  return (
    <Container>
      <InnerDiv>
        <SpanValue>{value}</SpanValue>
        <CheckBtn type="checkbox" />
      </InnerDiv>
    </Container>
  );
};

export default FilterBtn;

const Container = styled.div`
  display: inline-block;
  gap: 8px;
  padding: 8px 23px;
  border: 2px solid #fdc886;
  border-radius: 25px;
  background-color: white;
`;
const InnerDiv = styled.div`
  display: flex;
  align-items: center;
`;
const SpanValue = styled.span`
  font-size: 15px;
  font-weight: 700;
`;

const CheckBtn = styled.input`
  width: 18px;
  height: 18px;
  margin-left: 7px;
`;
