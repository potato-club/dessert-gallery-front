import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import defaultImage from "../../../../../public/image/defaultPhoto.png";
import PostCaption from "./PostCaption";
import { putStorePost } from "../../../../apis/controller/postPage";
import SlideImage from "../../../../components/SlideImage/SlideImage";

const EditPostModal = ({
  onCancelClick,
  storeInfo,
  detailPost,
  postId,
}: any) => {
  const cancelClick = () => {
    onCancelClick();
  };

  const [title, setTitle] = useState(`${detailPost.title}`);
  const [content, setContent] = useState(`${detailPost.content}`);
  const [imageSrc, setImageSrc] = useState(
    detailPost.images.map((image: any) => image.fileUrl)
  );
  // 삭제 이미지 확인을 위한 데이터
  const [imageSrcSend, setImageSrcSend] = useState(detailPost.images.map((image: { fileUrl: any; fileName: any; }) => (
    {
     fileUrl: image.fileUrl,
     fileName: image.fileName
   })
 ));
  //백엔드에 보낼 지울 데이터
  let [deleteFiles, setDeleteFiles] = useState<any>([]);

  const handleDeleteImage = (index: string) => {
    console.log("imageSrc",imageSrc)
    // 이미지 배열에서 해당 이미지를 제외한 새로운 배열 생성
    const updatedImageSrc = imageSrc.filter((e: string) => e !== index);
    // 새로운 이미지 배열로 상태 업데이트
    setImageSrc(updatedImageSrc);

    //삭제 이미지 확인
    const updateImageSrcSend = imageSrcSend.filter((e: { fileUrl: string; }) => e.fileUrl === index);

    console.log("지운 친구들: ",updateImageSrcSend)

    //백엔드에 보낼 삭제 이미지 데이터 정리
    let temp = deleteFiles.concat(updateImageSrcSend)
    setDeleteFiles(temp);
    

    console.log("지운 거 저장: ", deleteFiles)

    console.log(index);
  };

  const postClick = () => {
    putStorePost(postId, title, content, deleteFiles);
    onCancelClick();
  };
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <Background onClick={cancelClick}>
      <Wrapper onClick={handleModalClick}>
        <TopContainer>
          <DeleteBox>
            <Next onClick={cancelClick}>취소</Next>
          </DeleteBox>
          <TitleContainer>
            <Title>정보 수정</Title>
          </TitleContainer>
          <NextContainer>
            <Next onClick={postClick}>완료</Next>
          </NextContainer>
        </TopContainer>
        <InfoWarpper>
          <ImageBox>
            <SlideImage
              srcArray={imageSrc}
              width={527}
              height={527}
              dotIndicator={true}
              moveBtnType="show"
              deleteBtn={true}
              onDeleteImage={handleDeleteImage}
            />
          </ImageBox>
          <AddWrapper>
            <InfoBox>
              <ProfileBox>
                <Image
                  width={60}
                  height={60}
                  alt={""}
                  src={
                    storeInfo?.storeImage?.fileUrl
                      ? storeInfo?.storeImage?.fileUrl
                      : defaultImage
                  }
                />
              </ProfileBox>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <ProfileName>{storeInfo?.name}</ProfileName>
                <ProfileInfo>{storeInfo?.info}</ProfileInfo>
              </div>
            </InfoBox>
            <PostCaption
              title={title}
              content={content}
              tag={detailPost.tags}
              onTitleChange={setTitle}
              onContentChange={setContent}
            />
          </AddWrapper>
        </InfoWarpper>
      </Wrapper>
    </Background>
  );
};

export default EditPostModal;
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
  z-index: 20;
`;

const Wrapper = styled.div`
  width: 900px;
  height: 570px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  cursor: auto;
`;

const TopContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
  justify-content: center;
  gap: 130px;
`;
const DeleteBox = styled.div`
  width: 48px;
  height: 42.2px;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  width: 407px;
  height: 42.2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
`;

const NextContainer = styled.div`
  width: 60px;
  height: 42.2px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Next = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #ff8d00;
  cursor: pointer;
  &:hover {
    color: rgb(0, 55, 107);
  }
`;
const InfoWarpper = styled.div`
  display: flex;
`;
const ImageBox = styled.div`
  width: 527px;
  height: 527.8px;
  border-bottom-left-radius: 15px;
  overflow: hidden;
`;

const AddWrapper = styled.div`
  width: 373px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans CJK KR";
`;

const InfoBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  gap: 20px;
`;

const ProfileBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

const ProfileName = styled.div`
  height: 18px;
  font-size: 21px;
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const ProfileInfo = styled.div`
  color: #ff6f00;
  font-size: 15px;
  font-weight: 500;
`;
