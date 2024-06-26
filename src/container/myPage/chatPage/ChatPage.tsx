import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChatList from "./components/ChatList";
import ChatRoom from "./components/ChatRoom";
import { getChatRoom, getSearchChatRoom, getUserInfo } from "../../../apis/controller/chatPage";
import { loginPageApi } from "../../../apis/controller/loginPage";
import { StompClientProvider } from "./context/StompClientProvider";
import { useRoomInfoState } from "../../../recoil/chat/roomInfoStateAtom";
import { useDebounce } from "../../../hooks/useDebounce";

export type userInfoType = {
  nickname: string;
  loginType: "NORMAL" | "KAKAO";
  userRole: "USER" | "MANAGER";
};

export type roomInfoType = {
  roomId: number;
  storeName: string;
  customerName: string;
  lastChatDatetime: string;
  thumbnailMessage: string;
  storeId: number;
};

function ChatPage() {
  const [chatRoomList, setChatRoomList] = useState<roomInfoType[]>();
  const [userInfoState, setUserInfoState] = useState<userInfoType>();
  const [roomInfoState, setRoomInfoState] = useRoomInfoState();
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const debouncedSearchChatRoom = useDebounce(searchKeyword, 500);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchChatRoom = async () => {
    const chatRoom = await getChatRoom();
    console.log(chatRoom);
    setChatRoomList(chatRoom.chatList);
    setChatRoomList(chatRoom.chatList);
    setIsLoading(false)
  };

  const fetchSearchChatRoom = async (keyword:string) => {
    const chatRoom = await getSearchChatRoom(keyword);
    setChatRoomList(chatRoom.chatList);
    setIsLoading(false)
  }

  const fetchUserInfo = async () => {
    const userInfo = await getUserInfo();
    console.log(userInfo);

    setUserInfoState(userInfo);
  };

  useEffect(() => {
    fetchUserInfo();
    if(searchKeyword.length !== 0 && debouncedSearchChatRoom){
      fetchSearchChatRoom(debouncedSearchChatRoom);
    }else{
      fetchChatRoom();
    }
    return () => {
      setRoomInfoState({
        roomId: 0,
        storeId: 0,
        partnerName: "",
      });
    };
  }, [debouncedSearchChatRoom]);


  return (
    <Layout>
      <Wrapper>
        <ChatList chatRoomList={chatRoomList} isLoading={isLoading} loadingHandler={setIsLoading} chatSearchValue={searchKeyword} chatSearchHandler={setSearchKeyword} userInfo={userInfoState} />
        <StompClientProvider userInfo={userInfoState}>
          <ChatRoom userInfo={userInfoState} />
        </StompClientProvider>
      </Wrapper>
    </Layout>
  );
}

export default ChatPage;

const Layout = styled.div`
  width: 100%;
  @media screen and (min-width: 1920px) {
    height: 100%;
  }
  @media screen and (max-width: 1919px) {
    height: 882px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  @media screen and (min-width: 1920px) {
    width: 1590px;
    height: 1080px;
  }
  @media screen and (max-width: 1919px) {
    width: 950px;
    height: 720px;
  }
  font-family: noto-sans-cjk-kr, sans-serif;
  position: relative;
  display: flex;
  background-color: #ffffff;
  border-right: 1px solid #dedede;
`;
