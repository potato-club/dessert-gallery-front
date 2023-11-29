import styled from "styled-components";
import Image from "next/image";
import React from "react";
import myPageLogo from "../../../../public/image/myPageLogo.png";
import type { roleMyMenu, myMenu } from "../../../types/componentsProps";

interface styleProp {
  fontSize: string;
  bold: boolean;
  fontColor: string;
  margin?: string;
  cursorStyle?: boolean;
}

export default function Menu({
  menu,
  onClickMenu,
}: {
  menu: roleMyMenu;
  onClickMenu: (role: string, menuId: number) => void;
}) {
  const onClickMoveMain = () => {
    window.location.href = "/";
  };

  return (
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
            <ProfileImage />
            <RowBox>
              <Text
                bold
                fontSize="20px"
                fontColor="#000000"
                margin="16px 4px 0 0"
              >
                바닐라빈빈
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
            {menu.category.map((el: myMenu) => (
              <CategoryWrap
                key={`CategoryWrap${el.menuId}`}
                onClick={() => onClickMenu(menu.role, el.menuId)}
              >
                <CategoryLogo key={`CategoryLogo${el.menuId}`} />
                <Text
                  cursorStyle={true}
                  fontColor={el.selected ? `#000000` : `#828282`}
                  fontSize="18px"
                  bold={el.selected}
                >
                  {el.title}
                </Text>
              </CategoryWrap>
            ))}
          </UserMenuWrap>
        </ColumnBox>

        <SiteMenuWrap>
          {menu.siteDefaultMenu.map((el: myMenu) => (
            <CategoryWrap
              key={`SiteMenuWrap${el.menuId}`}
              onClick={() => onClickMenu(menu.role, el.menuId)}
            >
              <CategoryLogo key={`SiteMenuLogo${el.menuId}`} />
              <Text
                cursorStyle={true}
                fontColor={el.selected ? `#000000` : `#828282`}
                fontSize="18px"
                bold={el.selected}
              >
                {el.title}
              </Text>
            </CategoryWrap>
          ))}
        </SiteMenuWrap>
      </MenuContentsWrap>
    </MenuWrapper>
  );
}

const MenuWrapper = styled.div`
  width: 330px;
  height: auto;
  border-radius: 0 24px 24px 0;
  display: flex;
  flex-direction: column;
  background-color: #fffffff1;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.377);
`;

const MenuHeader = styled.div`
  width: 100%;
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
`;

const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.div`
  width: 140px;
  height: 140px;
  background-color: #fdc886;
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
