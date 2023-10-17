import React from 'react'
import styled from 'styled-components'
import Tag from '../../../components/Tag'
import mainGuest from '../../../../public/image/mainGuest.png'

export default function FeedGuest() {
  const onClickMovePage = () => {
    window.location.href = '/login/main'
  }
  return (
    <Wrap>
      <LogoImage/>
      <Text>
        아직 로그인하지 않았어요!
      </Text>
      <Tag height='40px' width='240px' title='로그인하러 가기' margin='16px 0' clickAble={true} onClickHandler={onClickMovePage}/>
    </Wrap>
  )
}


const Wrap = styled.div`
  width: 70%;
  display: flex;
  margin: 48px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 3px solid #ff6f005a;
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

const Text = styled.div`
  font-family: noto-sans-cjk-kr;
  font-size: 24px;
  margin-top: 16px;
`