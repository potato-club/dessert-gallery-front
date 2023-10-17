import styled from "styled-components";
import Image from "next/image";
import React from 'react'

export default function Menu() {
  const onClickMoveMain = () => {
    window.location.href = "/";
  }
  return (
    <MenuWrapper>
      <MenuHeader onClick={onClickMoveMain}>
      </MenuHeader>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  width: 330px;
  height: 100vh;
  border-radius: 0 24px 24px 0;
  display: flex;
  background-color: #f8f6f4;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.377);
`

const MenuHeader = styled.div`
  width: 100%;
  height: 124px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`