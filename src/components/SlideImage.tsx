import Image from 'next/image';
import { slideImageValue } from '../types/componentsProps';
import { useState } from 'react';
import { ImageWrap, MoveButton } from './SlideImage.style';
 
function SlideImage({scrArray, width, height, bookmark=false, children=<></>}:slideImageValue) {
  const [imgCnt, setImgCnt] = useState<number>(0);
  const maxImgCnt = scrArray.length;

  return (
    <ImageWrap>
        <MoveButton/>
        <MoveButton/>
        <Image
        src={scrArray[imgCnt]}
        width={500}
        height={500}
        alt="Picture of the author"
        >
            
        </Image>
    </ImageWrap>
  );
}

export default SlideImage