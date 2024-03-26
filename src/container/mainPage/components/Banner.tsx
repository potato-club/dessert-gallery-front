import React from 'react'
import styled from 'styled-components'
import mainBannerBGImage from '../../../../public/image/mainBanner.png'

export default function Banner() {
  return (
    <BannerWrap>Dessert Gallery</BannerWrap>
  )
}


const BannerWrap = styled.header`
  width: 100vw;
  height: 478px;
  background-size: 100% 100%;
  background-image: url(${mainBannerBGImage.src});
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 104px;
  font-weight: bold;
  font-family: noto-sans-cjk-kr;
  color: white;
  cursor: default;
  @media screen and (max-width: 1280px) {
    height: 400px; 
    width: 1280px; 
  }
  @media screen and (max-width: 480px) {
    height: 280px; 
    min-width: 480px; 
    font-size: 72px;
  }
`