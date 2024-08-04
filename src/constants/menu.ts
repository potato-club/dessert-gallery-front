export const menuList = Object.freeze({
  USER: [
    {
      title: '마이페이지',
      domain: '/myPage',
    },
    {
      title: '1:1 채팅',
      domain: '/myPage/chat',
    },
    {
      title: '내가 쓴 후기',
      domain: '/myPage/review',
    },
    {
      title: '북마크',
      domain: '/myPage/bookmark',
    },
    {
      title: '팔로우 관리',
      domain: '/myPage/follow',
    },
  ],
  MANAGER: [
    {
      title: '마이페이지',
      domain: '/myPage',
    },
    {
      title: '1:1 채팅',
      domain: '/myPage/chat',
    },
    {
      title: '캘린더 작성',
      domain: '/myPage/calendar',
    },
    {
      title: '공지사항',
      domain: '/myPage/notice',
    },
    {
      title: '게시물 관리',
      domain: '/myPage/post',
    },
    {
      title: '차단된 계정',
      domain: '/myPage/blocked',
    },
  ],
  default: [
    {
      title: '로그아웃',
      domain: 'logout',
    },
    {
      title: '회원탈퇴',
      domain: 'withdrawal',
    },
  ],
});
