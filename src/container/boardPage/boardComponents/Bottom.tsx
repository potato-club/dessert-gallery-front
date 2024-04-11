import React from 'react'
import styled from 'styled-components'
import { BoardBottom } from '../../../../public/image'

interface componentsProps {
    imgSrc: string
}

interface ChildComponentProps {
  observerRef: React.RefObject<HTMLDivElement>;
}

const Bottom: React.FC<ChildComponentProps> = ({observerRef})  => {
  return (
    <BottomWrap ref={observerRef} imgSrc={BoardBottom.src}/>
  )
}

export default Bottom

const BottomWrap = styled.div<componentsProps>`
    width: 100vw;
    height: 495px;
    margin-top: 64px;
    background-image: ${({imgSrc})=> `url('${imgSrc}')`};
    @media screen and (max-width: 1280px) {
      width: 1736px; 
    }
    @media screen and (max-width: 480px) {
      min-width: 100vw; 
    }
`