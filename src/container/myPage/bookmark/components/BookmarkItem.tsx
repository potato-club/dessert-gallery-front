import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostModal from "../../../storePage/components/Modal";
import { useRecoilState } from "recoil";
import { modalBg } from "../../../../recoil/modalBg/atom";
import { useRouter } from "next/router";

const BookmarkItem = ({ ...props }) => {
  const router = useRouter();
  const [onModalBg, setOnModalBg] = useRecoilState(modalBg);

  useEffect(() => {
    if (onModalBg === false)
      router.push(router.pathname, undefined, {
        shallow: true,
      });
  }, [onModalBg]);

  const onClick = () => {
    setOnModalBg(true);
    router.push(`${router.pathname}?boardId=${props.boardId}`, undefined, {
      shallow: true,
    });
  };

  return (
    <>
      <Container onClick={() => onClick()}>
        <Image src={props.thumbnail.fileUrl} width={240} height={240} alt="" />
      </Container>
      {onModalBg && props.boardId == router.query.boardId && (
        <PostModal boardId={props.boardId} />
      )}
    </>
  );
};

export default BookmarkItem;

const Container = styled.div`
  width: 240px;
  height: 240px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
  background-color: white;
  cursor: pointer;
`;
