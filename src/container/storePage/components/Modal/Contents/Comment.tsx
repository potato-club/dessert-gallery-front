import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from '/public/svg/common/deleteIcon.svg';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { useDeleteComment } from '../../../../../hooks/useBoard';
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
  profile: any;
  boardId?: number;
  commentId: number;
  writer: boolean;
}
const Comment = ({ ...props }: CommentType) => {
  const { comment, nickname, profile, boardId, commentId, writer } = props;
  console.log(profile);
  const [onArrowClick, setOnArrowClick] = useState<boolean>(false);

  const { deleteCommentMutate, isLoading } = useDeleteComment(boardId || 0);
  return (
    <Container onArrowClick={onArrowClick}>
      <Content>
        <Profile
          src={profile?.fileUrl || '/svg/storePage/DefaultProfileLogo.svg'}
        />
        <Nickname>{nickname}</Nickname>
        <Text>{comment}</Text>
      </Content>
      {writer &&
        (onArrowClick ? (
          <OptionSet>
            <CursorBox>
              <MdKeyboardDoubleArrowRight
                onClick={() => setOnArrowClick(false)}
                color="#828282"
              />
            </CursorBox>
            <DeleteBtn
              onClick={() => {
                deleteCommentMutate(commentId);
              }}
            >
              <DeleteIcon width={15} height={15} />
            </DeleteBtn>
          </OptionSet>
        ) : (
          <OptionSet>
            <CursorBox>
              <MdKeyboardDoubleArrowLeft
                onClick={() => setOnArrowClick(true)}
                color="#828282"
              />
            </CursorBox>
            <DeleteBtn
              onClick={() => {
                deleteCommentMutate(commentId);
              }}
            >
              <DeleteIcon width={15} height={15} />
            </DeleteBtn>
          </OptionSet>
        ))}
    </Container>
  );
};

export default Comment;

const Container = styled.div<{ onArrowClick: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transition: all 200ms ease;
  transform: ${({ onArrowClick }) =>
    onArrowClick ? 'translateX(-45px)' : 'translateX(0px)'};
`;
const Content = styled.div`
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
  max-width: 180px;
  word-break: break-all;
`;
const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;
const OptionSet = styled.div`
  display: flex;
  gap: 30px;
  position: absolute;
  right: -57px;
`;
const CursorBox = styled.div`
  cursor: pointer;
`;
const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  svg {
    color: #ff6f00;
  }
`;
