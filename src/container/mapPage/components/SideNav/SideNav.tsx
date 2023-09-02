import React from "react";
import styled from "styled-components";
import Market from "./Market";
import { Search } from "../../../../../public/svg";
import Tag from "../../../../components/Tag";
const SideNav = () => {
  return (
    <Container>
      <SideHeader>
        <SearchForm>
          <Search width="16px" height="16px" />
          <SearchInput placeholder="가게를 검색해 주세요."></SearchInput>
        </SearchForm>
        <FilterList>
          <Tag
            title="평점순"
            width="62px"
            height="25px"
            fontSize="10px"
            clickAble={true}
            hoverCss={true}
          />
          <Tag
            title="신규순"
            width="62px"
            height="25px"
            fontSize="10px"
            clickAble={true}
            hoverCss={true}
          />
          <Tag
            title="영업중"
            width="62px"
            height="25px"
            fontSize="10px"
            clickAble={true}
            hoverCss={true}
          />
        </FilterList>
      </SideHeader>

      <Market />
    </Container>
  );
};

export default SideNav;
const Container = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #fcf0e1;
  width: 340px;
  height: 100vh;
  @media (min-width: 1280px) {
    width: calc(340px + (438 - 340) * ((100vw - 1280px) / (1920 - 1280)));
  }
  @media (min-width: 1920px) {
    width: 438px;
  }
`;
const SideHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 29px 14px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
  position: relative;
  z-index: 3;
`;
const SearchForm = styled.form`
  display: flex;
  align-items: center;
  border: 1.5px solid #ff8d00;
  background-color: white;
  padding: 11px 14px;
`;
const SearchInput = styled.input`
  border: none;
  width: 100%;
  height: 20px;
  padding-left: 15px;
  outline: none;
  ::placeholder {
    color: black;
    font-size: 11px;
    font-size: 500;
  }
`;
const FilterList = styled.div`
  display: flex;
  gap: 12px;
`;
