import React, { useState } from "react";
import styled from "styled-components";
import {
  useGetDetailPost,
  useGetPostComment,
} from "../../../../hooks/useGetDetailPost";
import Image from "next/image";
import useGetStoreInfo from "../../../../hooks/useGetStoreInfo";
import defaultImage from "../../../../../public/image/defaultPhoto.png";
import ThreeDot from "../../../../../public/SVG/myPage/postPage/ThreeDot.svg";
import { deletePost } from "../../../../apis/controller/postPage";
import ToggleOptionBox from "../../../../components/ToggleOptionBox";
import EditPostModal from "./EditPostModal";

interface DetailPostProps {
  postId: number;
}

const DetailPost = ({ postId }: DetailPostProps) => {
  const [modalState, setModalState] = useState(false);
  const detailPost = useGetDetailPost(postId);
  const storeInfo = useGetStoreInfo();
  const postComment = useGetPostComment(postId);
  const [putModalState, setPutModalState] = useState(false);

  const deleteClick = () => {
    deletePost(postId);
    alert("삭제 되었습니다");
  };

  const modalOption = [
    {
      title: "삭제하기",
      onClickHandler: () => {
        deleteClick();
        window.location.reload();
      },
    },
  ];

  return (
    <Background>
      <CloseBtn />
      <Wrapper>
        <ImageBox>
          <Image
            src={detailPost?.images[0].fileUrl as string}
            width={750}
            height={800}
            alt=""
          />
        </ImageBox>
        <InfoWrapper>
          <InfoBox>
            <ProfileImg>
              <Image
                src={
                  storeInfo?.storeImage?.fileUrl
                    ? storeInfo?.storeImage?.fileUrl
                    : defaultImage
                }
                alt={storeInfo?.storeImage.fileName}
                width={80}
                height={80}
              />
            </ProfileImg>
            <NameBox>
              <Name> {storeInfo?.name}</Name>
              <Content>{storeInfo?.content}</Content>
            </NameBox>
            {modalState && (
              <ModalOptionBox>
                <ToggleOptionBox contents={modalOption} />
              </ModalOptionBox>
            )}
            <SvgBox onClick={() => setModalState(!modalState)}>
              <ThreeDot />
            </SvgBox>
          </InfoBox>
          <ContentBox>
            <Adress>{storeInfo?.address}</Adress>
            <PostTitle>{detailPost?.title}</PostTitle>
            <PostContent>{detailPost?.content}</PostContent>
            <TagBox>{detailPost?.tags}</TagBox>
            <CommentBox>
              {postComment?.map((comment, index) => (
                <Comment key={index}>
                  <CommentName>{comment.nickname}</CommentName>
                  <CommentContent>{comment.comment}</CommentContent>
                </Comment>
              ))}
            </CommentBox>
          </ContentBox>
          <ModifyBox>
            <ModifyBtn onClick={() => setPutModalState(true)}>
              수정하기
            </ModifyBtn>
            {putModalState && <EditPostModal />}
          </ModifyBox>
        </InfoWrapper>
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
  width: 1200px;
  height: 800px;
  background-color: white;
  display: flex;
  font-family: "Noto Sans CJK KR";
`;
const ImageBox = styled.div`
  width: 750px;
  height: 800px;
  border: 1px solid #c5c5c5;
`;
const InfoWrapper = styled.div`
  width: 450px;
  height: 800px;
  background-color: #fffdf9;
`;
const InfoBox = styled.div`
  width: 450px;
  height: 130px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #fdc886;
  gap: 30px;
`;

const ProfileImg = styled.div`
  margin-left: 50px;
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 100%;
  overflow: hidden;
`;
const NameBox = styled.div`
  width: 200px;
  height: 150px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const Name = styled.div`
  color: #000;
  font-size: 21px;
  font-weight: 700;
`;
const Content = styled.div`
  color: #ff6f00;
  font-size: 15px;
  font-weight: 500;
`;

const Adress = styled.div`
  color: #828282;
  font-size: 17px;
  font-weight: 700;
`;

const ContentBox = styled.div`
  height: 607px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const PostTitle = styled.div`
  color: #000;
  font-size: 28px;
  font-weight: 700;
  height: 60px;
  overflow: auto;
`;
const PostContent = styled.div`
  color: #000;
  font-size: 17px;
  height: 120px;
  overflow: auto;
`;
const TagBox = styled.div`
  width: 100%;
  height: 100px;
  color: #ff6f00;
  display: flex;
  gap: 20px;
`;
const CommentBox = styled.div`
  width: 100%;
  height: 170px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Comment = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  gap: 20px;
`;
const CommentName = styled.div`
  font-size: 11px;
  font-weight: 500;
`;
const CommentContent = styled.div`
  font-size: 11px;
  font-weight: 700;
`;
const ModifyBox = styled.div`
  width: 100%;
  height: 63px;
  background-color: #fcf0e1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModifyBtn = styled.button`
  color: #ff6f00;
  font-size: 25px;
  font-weight: 700;
  border: none;
  background-color: #fcf0e1;
  cursor: pointer;
`;

const ModalOptionBox = styled.div`
  position: absolute;
  top: 110px;
  right: 549px;
  z-index: 1;
`;

const SvgBox = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;
