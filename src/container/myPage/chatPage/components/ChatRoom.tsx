import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChatItem from "./ChatItem";
import DateChat from "./DateChat";
import { getChatHistory } from "../../../../apis/controller/chatPage";
import { userInfoType } from "../ChatPage";
import { useRoomInfoState } from "../../../../recoil/chat/roomInfoStateAtom";
import { deleteChatRoom } from "../../../../apis/controller/chatPage";
import { useForm } from "react-hook-form";
import HeaderBottom from "../components/HeaderBottom";
import { useGueryGetChatRoom } from "../../../../hooks/useReactQueryChatRoom";
import { useStompClientContext } from "../context/StompClientProvider";
import { useTodayChatState } from "../../../../recoil/chat/todayChatState";
import { useInfiniteQuery } from "react-query";

export type messageObjectType = {
  chatRoomId: number;
  sender: string;
  message: string;
  messageType: "CHAT" | "RESERVEATION" | "REVIEW";
  dateTime: string;
};

type chatHistoryResponseType = {
  chatList: messageObjectType[];
  lastDatetime: string | null;
};

function ChatRoom({ userInfo }: { userInfo?: userInfoType }) {
  const [roomInfoState, setRoomInfoState] = useRoomInfoState();
  const [todayChatState, setTodayChatState] = useTodayChatState();
  const [chatHistoryState, setChatHistoryState] = useState<
    messageObjectType[][]
  >([]);
  const [lastDateState, setLastDateState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [scrollState, setScrollState] = useState<boolean>(false);
  const contentsRef = useRef<HTMLDivElement>(null);

  const { register, getValues, setValue, reset } = useForm();

  const { connectHandler, messageHandler, disconnectHandler } =
    useStompClientContext();

  const messageCheckHandler = async () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);

    const dateTime = year + "-" + month + "-" + day;

    // 채팅방 렌더링 시 오늘의 채팅이 있는지 확인
    const todayChat: chatHistoryResponseType = await getChatHistory(
      roomInfoState.roomId,
      dateTime
    );

    if (todayChat.lastDatetime) {
      console.log("지난채팅 있음");
      setLastDateState(
        todayChat.lastDatetime === null
          ? null
          : todayChat.lastDatetime.split(":")[1]
      );
    }

    if (todayChat.chatList) {
      setTodayChatState(todayChat.chatList);
    } else {
      setTodayChatState([]);
    }
    console.log("today", todayChat);

    console.log(lastDateState);

    //오늘의 채팅이 없고 예전에 채팅을 친 기록이 있으면 예전의 채팅을 호출
    if (todayChat.chatList === null && todayChat.lastDatetime) {
      const lastHistory = await getChatHistory(
        roomInfoState.roomId,
        todayChat.lastDatetime.split(":")[1]
      );
      if (lastHistory.chatList) {
        setChatHistoryState((prevState) => [
          lastHistory.chatList,
          ...prevState,
        ]);
      }
      console.log("last", lastHistory);
      setLastDateState(
        lastHistory.lastDatetime === null
          ? null
          : lastHistory.lastDatetime.split(":")[1]
      );
    }
  };

  const fetchMoreChatHistory = async () => {
    if (isLoading || !lastDateState) return;
    setIsLoading(true);
    const lastHistory = await getChatHistory(
      roomInfoState.roomId,
      lastDateState
    );
    console.log(lastHistory);

    setChatHistoryState((prevState) => [lastHistory.chatList, ...prevState]);

    setLastDateState(
      lastHistory.lastDatetime === null
        ? null
        : lastHistory.lastDatetime.split(":")[1]
    );
    setIsLoading(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (getValues("message")) {
        messageHandler(getValues("message"), "CHAT");
        setValue("message", "");
      }
    } else if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      setValue("message", getValues("message") + "\n");
    }
  };

  const handleScroll = () => {
    console.log("핸들");
    if (contentsRef.current) {
      if (contentsRef.current.scrollTop === 0 && lastDateState !== null) {
        const prevScrollHeight = contentsRef.current.scrollHeight;
        console.log(prevScrollHeight);
        fetchMoreChatHistory().then(() => {
          if (contentsRef.current) {
            console.log("then");
            contentsRef.current.scrollTop =
              contentsRef.current.scrollHeight - prevScrollHeight;
          }
        });
      }
    }
  };

  useEffect(() => {
    messageCheckHandler();
    connectHandler();

    return () => {
      disconnectHandler();
      setLastDateState(null);
      setChatHistoryState([]);
      setTodayChatState([]);
    };
  }, [roomInfoState]);

  useEffect(() => {
    if (contentsRef.current) {
      contentsRef.current.scrollTop = contentsRef.current.scrollHeight;
    }
  }, [todayChatState]);
  return (
    <Wrapper>
      <HeaderTop>
        <Profile>
          <ProfileImage>{roomInfoState.partnerName.split("")[0]}</ProfileImage>
          <PartnerName>
            {roomInfoState.partnerName}
            <PartnerNameHelper>님</PartnerNameHelper>
          </PartnerName>
        </Profile>
        <OptionButton onClick={() => deleteChatRoom(roomInfoState.roomId)}>
          채팅 종료
        </OptionButton>
      </HeaderTop>
      <SubWrapper>
        <div id="reservationModal"></div>
        <div id="completePickupModal"></div>
        <HeaderBottom roomInfoState={roomInfoState} userInfo={userInfo} />
        <Contents ref={contentsRef} onScroll={handleScroll}>
          {lastDateState &&
            contentsRef.current &&
            contentsRef.current?.scrollHeight >=
              contentsRef.current?.clientHeight && (
              <FetchMoreChatButtonDiv>
                <FetchMoreChatButton onClick={fetchMoreChatHistory}>
                  채팅 더보기
                </FetchMoreChatButton>
              </FetchMoreChatButtonDiv>
            )}
          {chatHistoryState?.map((item: any, index: number) => (
            <DateChat
              key={index}
              chatList={item}
              userInfo={userInfo}
            ></DateChat>
          ))}
          {[todayChatState]?.map((item: any, index: number) => (
            <DateChat
              key={index}
              chatList={item}
              userInfo={userInfo}
            ></DateChat>
          ))}
        </Contents>
      </SubWrapper>
      <Bottom>
        <TextboxDiv>
          <Textbox
            placeholder="메세지를 입력해주세요"
            onKeyDown={(event) => handleKeyDown(event)}
            {...register("message")}
          ></Textbox>
          <SendButtonDiv>
            <SendButton
              onClick={() => {
                messageHandler(getValues("message"), "CHAT");
                setValue("message", "");
              }}
            >
              전송
            </SendButton>
          </SendButtonDiv>
        </TextboxDiv>
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
  justify-content: center;
  border-right: 1px solid #dedede;
`;

const SubWrapper = styled.div`
  position: relative;
`;

const HeaderTop = styled.div`
  width: 100%;
  height: 74px;
  padding: 14px 34px 13px;
  border-bottom: 1px solid #dedede;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 5;
  background-color: white;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 47px;
  height: 47px;
  background-color: #fcf0e1;
  border-radius: 50px;
`;

const PartnerName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 13px;
  height: 21px;
  font-weight: bold;
  @media screen and (min-width: 1920px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1919px) {
    font-size: 14px;
  }
`;

const PartnerNameHelper = styled.div`
  font-size: 10px;
  color: #828282;
  margin-left: 4px;
  @media screen and (min-width: 1920px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1919px) {
    font-size: 10px;
  }
`;

const OptionButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: none;
  background: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 10px;
  color: #828282;
  margin-left: 4px;
  @media screen and (min-width: 1920px) {
    font-size: 13px;
  }
  @media screen and (max-width: 1919px) {
    font-size: 10px;
  }
`;

const Dot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50px;
  background-color: #828282;
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
  position: relative;
  overflow: auto;
  padding: 15px 20px;
`;

const MessageContentsDiv = styled.div`
  width: 100%;
  height: 100%;
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

const TextboxDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 2px solid #ff6f00;
  padding: 10px 15px;
  border-radius: 7px;
`;

const Textbox = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 7px;
  resize: none;
  outline: none;
  font-family: noto-sans-cjk-kr, sans-serif;
  ::placeholder {
    color: #828282;
  }
  @media screen and (min-width: 1920px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1919px) {
    font-size: 11px;
  }
`;

const SendButtonDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dedede;
  border-radius: 7px;
  margin-left: 15px;
  border: none;
  background-color: FCF6EE;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-family: noto-sans-cjk-kr, sans-serif;
  cursor: pointer;
  @media screen and (min-width: 1920px) {
    width: 67px;
    height: 29px;
    font-size: 12px;
  }
  @media screen and (max-width: 1919px) {
    width: 50px;
    height: 22px;
    font-size: 9px;
  }
`;

const FetchMoreChatButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FetchMoreChatButton = styled.button`
  background-color: #fdc886;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  @media screen and (min-width: 1920px) {
    height: 29px;
    width: 294px;
    font-size: 15px;
  }
  @media screen and (max-width: 1919px) {
    height: 22px;
    width: 226px;
    font-size: 12px;
  }
`;
