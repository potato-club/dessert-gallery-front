import React from "react";
import styled from "styled-components";
import ChatItem from "./ChatItem";

function ChatRoom() {
  return (
    <Wrapper>
      <Header>
        <HeaderTop>
          <Profile>
            <ProfileImage />
            <UserName>
              바닐라빈빈
              <UserNameHelper>님</UserNameHelper>
            </UserName>
          </Profile>
          <OptionButton>
            {[1, 2, 3].map((index) => (
              <Dot key={index}></Dot>
            ))}
          </OptionButton>
        </HeaderTop>
        <HeaderBottom>
          <Product>
            <ProductImage />
            <ProductName>상큼오독 산딸기</ProductName>
            <ProductPrice>34,000원</ProductPrice>
          </Product>
          <ButtonDiv>
            <Button>예약 확정</Button>
            <Button>후기 작성</Button>
          </ButtonDiv>
        </HeaderBottom>
      </Header>
      <Contents>
        <ChatItem
          myChat={false}
          message={"123"}
          timestamp={"2023-11-26T20:15:10.918Z"}
        ></ChatItem>
        <ChatItem
          myChat={true}
          message={"123"}
          timestamp={"2023-11-26T20:15:10.918Z"}
        ></ChatItem>
      </Contents>
      <Bottom>
        <Textbox placeholder="메세지를 입력해주세요">
          {/* <SendButton>123</SendButton> */}
        </Textbox>
      </Bottom>
    </Wrapper>
  );
}

export default ChatRoom;

const Wrapper = styled.div`
  @media screen and (min-width: 1920px) {
    width: 1034px;
    height: 100%;
  }
  @media screen and (max-width: 1919px) {
    width: 618px;
    height: 100%;
  }
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dedede;
`;

const Header = styled.div`
  width: 100%;
  height: 124px;
`;

const HeaderTop = styled.div`
  width: 100%;
  height: 74px;
  padding: 14px 34px 13px;
  border-bottom: 1px solid #dedede;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 47px;
  height: 47px;
  background-color: #fcf0e1;
  border-radius: 50px;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 13px;
  height: 21px;
  font-size: 14px;
  font-weight: bold;
`;

const UserNameHelper = styled.div`
  font-size: 10px;
  color: #828282;
  margin-left: 4px;
`;

const OptionButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 15px;
  width: 3px;
  border: none;
  background: none;
  cursor: pointer;
`;

const Dot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50px;
  background-color: #828282;
`;

const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 11px 72px 11px 34px;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImage = styled.div`
  width: 28px;
  height: 28px;
  background-color: #fcf0e1;
`;

const ProductName = styled.div`
  height: 15px;
  max-width: 156px;
  font-size: 10px;
  margin: 0 10px;
`;

const ProductPrice = styled.div`
  height: 15px;
  font-size: 10px;
  font-weight: bold;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 202px;
`;

// 그림자 버전 버튼
const Button = styled.button`
  width: 92px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  background-color: FCF6EE;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Contents = styled.div`
  @media screen and (min-width: 1920px) {
    height: 750px;
  }
  @media screen and (max-width: 1919px) {
    height: 466px;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dedede;
  overflow: auto;
  padding: 15px 20px 0;
`;

const Bottom = styled.div`
  @media screen and (min-width: 1920px) {
    height: 206px;
  }
  @media screen and (max-width: 1919px) {
    height: 130px;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px;
`;

const Textbox = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 19px 21px;
  border: 2px solid #ff6f00;
  border-radius: 7px;
  resize: none;
  outline: none;
  font-size: 11px;
  font-family: noto-sans-cjk-kr, sans-serif;
  ::placeholder {
    color: #828282;
  }
`;

const SendButton = styled.button`
  width: 50px;
  height: 22px;
  background-color: #dedede;
  border-radius: 7px;
`;
