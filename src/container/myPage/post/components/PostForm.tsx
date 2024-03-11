// PostForm.tsx

import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import EditModal from "./EditModal";
import myPageBack from "../../../../../public/image/myPageBack.png";

interface PostFormProps {
  handleDone(): any;
}

const PostForm: React.FC<PostFormProps> = ({ handleDone }) => {
  const [images, setImages] = useState<File[]>([]);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setImages((prevImages) => [...prevImages, file]);
    }
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };
  const handleDeleteImage = (indexToDelete: number): void => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(indexToDelete, 1);
      return updatedImages;
    });
  };

  return (
    <>
      {!showEditModal && (
        <Background>
          <FormContainer>
            <TitleContainer>
              <FormTitle>게시물 올리기</FormTitle>
            </TitleContainer>
            <DragContainer
              onDrop={(e) => e.preventDefault()}
              onDragOver={(e) => e.preventDefault()}
            >
              <ExplanationBox>
                <Explanation>사진을 올리거나 가져와주세요!</Explanation>
              </ExplanationBox>
              <ButtonBox>
                <Button onClick={handleButtonClick}>컴퓨터에서 선택</Button>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  id="fileInput"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </ButtonBox>
            </DragContainer>
          </FormContainer>
        </Background>
      )}
      {showEditModal && images.length > 0 && (
        <EditModal
          images={images}
          handleClose={handleCloseEditModal}
          handleDone={handleDone}
          handleImagesChange={handleImageChange}
          handleDeleteImage={handleDeleteImage}
        />
      )}
    </>
  );
};

export default PostForm;

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

const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 527px;
  height: 569.6px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 527px;
  height: 42.2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fdc886;
`;

const DragContainer = styled.div`
  width: 527px;
  height: 527px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${myPageBack.src});
  background-size: 100%;
  row-gap: 20px;
`;

const FormTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
`;

const Explanation = styled.div`
  height: 15px;
  display: block;
  font-size: 20px;
  font-weight: 400;
  white-space: nowrap;
`;

const ExplanationBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 133.85px;
  height: 32px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  background-color: #ff8d00;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #e37d00;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
