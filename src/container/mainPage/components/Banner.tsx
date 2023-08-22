import React from 'react'
import styled from 'styled-components'
import mainBannerBGImage from '../../../../public/image/mainBanner.png'

export default function Banner() {
  return (
    <BannerWrap>Banner</BannerWrap>
  )
}


const BannerWrap = styled.div`
  width: 100vw;
  height: 478px;
  background-image: url(${mainBannerBGImage.src});
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 128px;
  font-weight: bold;
  font-family: noto-sans-cjk-kr;
  color: white;
  cursor: default;
`