import React from "react";
import styled from "styled-components";

/**
 * props 설명
 * profile : 유저의 프로필, 기본값은 DefaultProfileLogo
 * nickname : 유저의 닉네임 or 아이디
 * comment : 유저가 작성한 댓글
 * createdDate : 유저가 작성한 시간
 */

interface CommentType {
  comment: string;
  createdDate?: string;
  nickname: string;
  profile: string | null;
}
const Comment = ({ ...props }: CommentType) => {
  const { comment, nickname, profile } = props;
  return (
    <Container>
      <Profile src={profile || "/svg/storePage/DefaultProfileLogo.svg"} />
      <Nickname>{nickname}</Nickname>
      <Text>{comment}</Text>
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
const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;
