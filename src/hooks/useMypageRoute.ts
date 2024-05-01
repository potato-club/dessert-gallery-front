import { useEffect, useState } from 'react';
import { roleMyMenu } from '../types/componentsProps';
import { useExistStore, useLoginUserInfo, useUserState } from './useUser';
import { menuList } from '../constants/menu';
import { useRouter } from 'next/router';

export const useMypageMenu = () => {
  const { isGuest } = useUserState();
  const { data: userInfo } = useLoginUserInfo();
  const [menu, setMenu] = useState<roleMyMenu>({
    role: 'USER',
    category: [],
    siteDefaultMenu: [],
  });

  useEffect(() => {
    if (!isGuest) {
      if (userInfo && userInfo.userRole === 'USER') {
        setMenu({
          role: userInfo.userRole,
          category: [...menuList.USER],
          siteDefaultMenu: [...menuList.default],
        });
      } else if (userInfo && userInfo.userRole === 'MANAGER') {
        setMenu({
          role: userInfo.userRole,
          category: [...menuList.MANAGER],
          siteDefaultMenu: [...menuList.default],
        });
      }
    }
  }, [userInfo, isGuest]);

  return { menu, userInfo };
};

export const useNoneStoreBlocking = () => {
  const router = useRouter();
  const { data: userInfo } = useLoginUserInfo();
  const { data: existStore } = useExistStore();

  useEffect(() => {
    if (userInfo && userInfo.userRole === 'MANAGER') {
      const mustExistRoute = [
        '/myPage/calendar',
        '/myPage/notice',
        '/myPage/review',
        '/myPage/post',
        '/myPage/blocked',
      ];
      if (
        existStore?.res === 'noneStore' &&
        mustExistRoute.includes(router.pathname)
      ) {
        alert('가게를 생성해주세요');
        router.push('/myPage');
      }
    }
  }, [router, existStore]);
};

export const useUserRoleRouteBlocking = () => {
  const router = useRouter();
  const { data: userInfo } = useLoginUserInfo();

  useEffect(() => {
    if (userInfo && userInfo.userRole === 'USER') {
      const onlyManager = [
        '/myPage/calendar',
        '/myPage/notice',
        '/myPage/post',
        '/myPage/blocked',
      ];
      if (onlyManager.includes(router.pathname)) router.push('/myPage');
    }
    if (userInfo && userInfo.userRole === 'MANAGER') {
      const onlyUser = ['/myPage/review', '/myPage/bookmark', '/myPage/follow'];
      if (onlyUser.includes(router.pathname)) router.push('/myPage');
    }
  }, [userInfo, router]);
};
