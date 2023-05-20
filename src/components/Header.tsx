import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <BtnList>
        <MovePageBtn>가게 게시판</MovePageBtn>
        <MovePageBtn>후기 게시판</MovePageBtn>
        <MovePageBtn>지도로 찾기</MovePageBtn>
      </BtnList>
      <Logo>로고</Logo>
      <FormDiv>
        <SearchInput placeholder="검색창 입니다" />
      </FormDiv>
    </Container>
  );
};

export default Header;
const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffdf9;
  height: 100px;
  gap: 200px;
`;
const BtnList = styled.div`
  display: flex;
  gap: 40px;
`;
const MovePageBtn = styled.button`
  height: fit-content;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  background-color: blueviolet;
`;
const FormDiv = styled.form`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 30px;
  background-color: blue;
`;
const SearchInput = styled.input`
  width: 300px;
`;
