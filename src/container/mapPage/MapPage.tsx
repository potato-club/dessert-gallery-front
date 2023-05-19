import React from "react";
import styled from "styled-components";
import AroundMarketDiv from "./components/AroundMarketDiv";
const MapPage = () => {
  return (
    <Container>
      <Header>header</Header>
      <MapLayout>
        <SideNav>
          <SearchInputDiv>
            <SearchForm>
              <SquareCompo />
              <SearchInput placeholder="가게 검색하기"></SearchInput>
              <SquareCompo />
            </SearchForm>
          </SearchInputDiv>
          <FilterBtn>평점</FilterBtn>
          <FilterBtn>영업중</FilterBtn>
          <AroundMarketDiv />
          <AroundMarketDiv />
          <AroundMarketDiv />
          <AroundMarketDiv />
          <AroundMarketDiv />
          <AroundMarketDiv />
        </SideNav>
        <div>map</div>
      </MapLayout>
    </Container>
  );
};

export default MapPage;

const SquareCompo = styled.div`
  background-color: #fac886;
  width: 15px;
  height: 15px;
  margin: 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
  height: 70px;
  background-color: #fffdf9;
`;
const MapLayout = styled.div`
  display: flex;
`;
const SideNav = styled.aside`
  background-color: #fcf0e1;
  width: 400px;
  height: 100vh;
`;

const SearchInputDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const SearchInput = styled.input`
  border: none;
  width: 200px;
  height: 20px;
  color: black;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #f78d04;
  background-color: white;
`;
const FilterBtn = styled.button``;
