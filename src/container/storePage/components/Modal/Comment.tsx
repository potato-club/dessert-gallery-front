import React from "react";
import styled from "styled-components";
import { DefaultProfileLogo } from "../../../../../public/svg";

/**
 * props 설명
 * img : 유저의 프로필, 기본값은 DefaultProfileLogo
 * nickname : 유저의 닉네임 or 아이디
 * text : 유저가 작성한 댓글
 */

interface CommentType {
  img?: any;
  nickname: string;
  text: string;
}
const Comment = () => {
  return (
    <Container>
      <DefaultProfileLogo width="30px" height="30px" />
      <Nickname>아이디</Nickname>
      <Text>게시글과 관련된 댓글을 달았습니다</Text>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Nickname = styled.div`
  color: #000;
  font-size: 10px;
  font-weight: 700;
`;
const Text = styled.span`
  color: #000;
  font-size: 10px;
  font-weight: 500;
  max-width: 260px;
`;
