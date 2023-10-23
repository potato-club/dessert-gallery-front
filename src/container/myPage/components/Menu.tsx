import styled from "styled-components";
import Image from "next/image";
import React, { useState } from 'react'
import myPageLogo from '../../../../public/image/myPageLogo.png'

interface styleProp {
  fontSize: string;
  bold: boolean;
  fontColor: string;
  margin?: string
}

interface menuI {
  title: string;
  selected: boolean,
  menuId: number
}

interface roleMenuI {
  role: "USER" | "MANAGER";
  selected: boolean,
  category: menuI[]
}
 

export default function Menu() {
  const [menu, setMenu] = useState<roleMenuI[]>([
    {
      role: "USER",
      selected: true,
      category: [
        {
          title: "마이페이지",
          menuId: 1,
          selected: true
        },
        {
          title: "1:1 채팅",
          menuId: 2,
          selected: false
        },
        {
          title: "내가 쓴 후기",
          menuId: 3,
          selected: false
        },
        {
          title: "북마크",
          menuId: 4,
          selected: false
        },
        {
          title: "팔로우 관리",
          menuId: 5,
          selected: false
        },
      ]
    },{
      role: "MANAGER",
      selected: false,
      category: [
        {
          title: "마이페이지",
          menuId: 1,
          selected: true
        },
        {
          title: "1:1 채팅",
          menuId: 2,
          selected: false
        },
        {
          title: "캘린더 작성",
          menuId: 3,
          selected: false
        },
        {
          title: "공지사항",
          menuId: 4,
          selected: false
        },
        {
          title: "게시물 관리",
          menuId: 5,
          selected: false
        },
        {
          title: "팔로우 관리",
          menuId: 6,
          selected: false
        },
      ]
    }
  ])
  const onClickMoveMain = () => {
    window.location.href = "/";
  }
  return (
    <MenuWrapper>
      <MenuHeader onClick={onClickMoveMain}>
        <Image src={myPageLogo.src} alt="myPageLogo" layout="fixed" height={72} width={232}/>
      </MenuHeader>
      <MenuContentsWrap>
        <ColumnBox>
          <UserInfoWrap>
            <ProfileImage/>
            <RowBox>
              <Text bold fontSize="20px" fontColor="#000000" margin="16px 4px 0 0">바닐라빈빈</Text>
              <Text bold fontSize="18px" fontColor="#828282" margin="16px 0 0 0">님</Text>
            </RowBox>
          </UserInfoWrap>

          <UserMenuWrap>
            <CategoryWrap>
              <CategoryLogo/>
            </CategoryWrap>
            <CategoryWrap>
              <CategoryLogo/>
            </CategoryWrap>
            <CategoryWrap>
              <CategoryLogo/>
            </CategoryWrap>
            <CategoryWrap>
              <CategoryLogo/>
            </CategoryWrap>
          </UserMenuWrap>
        </ColumnBox>

        <SiteMenuWrap>
          <CategoryWrap>
            <CategoryLogo/>
          </CategoryWrap>
        </SiteMenuWrap>
      </MenuContentsWrap>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  width: 330px;
  height: 100vh;
  border-radius: 0 24px 24px 0;
  display: flex;
  flex-direction: column;
  background-color: #fffffff1;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.377);
`

const MenuHeader = styled.div`
  width: 100%;
  height: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0 24px 0 0;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 16%);
  display: flex;
  justify-content: center;
  cursor: pointer;
`

const MenuContentsWrap = styled.div`
  margin: 48px 20px 0 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

const ProfileImage = styled.div`
  width: 152px;
  height: 152px;
  background-color: #FDC886;
`

const UserMenuWrap = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
`

const SiteMenuWrap = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  border-top: 2px solid #DEDEDE;`

const CategoryWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
`

const CategoryLogo = styled.div`
  width: 32px;
  height: 32px;
  background-color: #DEDEDE;
`

const RowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
  
const Text = styled.div<styleProp>`
  font-family: noto-sans-cjk-kr;
  font-size: ${({fontSize})=> fontSize};
  color: ${({fontColor})=> fontColor};

  ${({margin})=>{
    if(margin){
      return `margin: ${margin};`
    }
  }}
  
  ${({bold})=>{
    if(bold){
      return `font-weight: bold;`
    }
  }}

`