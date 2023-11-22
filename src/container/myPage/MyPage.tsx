import React, { useState } from "react";
import styled from "styled-components";
import Profile from "./components/Profile";
import Calendar from "./components/MyCalendar";
import Menu from "./components/Menu";
import myPageBack from "../../../public/image/myPageBack.png";
import type { roleMyMenu } from "../../types/componentsProps";
import { useUserState, useLoginUserInfo } from "../../hooks/useUser";

const MyPage = () => {
  const { isGuest } = useUserState();
  const { data: userInfo } = useLoginUserInfo();

  const [selectedMenu, setSelectedMenu] = useState<number>(1);
  const [menu, setMenu] = useState<roleMyMenu[]>([
    {
      role: "USER",
      selected: false,
      category: [
        {
          title: "마이페이지",
          menuId: 1,
          selected: true,
        },
        {
          title: "1:1 채팅",
          menuId: 2,
          selected: false,
        },
        {
          title: "내가 쓴 후기",
          menuId: 3,
          selected: false,
        },
        {
          title: "북마크",
          menuId: 4,
          selected: false,
        },
        {
          title: "팔로우 관리",
          menuId: 5,
          selected: false,
        },
      ],
      siteDefaultMenu: [
        {
          title: "고객센터",
          menuId: 12,
          selected: false,
        },
        {
          title: "로그아웃",
          menuId: 13,
          selected: false,
        },
        {
          title: "회원탈퇴",
          menuId: 14,
          selected: false,
        },
      ],
    },
    {
      role: "MANAGER",
      selected: true,
      category: [
        {
          title: "마이페이지",
          menuId: 6,
          selected: true,
        },
        {
          title: "1:1 채팅",
          menuId: 7,
          selected: false,
        },
        {
          title: "캘린더 작성",
          menuId: 8,
          selected: false,
        },
        {
          title: "공지사항",
          menuId: 9,
          selected: false,
        },
        {
          title: "게시물 관리",
          menuId: 10,
          selected: false,
        },
        {
          title: "팔로우 관리",
          menuId: 11,
          selected: false,
        },
      ],
      siteDefaultMenu: [
        {
          title: "고객센터",
          menuId: 12,
          selected: false,
        },
        {
          title: "로그아웃",
          menuId: 13,
          selected: false,
        },
        {
          title: "회원탈퇴",
          menuId: 14,
          selected: false,
        },
      ],
    },
  ]);

  // 선택한 메뉴 업데이트
  const handleMenuClick = (role: string, menuId: number) => {
    // 복제
    const updatedMenu = [...menu];

    // 선택한 메뉴 찾기
    updatedMenu.forEach((roleMenu) => {
      if (roleMenu.role === role) {
        roleMenu.category.forEach((item) => {
          if (item.menuId === menuId) {
            item.selected = true;
          } else {
            item.selected = false;
          }
        });
        roleMenu.siteDefaultMenu.forEach((item) => {
          if (item.menuId === menuId) {
            item.selected = true;
          } else {
            item.selected = false;
          }
        });
      }
    });

    // 상태 업데이트
    setMenu(updatedMenu);
    setSelectedMenu(menuId);
  };

  return (
    <PageWrapper>
      <Menu
        menu={menu.filter((e) => e.selected)[0]}
        onClickMenu={handleMenuClick}
      />
      <Contents>{selectedMenu === 1 && <Profile />}</Contents>
      <Contents>{selectedMenu === 8 && <Calendar />}</Contents>
    </PageWrapper>
  );
};

export default MyPage;

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  border-radius: 0 16px 16px 0;
  background-color: #fcf0e1;
  background-image: url(${myPageBack.src});
  background-position: right top;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  display: flex;
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
`;
