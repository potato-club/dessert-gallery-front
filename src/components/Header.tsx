import React from "react";
import styled, { css } from "styled-components";
import LogoSvg from "../../public/svg/common/logo.svg";
import SearchIconSvg from "../../public/svg/header/searchIcon.svg";
import InfoSvg from "../../public/svg/header/info.svg";
import BookmarkSvg from "../../public/svg/header/bookmark.svg";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <TitleContent href="/">
        <LogoSvg width="85px" height="92px" />
        <Title>Dessert Gallery</Title>
      </TitleContent>
      <BtnList>
        <PageMoveBtn
          href="/galleryBoard"
          active={router.pathname === "/galleryBoard"}
        >
          가게 게시판
        </PageMoveBtn>
        <PageMoveBtn
          href="/reviewBoard"
          active={router.pathname === "/reviewBoard"}
        >
          후기 게시판
        </PageMoveBtn>
        <PageMoveBtn href="/map" active={router.pathname === "/map"}>
          지도로 찾기
        </PageMoveBtn>
      </BtnList>

      <FormDiv>
        <SearchIconSvg />
        <SearchInput placeholder="검색어를 입력해 주세요" />
      </FormDiv>

      <AboutUser>
        <MyPageBtn>
          <InfoSvg />
        </MyPageBtn>
        <BookmarkBtn>
          <BookmarkSvg />
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
const underline = css`
  cursor: pointer;
  color: #ff6f00;
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 8px;
`;
const PageMoveBtn = styled.a<{ active: boolean }>`
  height: fit-content;
  font-size: 26px;
  font-weight: 700;
  line-height: 38px;
  color: #ffb456;
  ${({ active }) => active && underline}
  &:hover {
    ${underline}
  }
`;
const TitleContent = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 27px;
  margin-right: 44px;
  &:hover {
    cursor: pointer;
  }
`;
const Title = styled.h1`
  color: #ff6f00;
  font-size: 40px;
  font-weight: 700;
`;
const FormDiv = styled.form`
  display: flex;
  align-items: center;
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
