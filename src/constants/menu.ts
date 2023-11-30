export const menuList = Object.freeze({
  USER: [
    {
      title: "마이페이지",
      domain: "/myPage",
    },
    {
      title: "1:1 채팅",
      domain: "/myPage/chat",
    },
    {
      title: "내가 쓴 후기",
      domain: "/myPage/review",
    },
    {
      title: "북마크",
      domain: "/myPage/bookmark",
    },
    {
      title: "팔로우 관리",
      domain: "/myPage/follow",
    },
  ],
  MANAGER: [
    {
      title: "마이페이지",
      domain: "/myPage/info",
    },
    {
      title: "1:1 채팅",
      domain: "/myPage/chat",
    },
    {
      title: "캘린더 작성",
      domain: "/myPage/calendar",
    },
    {
      title: "공지사항",
      domain: "/myPage/notice",
    },
    {
      title: "게시물 관리",
      domain: "/myPage/post",
    },
    {
      title: "팔로우 관리",
      domain: "/myPage/follow",
    },
  ],
  default: [
    {
      title: "고객센터",
      domain: "/myPage/services",
    },
    {
      title: "로그아웃",
      domain: "/myPage/logout",
    },
    {
      title: "회원탈퇴",
      domain: "/myPage/withdrawal",
    },
  ],
});
