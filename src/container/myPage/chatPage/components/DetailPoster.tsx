import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { useGetDetailBoard } from "../../../../hooks/useBoard";
import Bookmark from "../../../../components/Bookmark";
import { useToggleBookmark } from "../../../../hooks/useToggleBookmark";
import { IoIosSend } from "react-icons/io";
import { useStompClientContext } from "../context/StompClientProvider";

const DetailPoster = ({ ...props }) => {
  const { data: detailPoster } = useGetDetailBoard(props.boardId);
  const { toggleBookmarkState } = useToggleBookmark(props.boardId);

  const { messageHandler } = useStompClientContext();

  const handlePosterClick = () => {};

  return (
    <Container
      onClick={() => {
        messageHandler(
          `${props.userInfo.nickname}님이 [${detailPoster.title}]게시물을 태그했습니다./boardInfoStringboardId=${props.boardId}&thumbnail=${props.thumbnail}`,
          "BOARD"
        );
      }}
    >
      <ImageWrapper>
        <IconWrapper>
          <Bookmark
            boardId={props.boardId}
            size="small"
            onBookmark={detailPoster && detailPoster.bookmark}
            onClickBookmark={() => toggleBookmarkState()}
          />
          <SendWrapper>
            <IoIosSend size={17} color="#FF8D00" />
          </SendWrapper>
        </IconWrapper>

        <Image src={props.thumbnail} width={184} height={150} alt="" />
      </ImageWrapper>
      {detailPoster && (
        <BoardInfoContent>
          <Title>{detailPoster.title}</Title>
          <Content>{detailPoster.content}</Content>
          <TagList>
            {detailPoster.tags.map((item: any, idx: number) => (
              <Tag key={idx}>{item}</Tag>
            ))}
          </TagList>
        </BoardInfoContent>
      )}
    </Container>
  );
};

export default DetailPoster;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 184px;
  height: 300px;
  background-color: white;
  box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 15%);
  border-radius: 0px 0px 16px 16px;
  cursor: pointer;
`;
const ImageWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid #dedede;
  background-color: #fdc886;
  width: 184px;
  height: 150px;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  z-index: 3;
  right: 0;
  margin: 3px 3px 0px 0px;
`;
const BoardInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 184px;
  height: 100%;
  padding: 15px 12px;
`;
const Title = styled.span`
  font-size: 13px;
  font-weight: bold;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
const Content = styled.p`
  font-size: 12px;
  height: 25px;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 600;
  color: #ff6f00;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
const Tag = styled.span`
  margin-right: 5px;
`;
const SendWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  border-radius: 100%;
  background-color: white;
  border: 1px solid #ff8d00;
  padding: 0px;
  &:hover {
    cursor: pointer;
  }
`;
