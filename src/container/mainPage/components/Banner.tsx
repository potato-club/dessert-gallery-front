import React from 'react'
import styled from 'styled-components'
import mainBannerBGImage from '../../../../public/image/mainBanner.png'

export default function Banner() {
  return (
    <BannerWrap>Dessert Gallery</BannerWrap>
  )
}


const BannerWrap = styled.header`
  min-width: 100%;
  height: 478px;
  background-size: 100% 100%;
  background-image: url(${mainBannerBGImage.src});
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 128px;
  font-weight: bold;
  font-family: noto-sans-cjk-kr;
  color: white;
  cursor: default;
  /* @media screen and (max-width: 1300px) {
    height: 400px;
  } */
`