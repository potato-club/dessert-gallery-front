import React from 'react'
import styled from 'styled-components'
import mainGuest from '../../../../../public/image/guestGray.png'

function NoneSearchChatRoom() {
  return (
      <Wrap>
        <LogoImage/>
        <InfoText>
          검색된 채팅방이 없어요
        </InfoText>
      </Wrap>
  )
}

export default NoneSearchChatRoom



const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`
const LogoImage = styled.div`
  width: 64px;
  height: 64px;
  background-image: url(${mainGuest.src});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`

const InfoText = styled.div`
  font-family: noto-sans-cjk-kr;
  font-size: 20px;
  margin-top: 16px;
  color: #424242;
`