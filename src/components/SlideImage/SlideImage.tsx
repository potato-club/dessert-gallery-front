import Image from 'next/image';
import { slideImageValue } from '../../types/componentsProps';
import { useState } from 'react';
import DotIndicator from './DotIndicator';
import Bookmark from './Bookmark';
import { RightMoveButtonIcon, LeftMoveButtonIcon } from '../../../public/svg';
import { Wrapper, ImageWrap, RightMoveButton, LeftMoveButton,MoveWrap,MoveAllbutton, BottomComponent, BottomCenterComponent } from './SlideImage.style';
import followAction from '../../utils/followAction';

function SlideImage({storeId, srcArray, width=304, height=304, moveBtnType='none', size='big', dotIndicator=false, bookmark=false, onBookmark=false, children=<></>}:slideImageValue) {
  const [imgCnt, setImgCnt] = useState<number>(0);
  const [onBookmarkState, setOnBookmarkState] = useState<boolean>(onBookmark);
  const maxImgCnt = srcArray.length -1;

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

  const onClickBookmark = async (storeId: number) => {
    if(onBookmarkState){
      alert('해당 손님/가게를 언팔로우했습니다.')
    }else{
      alert('해당 가게를 팔로우했습니다.')
    }
    setOnBookmarkState(prev => !prev)
    followAction(onBookmarkState,storeId)
  }

  return (
    <Wrapper hoverCss={moveBtnType} width={width} height={height}>
      <MoveWrap>
      {
        moveBtnType==='none' ? (
          imgCnt !== 0 && <MoveAllbutton width={width} height={height} onClick={onClickMoveLeft}/>
        ) : (
          imgCnt !== 0 && (
                            <LeftMoveButton hoverCss={moveBtnType} width={width} height={height} onClick={onClickMoveLeft}>
                              <LeftMoveButtonIcon 
                                width={`${width / 16}px`}
                                height={`${height / 16}px`}
                              />
                            </LeftMoveButton>
                          )
        )
      }
      {
        moveBtnType==='none' 
          ? (
            imgCnt !== maxImgCnt && <MoveAllbutton width={width} height={height} position='right' onClick={onClickMoveRight}/>
          ):(
            imgCnt !== maxImgCnt && (
                                      <RightMoveButton hoverCss={moveBtnType} width={width} height={height} onClick={onClickMoveRight}>
                                        <RightMoveButtonIcon 
                                          width={`${width / 16}px`}
                                          height={`${height / 16}px`}
                                        />
                                      </RightMoveButton>
                                    )
          )
      }

      {
        // 북마크가 존재
        bookmark && storeId && <Bookmark storeId={storeId} onBookmark={onBookmarkState} size={size} onClickBookmark={onClickBookmark} absolute={true}/>
      }
      </MoveWrap>
      <ImageWrap>
        <Image
        src={srcArray[imgCnt]}
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
            dotIndicator && <DotIndicator imgLength={srcArray.length} index={imgCnt}/>
          }
        </BottomCenterComponent>
      </BottomComponent>
    </Wrapper>
  );
}

export default SlideImage