import styled from 'styled-components'
import mainGuest from '../../../../public/image/guestGray.png'

interface componentsProps {
  menu: number;
}


export const FollowWrap = styled.div`
  width: 70%;
  height: 500px;
  margin: 24px;
`

export const Wrap = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  margin: 24px;
  padding: 32px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 3px solid #d4b39a5a;
  border-radius: 16px;
`
export const LogoImage = styled.div`
  width: 64px;
  height: 64px;
  background-image: url(${mainGuest.src});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`

export const InfoText = styled.div`
  font-family: noto-sans-cjk-kr;
  font-size: 24px;
  margin-top: 16px;
  color: #424242;
`