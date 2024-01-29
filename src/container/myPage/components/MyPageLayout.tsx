import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import myPageBack from "../../../../public/image/myPageBack.png";
import type { roleMyMenu } from "../../../types/componentsProps";
import { useUserState, useLoginUserInfo } from "../../../hooks/useUser";
import { menuList } from "../../../constants/menu";
import { useRouter } from "next/router";

const MyPageLayout = ({ ...props }) => {
  const router = useRouter();

  const { isGuest } = useUserState();
  const { data: userInfo } = useLoginUserInfo();

  const [menu, setMenu] = useState<roleMyMenu>({
    role: "USER",
    category: [],
    siteDefaultMenu: [],
  });

  useEffect(() => {
    if (!isGuest) {
      if (userInfo && userInfo.userRole === "USER") {
        setMenu({
          role: userInfo.userRole,
          category: [...menuList.USER],
          siteDefaultMenu: [...menuList.default],
        });
      } else if (userInfo && userInfo.userRole === "MANAGER") {
        setMenu({
          role: userInfo.userRole,
          category: [...menuList.MANAGER],
          siteDefaultMenu: [...menuList.default],
        });
      }
    }
  }, [userInfo, isGuest]);

  useEffect(() => {
    if (userInfo && userInfo.userRole === "USER") {
      const onlyManager = [
        "/myPage/calendar",
        "/myPage/notice",
        "/myPage/post",
      ];
      if (onlyManager.includes(router.pathname)) router.push("/myPage");
    }
    if (userInfo && userInfo.userRole === "MANAGER") {
      const onlyUser = ["/myPage/review", "/myPage/bookmark"];
      if (onlyUser.includes(router.pathname)) router.push("/myPage");
    }
  }, [userInfo, router]);

  return (
    <PageWrapper isCalendarPage={router.pathname === "/myPage/calendar"}>
      <Menu menu={menu} userInfo={userInfo} />
      {props.children}
    </PageWrapper>
  );
};

export default MyPageLayout;

const PageWrapper = styled.div<{ isCalendarPage: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 0 16px 16px 0;
  background-color: ${({ isCalendarPage }) =>
    isCalendarPage ? "#fffdf9" : "#fcf0e1"};
  background-image: ${({ isCalendarPage }) =>
    !isCalendarPage && `url(${myPageBack.src})`};
  background-position: right top;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  display: flex;
`;

const Contents = styled.div``;
