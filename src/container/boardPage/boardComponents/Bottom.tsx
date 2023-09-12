import React from 'react'
import styled from 'styled-components'
import { BoardBottom } from '../../../../public/image'

interface componentsProps {
    imgSrc: string
}

function Bottom() {
  return (
    <BottomWrap imgSrc={BoardBottom.src}/>
  )
}

export default Bottom

const BottomWrap = styled.div<componentsProps>`
    width: 100vw;
    height: 495px;
    margin-top: 64px;
    background-image: ${({imgSrc})=> `url('${imgSrc}')`};
`