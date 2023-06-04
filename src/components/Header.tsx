import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Rating from "./Rating";

const Header = () => {
  return (
    <Container>
      <Logo>
        <Image src={"/svg/header/logo.svg"} width="83px" height="90px" alt="" />
      </Logo>
      <Title>Dessert Gallery</Title>
      <BtnList>
        <MovePageBtn>가게 게시판</MovePageBtn>
        <MovePageBtn>후기 게시판</MovePageBtn>
        <MovePageBtn>지도로 찾기</MovePageBtn>
      </BtnList>

      <FormDiv>
        <Image
          src={"/svg/header/searchIcon.svg"}
          width="23px"
          height="23px"
          alt=""
        />
        <SearchInput placeholder="검색어를 입력해 주세요" />
      </FormDiv>

      <AboutUser>
        <MyPageBtn>
          <Image
            src={"/svg/header/info.svg"}
            width="48px"
            height="48px"
            alt=""
          />
        </MyPageBtn>
        <BookmarkBtn>
          <Image
            src={"/svg/header/bookmark.svg"}
            width="34px"
            height="48px"
            alt=""
          />
        </BookmarkBtn>
      </AboutUser>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffdf9;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
  height: 100px;
`;
const BtnList = styled.div`
  display: flex;
  gap: 67px;
`;
const MovePageBtn = styled.a`
  height: fit-content;
  font-size: 26px;
  font-weight: 700;
  line-height: 38px;
  color: #ffb456;
  &:hover {
    cursor: pointer;
    color: #ff6f00;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 8px;
  }
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: #ff6f00;
  font-size: 40px;
  font-weight: 700;
  margin: 0px 27px 0px 44px;
`;
const FormDiv = styled.form`
  display: flex;
  width: 416px;
  height: 48px;
  margin: 0px 98px 0px 134px;
  border: 3px solid #ff8d00;
  border-radius: 40px;
  padding: 0px 22px;
`;
const SearchInput = styled.input`
  border: none;
  background-color: #fffdf9;
  padding: 0px 25px;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #fdc886;
  }
`;
const AboutUser = styled.div`
  display: flex;
  gap: 33px;
`;
const MyPageBtn = styled.div``;
const BookmarkBtn = styled.div``;
