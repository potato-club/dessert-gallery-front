import React from "react";
import styled, { css } from "styled-components";
import LogoSvg from "../../public/svg/common/Logo.svg";
import SearchIconSvg from "../../public/svg/header/SearchIcon.svg";
import InfoSvg from "../../public/svg/header/Info.svg";
import BookmarkSvg from "../../public/svg/header/Bookmark.svg";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <TitleContent href="/">
        <LogoSvg width="55px" height="60px" />
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
        <SearchIconSvg width="15px" height="15px" />
        <SearchInput placeholder="검색어를 입력해 주세요" />
      </FormDiv>

      <AboutUser>
        <MyPageBtn>
          <InfoSvg width="31px" height="32px" />
        </MyPageBtn>
        <BookmarkBtn>
          <BookmarkSvg width="23px" height="32px" />
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
  height: 96px;
  min-width: 1280px;
`;
const BtnList = styled.div`
  display: flex;
  gap: 47px;
  margin-right: 135px;
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
  font-size: 16px;
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
  gap: 24px;
  margin-right: 44px;
  &:hover {
    cursor: pointer;
  }
`;
const Title = styled.h1`
  color: #ff6f00;
  font-size: 18px;
  font-weight: 700;
`;
const FormDiv = styled.form`
  display: flex;
  align-items: center;
  width: 277px;
  height: 33px;
  border: 2px solid #ff8d00;
  border-radius: 40px;
  padding: 0px 15px;
  margin-right: 24px;
`;
const SearchInput = styled.input`
  border: none;
  background-color: #fffdf9;
  padding: 0px 17px;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #fdc886;
    font-size: 11px;
    font-weight: 500;
  }
`;
const AboutUser = styled.div`
  display: flex;
  gap: 23px;
`;
const MyPageBtn = styled.div``;
const BookmarkBtn = styled.div``;
