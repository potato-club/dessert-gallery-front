import Image from 'next/image';
import { slideImageValue } from '../types/componentsProps';
import { useState } from 'react';
import { Wrapper, BookmarkOnWrap, BookmarkOffWrap, ImageWrap, RightMoveButton, LeftMoveButton,MoveWrap,MoveAllbutton, BottomComponent } from './SlideImage.style';
 
function SlideImage({scrArray, width=384, height=384, moveBtnType='none', bookmark=false, onBookmark=false, children=<></>}:slideImageValue) {
  const [imgCnt, setImgCnt] = useState<number>(0);
  const [onBookmarkState, setOnBookmarkState] = useState<boolean>(onBookmark);
  const maxImgCnt = scrArray.length -1;

  const onClickMoveLeft = () => {
    if(imgCnt === 0){
      return;
    }else{
      setImgCnt(prev => prev-1)
    }
  }

  const onClickMoveRight = () => {
    if(imgCnt === maxImgCnt){
      return;
    }else{
      setImgCnt(prev => prev+1)
    }
  }

  const onClickBookmark = () => {
    setOnBookmarkState(prev => !prev)
  }

  return (
    <Wrapper hoverCss={moveBtnType} width={width} height={height}>
      <MoveWrap>
      {
        imgCnt !== 0 && moveBtnType==='none' 
                        ? <MoveAllbutton onClick={onClickMoveLeft}/>
                        :<LeftMoveButton src='/svg/slideImage/leftMoveButton.svg' hoverCss={moveBtnType} width={width} height={height} onClick={onClickMoveLeft}/>
      }
      {
        imgCnt !== maxImgCnt && moveBtnType==='none' 
                                ? <MoveAllbutton onClick={onClickMoveRight}/>
                                : <RightMoveButton src='/svg/slideImage/rightMoveButton.svg' hoverCss={moveBtnType} width={width} height={height} onClick={onClickMoveRight}/>
      }
      {
        bookmark && ( onBookmarkState ? <BookmarkOnWrap src='/svg/slideImage/onBookmark.svg' onClick={onClickBookmark}/> : <BookmarkOffWrap src='/svg/slideimage/offBookmark.svg' onClick={onClickBookmark} /> )
      }
      </MoveWrap>
      <ImageWrap>
        <Image
        src={scrArray[imgCnt]}
        width={width}
        height={height}
        objectFit="cover"
        alt="Picture of the author"
        />
      </ImageWrap>
      <BottomComponent>
        {children}
      </BottomComponent>
    </Wrapper>
  );
}

export default SlideImage