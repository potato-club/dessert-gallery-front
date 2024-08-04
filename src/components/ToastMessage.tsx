import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import type { ToastMessageProps } from '../types/componentsProps'

interface styleProps {
  wrapType: 'none'|'map'| 'sideBarMap'
}

const ToastMessage = ({messageString, timer, clickEvent=false, eventFunc, wrapType='none' }:ToastMessageProps) => {
  const [visible, setVisible] = useState(true);


  useEffect(()=>{
    setTimeout(()=>{setVisible(false)}, timer)
  },[timer])

  return visible ? (
    <Wrap >
      {!clickEvent&&<ToastWrap wrapType={wrapType}>{messageString}</ToastWrap>}
      {clickEvent&&<AbleEventToastWrap wrapType={wrapType} onClick={eventFunc}>{messageString}</AbleEventToastWrap>}

    </Wrap>
  ):null
}

export default ToastMessage

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: white;
` 
const ToastWrap = styled.div<styleProps>`
  position: fixed;
  bottom: 20px;
  left: 45%;
  width: fit-content;
  height: fit-content;
  padding: 8px 12px;
  font-family: noto-sans-cjk-kr;
  font-weight: bold;
  font-size: 16px;
  border: 3px solid #FDC886;
  background-color: #ffffff;
  border-radius: 16px;
  z-index: 100;
  cursor: default;
`

const AbleEventToastWrap = styled.div<styleProps>`
  position: fixed;
  bottom: 20px;
  left: 50%; 
  transform: translateX(-50%);
  width: fit-content;
  height: fit-content;
  padding: 8px 12px;
  font-family: noto-sans-cjk-kr;
  font-weight: bold;
  font-size: 16px;
  border: 3px solid #FDC886;
  background-color: #ffffff;
  border-radius: 16px;
  z-index: 100;
  cursor: pointer;
`
