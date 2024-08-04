import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import myPageBack from '../../../../public/image/myPageBack.png';
import { useRouter } from 'next/router';
import {
  useNoneLoginBlocking,
  useNoneStoreBlocking,
  useUserRoleRouteBlocking,
} from '../../../hooks/useMypageRoute';

const MyPageLayout = ({ ...props }) => {
  const router = useRouter();

  useNoneLoginBlocking();
  useNoneStoreBlocking();
  useUserRoleRouteBlocking();

  return (
    <PageWrapper isCalendarPage={router.pathname === '/myPage/calendar'}>
      <Menu />
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
    isCalendarPage ? '#fffdf9' : '#fcf0e1'};
  background-image: ${({ isCalendarPage }) =>
    !isCalendarPage && `url(${myPageBack.src})`};
  background-position: right top;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  display: flex;
`;
