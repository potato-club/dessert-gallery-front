import Image from 'next/image';
import { slideImageValue } from '../types/componentsProps';
import { useState } from 'react';
import DotIndicator from './DotIndicator';
import { Wrapper, BookmarkOnWrap, BookmarkOffWrap, ImageWrap, RightMoveButton, LeftMoveButton,MoveWrap,MoveAllbutton, BottomComponent, BottomCenterComponent } from './SlideImage.style';
 
function SlideImage({scrArray, width=384, height=384, moveBtnType='none', dotIndicator=false, bookmark=false, onBookmark=false, children=<></>}:slideImageValue) {
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
        moveBtnType==='none' ? (
          imgCnt !== 0 && <MoveAllbutton width={width} height={height} onClick={onClickMoveLeft}/>
        ) : (
          imgCnt !== 0 && <LeftMoveButton src='/svg/slideImage/leftMoveButton.svg' hoverCss={moveBtnType} width={width} height={height} onClick={onClickMoveLeft}/>
        )
      }
      {
        moveBtnType==='none' 
          ? (
            imgCnt !== maxImgCnt && <MoveAllbutton width={width} height={height} position='right' onClick={onClickMoveRight}/>
          ):(
            imgCnt !== maxImgCnt && <RightMoveButton src='/svg/slideImage/rightMoveButton.svg' hoverCss={moveBtnType} width={width} height={height} onClick={onClickMoveRight}/>
          )
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
        <BottomCenterComponent>
          {
            dotIndicator && <DotIndicator imgLength={scrArray.length} index={imgCnt}/>
          }
        </BottomCenterComponent>
      </BottomComponent>
    </Wrapper>
  );
}

export default SlideImage