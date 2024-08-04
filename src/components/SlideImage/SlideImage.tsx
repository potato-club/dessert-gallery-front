import Image, { StaticImageData } from "next/image";
import { slideImageValue } from "../../types/componentsProps";
import { useState } from "react";
import DotIndicator from "./DotIndicator";
import Follow from "./Follow";
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
  const [onFollowState, setOnFollowState] = useState<boolean>(onBookmark);
  const maxImgCnt = srcArray.length - 1;

  const onClickDeleteImage = (index: string| StaticImageData) => {
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

  const onClickFollow = async (storeId: number) => {
    followAction(onFollowState,storeId)
    if(onFollowState){
      alert('해당 손님/가게를 언팔로우했습니다.')
    }else{
      alert('해당 가게를 팔로우했습니다.')
    }
    setOnFollowState((prev) => !prev);
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
                    stroke="white"
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
                    stroke="white"
                  />
                </SvgWrap>
              </RightMoveButton>
            )}

        {
          // 북마크가 존재
          bookmark && storeId && (
            <Follow
              storeId={storeId}
              onBookmark={onFollowState}
              size={size}
              onClickBookmark={onClickFollow}
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
