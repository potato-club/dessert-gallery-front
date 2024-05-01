import styled from 'styled-components';
import Image from 'next/image';
import React from 'react';
import myPageLogo from '../../../../public/image/myPageLogo.png';
import defaultImage from '../../../../public/image/defaultPhoto.png';
import type { myMenu } from '../../../types/componentsProps';
import Link from 'next/link';
import { useMypageMenu } from '../../../hooks/useMypageRoute';
import { useRouter } from 'next/router';

interface styleProp {
  fontSize: string;
  bold: boolean;
  fontColor: string;
  margin?: string;
  cursorStyle?: boolean;
}
interface imgProps {
  imgUrl: string;
}

export default function Menu() {
  const router = useRouter();
  const { menu, userInfo } = useMypageMenu();
  const onClickMoveMain = () => {
    window.location.href = '/';
  };

  return (
    <Box>
      <MenuWrapper>
        <MenuHeader onClick={onClickMoveMain}>
          <Image
            src={myPageLogo.src}
            alt="myPageLogo"
            layout="fixed"
            height={72}
            width={234}
          />
        </MenuHeader>
        <MenuContentsWrap>
          <ColumnBox>
            <UserInfoWrap>
              <ProfileImage
                imgUrl={
                  userInfo && userInfo.fileUrl
                    ? userInfo.fileUrl
                    : defaultImage.src
                }
              />
              <RowBox>
                <Text
                  bold
                  fontSize="20px"
                  fontColor="#000000"
                  margin="16px 4px 0 0"
                >
                  {userInfo && userInfo.nickname}
                </Text>
                <Text
                  bold
                  fontSize="18px"
                  fontColor="#828282"
                  margin="16px 0 0 0"
                >
                  님
                </Text>
              </RowBox>
            </UserInfoWrap>

            <UserMenuWrap>
              {menu.category.map((el: myMenu, idx) => (
                <Link key={`Category${idx}`} href={el.domain}>
                  <CategoryWrap>
                    <CategoryLogo />
                    <Text
                      cursorStyle={true}
                      fontColor={
                        el.domain === router.pathname ? `#000000` : `#828282`
                      }
                      fontSize="18px"
                      bold={el.domain === router.pathname}
                    >
                      {el.title}
                    </Text>
                  </CategoryWrap>
                </Link>
              ))}
            </UserMenuWrap>
          </ColumnBox>

          <SiteMenuWrap>
            {menu.siteDefaultMenu.map((el: myMenu, idx) => (
              <CategoryWrap key={`SiteMenuWrap${idx}`}>
                <CategoryLogo key={`SiteMenuLogo${idx}`} />
                <Text
                  cursorStyle={true}
                  fontColor={
                    el.domain === router.pathname ? `#000000` : `#828282`
                  }
                  fontSize="18px"
                  bold={el.domain === router.pathname}
                >
                  {el.title}
                </Text>
              </CategoryWrap>
            ))}
          </SiteMenuWrap>
        </MenuContentsWrap>
      </MenuWrapper>
    </Box>
  );
}

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 330px;
  height: 100vh;
  border-radius: 0 24px 24px 0;
  display: flex;
  flex-direction: column;
  background-color: #fffffff1;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.377);
`;

const Box = styled.div`
  width: 330px;
  height: 100vh;
`;

const MenuHeader = styled.div`
  width: 330px;
  min-height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0 24px 0 0;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 16%);
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const MenuContentsWrap = styled.div`
  margin: 48px 20px 0 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.div<imgProps>`
  width: 140px;
  height: 140px;
  background-color: #fdc886;
  box-shadow: 0px 1px 1px 1px rgb(0 0 0 / 5%);
  ${({ imgUrl }) => {
    if (imgUrl) {
      return `
        background-image: url(${imgUrl});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border: 1px solid lightgray
      `;
    }
  }}
`;

const UserMenuWrap = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
`;

const SiteMenuWrap = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  border-top: 2px solid #dedede;
`;

const CategoryWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  cursor: pointer;
`;

const CategoryLogo = styled.div`
  width: 32px;
  height: 32px;
  background-color: #dedede;
  margin-right: 32px;
`;

const RowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.div<styleProp>`
  font-family: noto-sans-cjk-kr;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ fontColor }) => fontColor};
  cursor: default;

  ${({ margin }) => {
    if (margin) {
      return `margin: ${margin};`;
    }
  }}

  ${({ bold }) => {
    if (bold) {
      return `font-weight: bold;`;
    }
  }}

${({ cursorStyle }) => {
    if (cursorStyle) {
      return `cursor: pointer;`;
    }
  }}
`;
