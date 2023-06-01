import React from "react";
import styled from "styled-components";
import FilterBtn from "./FilterBtn";

const SideHeader = () => {
  return (
    <Container>
      <SearchInputDiv>
        <SearchForm>
          <SquareCompo />
          <SearchInput placeholder="가게 검색하기"></SearchInput>
          <SquareCompo />
        </SearchForm>
      </SearchInputDiv>
      <FilterList>
        <FilterBtn value="평점" />
        <FilterBtn value="영업중" />
      </FilterList>
    </Container>
  );
};

export default SideHeader;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const SearchInputDiv = styled.div`
  display: flex;
`;
const SearchInput = styled.input`
  display: flex;
  border: none;
  width: 340px;
  height: 27px;
  padding-left: 20px;
  ::placeholder {
    color: black;
    font-size: 18px;
    font-size: 700;
  }
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f78d04;
  background-color: white;
  padding: 17px 19px;
`;

const SquareCompo = styled.div`
  background-color: #fac886;
  width: 22px;
  height: 22px;
`;
const FilterList = styled.div`
  display: flex;
  gap: 14px;
`;
