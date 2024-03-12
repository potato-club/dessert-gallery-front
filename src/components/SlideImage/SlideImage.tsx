import Image from "next/image";
import { slideImageValue } from "../../types/componentsProps";
import { useState } from "react";
import DotIndicator from "./DotIndicator";
import Bookmark from "./Bookmark";
import { RightMoveButtonIcon, LeftMoveButtonIcon } from "../../../public/svg";
import {
  Wrapper,
  ImageWrap,
  RightMoveButton,
  LeftMoveButton,
  MoveWrap,
  MoveAllbutton,
  SvgWrap,
  BottomComponent,
  BottomCenterComponent,
  DeleteBtn,
} from "./SlideImage.style";
import followAction from "../../utils/followAction";
import { SlTrash } from "react-icons/sl";

function SlideImage({
  storeId,
  srcArray,
  imageName,
  width = 304,
  height = 304,
  moveBtnType = "none",
  size = "big",
  dotIndicator = false,
  bookmark = false,
  onBookmark = false,
  borderRadius = false,
  deleteBtn = false,
  onDeleteImage,
  children = <></>,
}: slideImageValue) {
  const [imgCnt, setImgCnt] = useState<number>(0);
  const [onBookmarkState, setOnBookmarkState] = useState<boolean>(onBookmark);
  const maxImgCnt = srcArray.length - 1;

  const onClickDeleteImage = (index: string) => {
    if (onDeleteImage) {
      onDeleteImage(index);
    }
  };

  const onClickMoveLeft = () => {
    if (imgCnt === 0) {
      return;
    } else {
      setImgCnt((prev) => prev - 1);
    }
  };

  const onClickMoveRight = () => {
    if (imgCnt === maxImgCnt) {
      return;
    } else {
      setImgCnt((prev) => prev + 1);
    }
  };

  const onClickBookmark = async (storeId: number) => {
    followAction(onBookmarkState,storeId)
    if(onBookmarkState){
      alert('해당 손님/가게를 언팔로우했습니다.')
    }else{
      alert('해당 가게를 팔로우했습니다.')
    }
    setOnBookmarkState((prev) => !prev);
  };

  return (
    <Wrapper
      borderRadius={borderRadius}
      hoverCss={moveBtnType}
      width={width}
      height={height}
    >
      <MoveWrap>
        {moveBtnType === "none"
          ? imgCnt !== 0 && (
              <MoveAllbutton
                width={width}
                height={height}
                onClick={onClickMoveLeft}
              />
            )
          : imgCnt !== 0 && (
              <LeftMoveButton
                hoverCss={moveBtnType}
                width={width}
                height={height}
                onClick={onClickMoveLeft}
              >
                <SvgWrap>
                  <LeftMoveButtonIcon
                    width={`${width / 30}px`}
                    height={`${height / 30}px`}
                    style={{ filter: "drop-shadow(30px 10px 4px #4444dd)" }}
                  />
                </SvgWrap>
              </LeftMoveButton>
            )}
        {moveBtnType === "none"
          ? imgCnt !== maxImgCnt && (
              <MoveAllbutton
                width={width}
                height={height}
                position="right"
                onClick={onClickMoveRight}
              />
            )
          : imgCnt !== maxImgCnt && (
              <RightMoveButton
                hoverCss={moveBtnType}
                width={width}
                height={height}
                onClick={onClickMoveRight}
              >
                <SvgWrap>
                  <RightMoveButtonIcon
                    className="buttonShadow"
                    width={`${width / 30}px`}
                    height={`${height / 30}px`}
                  />
                </SvgWrap>
              </RightMoveButton>
            )}

        {
          // 북마크가 존재
          bookmark && storeId && (
            <Bookmark
              storeId={storeId}
              onBookmark={onBookmarkState}
              size={size}
              onClickBookmark={onClickBookmark}
              absolute={true}
            />
          )
        }
      </MoveWrap>
      <ImageWrap width={width} height={height}>
        {deleteBtn && (
          <DeleteBtn onClick={() => onClickDeleteImage(srcArray[imgCnt])}>
            <SlTrash size={30} color="white" />
          </DeleteBtn>
        )}
        {srcArray[imgCnt] !== null && (
          <Image
            src={srcArray[imgCnt]}
            width={width}
            height={height}
            objectFit="cover"
            alt="Picture of the author"
          />
        )}
      </ImageWrap>

      <BottomComponent>
        {children}
        <BottomCenterComponent>
          {dotIndicator && (
            <DotIndicator imgLength={srcArray.length} index={imgCnt} />
          )}
        </BottomCenterComponent>
      </BottomComponent>
    </Wrapper>
  );
}

export default SlideImage;
