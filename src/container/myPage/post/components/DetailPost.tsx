import React from "react";
import styled from "styled-components";
import { useGetDetailPost } from "../../../../hooks/useGetDetailPost";
import Image from "next/image";

interface DetailPostProps {
  postId: number;
}

const DetailPost = ({ postId }: DetailPostProps) => {
  const detailPost = useGetDetailPost(postId as number);
  console.log(detailPost?.images);

  return (
    <Background>
      <CloseBtn />
      <Wrapper>
        <ImageBox>
          <Image
            src={detailPost?.images.fileUrl as string}
            width={100}
            height={100}
            alt="Detail Image"
          />
        </ImageBox>
      </Wrapper>
    </Background>
  );
};

export default DetailPost;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const CloseBtn = styled.button`
  width: 100px;
  height: 100px;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
`;
const Wrapper = styled.div`
  width: 65%;
  height: 80%;
  background-color: white;
`;
const ImageBox = styled.div`
  width: 60%;
  height: 100%;
`;
