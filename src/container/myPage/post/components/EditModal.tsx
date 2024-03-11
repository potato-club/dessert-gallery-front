import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import styled, { css, keyframes } from "styled-components";
import ArrowImage from "../../../../../public/SVG/myPage/postPage/arrowImage.svg";
import Extend from "./Extend";
import { postStorePost } from "../../../../apis/controller/postPage";
import { TiDelete } from "react-icons/ti";
import { IoIosAddCircle } from "react-icons/io";

interface EditModalProps {
  images: File[];
  handleClose: () => void;
  handleDone: any;
  handleImagesChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDeleteImage: (indexToDelete: number) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  images,
  handleClose,
  handleDone,
  handleImagesChange,
  handleDeleteImage,
}) => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExtendChange = (newTitle: string, newContent: string) => {
    setTitle(newTitle);
    setContent(newContent);
  };
  useEffect(() => {
    if (images) {
      const previewImagesArray: string[] = [];
      const loadNextImage = (index = 0) => {
        if (index < images.length) {
          const reader = new FileReader();
          reader.onloadend = (e) => {
            previewImagesArray.push(e.target?.result as string);
            if (previewImagesArray.length === images.length) {
              setPreviewImages(previewImagesArray);
            } else {
              loadNextImage(index + 1);
            }
          };
          reader.readAsDataURL(images[index]);
        }
      };

      loadNextImage();
    }
  }, [images]);

  const handleMultiImageBtnClick = () => {
    fileInputRef.current?.click();
  };

  const nextClick = () => {
    if (expanded) {
    } else {
      setExpanded(true);
    }
  };

  const deleteClick = () => {
    if (expanded) {
      setExpanded(false);
    } else {
      handleClose();
    }
  };

  const postClick = () => {
    postStorePost(title, content, images);
    handleDone();
  };
  const multipleImages = images.length > 1;

  const deleteImage = (indexToDelete: number) => {
    handleDeleteImage(indexToDelete);
    setPreviewImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <Background>
      <FormContainer expanded={expanded}>
        <TopContainer>
          <DeleteBox>
            <ArrowImage onClick={deleteClick} />
          </DeleteBox>
          <TitleContainer>
            <Title>{expanded ? "새 게시물 만들기" : "자르기"}</Title>
          </TitleContainer>
          <NextContainer>
            <Next onClick={expanded ? postClick : nextClick}>
              {expanded ? "등록하기" : "다음"}
            </Next>
          </NextContainer>
        </TopContainer>
        <MainContent>
          <ImageContainer ref={imageContainerRef}>
            {previewImages.slice(0, 1).map((previewImage, index) => (
              <ImageViewer
                key={index}
                src={previewImage}
                alt="미리보기 이미지"
              />
            ))}
            <MultiImageWrapper>
              {previewImages.map((previewImage, index) => (
                <ImageWrapper key={index}>
                  <MultiImageViewer
                    key={index}
                    src={previewImage}
                    alt="미리보기 이미지"
                  ></MultiImageViewer>
                  <DeleteBtn onClick={() => deleteImage(index)}>
                    <TiDelete size={30} />
                  </DeleteBtn>
                </ImageWrapper>
              ))}
            </MultiImageWrapper>
            <MultiImageBtn onClick={handleMultiImageBtnClick}>
              <IoIosAddCircle size={40} color="" />
            </MultiImageBtn>
            <input
              type="file"
              accept="image/*"
              multiple
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleImagesChange}
            />
          </ImageContainer>
          <CaptionContainer expanded={expanded}>
            <Extend
              postTitle={title}
              content={content}
              onChange={handleExtendChange}
            />
          </CaptionContainer>
        </MainContent>
      </FormContainer>
    </Background>
  );
};

export default EditModal;

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
const MainContent = styled.div`
  display: flex;
  align-items: flex-start;
`;

const FormContainer = styled.div<{ expanded: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 527px;
  height: 569.6px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: width 0.6s ease-in-out;
  ${(props) =>
    props.expanded &&
    css`
      width: 900px; /* 확장된 상태의 넓이 */
    `}
`;
const TopContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
  justify-content: space-around;
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
const ImageContainer = styled.div`
  width: 527px;
  height: 526px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  overflow: hidden;
  cursor: grab;
`;

const ImageViewer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const MultiImageViewer = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;
const CaptionContainer = styled.div<{ expanded: boolean }>`
  width: 373px;
  height: 100%;
  border-left: 1px solid rgb(219, 219, 219);
  border-bottom-right-radius: 15px;
  overflow: hidden;
  ${(props) =>
    !props.expanded &&
    css`
      display: none;
    `}
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
`;

const MultiImageWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50px;
  display: flex;
  background-color: gray;
  gap: 20px;
  max-width: 450px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  border-radius: 20px;
  padding: 10px;
`;

const DeleteBtn = styled.div`
  width: 30px;
  height: 30px;
  top: 0;
  left: 0;
  color: gray;
  position: absolute;
`;

const ImageWrapper = styled.div`
  position: relative;
`;
