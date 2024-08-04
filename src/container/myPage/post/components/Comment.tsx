import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdBlock } from "react-icons/md";
import { blockComment } from "../../../../apis/controller/postPage";

const Comment = ({ ...props }: any) => {
  const { comment, nickname, profile, commentId, writer, storeId } = props;

  const [onArrowClick, setOnArrowClick] = useState<boolean>(false);

  return (
    <Wrapper onArrowClick={onArrowClick}>
      <CommentDiv>
        <CommentPofile>
          <Image
            src={profile?.fileUrl || "/svg/storePage/DefaultProfileLogo.svg"}
            width={35}
            height={35}
            alt=""
          />
        </CommentPofile>
        <CommentName>{nickname}</CommentName>
        <CommentContent>{comment}</CommentContent>
      </CommentDiv>
      {!writer && (
        <CommentDetail>
          {onArrowClick ? (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setOnArrowClick(!onArrowClick)}
            >
              <MdKeyboardDoubleArrowRight color="#828282" />
            </div>
          ) : (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setOnArrowClick(!onArrowClick)}
            >
              <MdKeyboardDoubleArrowLeft color="#828282" />
            </div>
          )}
          <BlackButton onClick={() => blockComment(storeId, nickname)}>
            <MdBlock />
          </BlackButton>
        </CommentDetail>
      )}
    </Wrapper>
  );
};

export default Comment;
const Wrapper = styled.div<{ onArrowClick: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transition: all 200ms ease;
  transform: ${({ onArrowClick }) =>
    onArrowClick ? "translateX(-50px)" : "translateX(0px)"};

  &::-webkit-scrollbar {
    display: none;
  }
`;
const CommentDiv = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
`;
const CommentPofile = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 20px;
  overflow: hidden;
`;
const CommentName = styled.div`
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;
const CommentContent = styled.div`
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const CommentDetail = styled.div`
  display: flex;
  gap: 30px;
  position: absolute;
  right: -40px;
`;

const BlackButton = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
