import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import defaultImage from "../../../../../public/image/defaultPhoto.png";
import PostCaption from "./PostCaption";
import { putStorePost } from "../../../../apis/controller/postPage";
import SlideImage from "../../../../components/SlideImage/SlideImage";
import { IoIosAddCircle } from "react-icons/io";

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

  const [imageSrcSend, setImageSrcSend] = useState(
    detailPost.images.map((image: { fileUrl: any; fileName: any }) => ({
      fileUrl: image.fileUrl,
      fileName: image.fileName,
    }))
  );

  const [deleteFiles, setDeleteFiles] = useState<any>([]);
  const [images, setImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // const handleDeleteImage = (index: string) => {
  //   const updatedImageSrc = imageSrc.filter((e: string) => e !== index);
  //   setImageSrc(updatedImageSrc);
  //   const updateImageSrcSend = imageSrcSend.filter(
  //     (e: { fileUrl: string }) => e.fileUrl === index
  //   );
  //   const temp = deleteFiles.concat(updateImageSrcSend);
  //   setDeleteFiles(temp);
  // };
  const handleDeleteImage = (index: string) => {
    // 이미지 URL을 기반으로 해당 이미지를 제외한 새로운 이미지 URL 배열 생성
    const updatedImageSrc = imageSrc.filter((url: string) => url !== index);
    setImageSrc(updatedImageSrc);

    // 삭제할 이미지의 파일 정보를 deleteFiles 배열에 추가
    const deletedImage = imageSrcSend.find(
      (image: any) => image.fileUrl === index
    );
    if (deletedImage) {
      setDeleteFiles((prevDeleteFiles: any) => [
        ...prevDeleteFiles,
        deletedImage,
      ]);

      // 실제 파일 삭제
      const remainingFiles = images.filter(
        (file) => URL.createObjectURL(file) === index
      );
      setImages(remainingFiles);

      // 새로 추가된 파일인 경우 실제 파일을 삭제
    }
  };

  const postClick = () => {
    putStorePost(postId, title, content, deleteFiles, images);
    onCancelClick();
  };
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const handleMultiImageBtnClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || [];
    const newImages = Array.from(files);

    setImages((prevImages) => [...prevImages, ...newImages]);

    const newImageSrcs = newImages.map((file) => URL.createObjectURL(file));
    setImageSrc((prevImageSrcs: any) => [...prevImageSrcs, ...newImageSrcs]);
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
            <MultiImageBtn onClick={handleMultiImageBtnClick}>
              <IoIosAddCircle size={40} color="" />
            </MultiImageBtn>
            <input
              type="file"
              accept="image/*"
              multiple
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleImageChange}
            />
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
  position: relative;
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

const MultiImageBtn = styled.div`
  width: 50px;
  height: 50px;
  bottom: 50px;
  left: 50px;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 20;
`;
