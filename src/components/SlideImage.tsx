import Image from 'next/image';
import { slideImageValue } from '../types/componentsProps';
import { useState } from 'react';
import { Wrapper, BookmarkOnWrap, BookmarkOffWrap, ImageWrap, RightMoveButton, LeftMoveButton, BottomComponent } from './SlideImage.style';
 
function SlideImage({scrArray, width=384, height=384, bookmark=false, onBookmark=false, children=<></>}:slideImageValue) {
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
    <Wrapper width={width} height={height}>
      {
        imgCnt !== 0 && <LeftMoveButton width={width} height={height} onClick={onClickMoveLeft}/>
      }
      {
        imgCnt !== maxImgCnt && <RightMoveButton width={width} height={height} onClick={onClickMoveRight}/>
      }
      {
        bookmark && ( onBookmarkState ? <BookmarkOnWrap width={width} height={height} onClick={onClickBookmark}/> : <BookmarkOffWrap width={width} height={height} onClick={onClickBookmark} /> )
      }
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