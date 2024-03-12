import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Tag from "../../../components/Tag";
import { useFollowAction } from "../../../hooks/useFollowAction";
import { useGetStoreInfo } from "../../../hooks/useStore";

import {
  getChatRoom,
  postChatRoom,
  getUserInfo,
} from "../../../apis/controller/chatPage";
import { roomInfoType } from "../../myPage/chatPage/ChatPage";
import { useRoomInfoState } from "../../../recoil/chat/roomInfoStateAtom";
import { useUserState } from "../../../hooks/useUser";
import Logo from "../../../../public/svg/common/logo.svg";


const StoreProfile = () => {
  const router = useRouter();

  const {isGuest} = useUserState();

  const storeId = parseInt(
    router.query.store ? router.query.store.toString() : "0"
  );

  const { isGuest } = useUserState();
  const { data } = useGetStoreInfo(storeId);
  const { postFollowMutate, putUnFollowMutate } = useFollowAction(storeId);

  const [isChatRoomExist, setIsChatRoomExist] = useState<{
    exist: boolean;
    roomId: number;
    partnerName: string;
  }>({ exist: false, roomId: 0, partnerName: "" });

  const [roomInfoState, setRoomInfoState] = useRoomInfoState();

  const checkChatRoom = async () => {
    const chatRoom = await getChatRoom();
    const userInfo = await getUserInfo();
    console.log(chatRoom);

    console.log(chatRoom.chatList);
    console.log(chatRoom.maxpage);
    if (chatRoom.chatList) {
      chatRoom.chatList.map((item: roomInfoType) => {
        if (data && data.name === item.storeName) {
          console.log("방이 존재합니다.", item.roomId);
          const partnerName =
            userInfo?.userRole === "MANAGER"
              ? item.customerName
              : item.storeName;
          setIsChatRoomExist({
            exist: true,
            roomId: item.roomId,
            partnerName: partnerName,
          });
        }
      });
    }
  };

  useEffect(() => {
    console.log(storeId);

    setRoomInfoState({ roomId: 0, partnerName: "" });
    if (!isGuest) {
      checkChatRoom();
    }
  }, [data]);

  return (
    <Container>
      {data && (
        <>
          {data.storeImage ? (
            <StoreImg src={data.storeImage.fileUrl} />
          ) : (
            <DefaultStoreImg>
              <Logo width={250} height={250} />
            </DefaultStoreImg>
          )}

          <InnerContainer>
            <InfoContent>
              <StoreName>{data.name}</StoreName>
              <SubTitle>{data.info || "default 값"}</SubTitle>
              <MainPhrase>{data.content}</MainPhrase>
              <Address>{data.address}</Address>
              <StoreNumber>{data.phoneNumber}</StoreNumber>
              <StoreInfo>
                <InfoView>
                  <Name>게시물</Name>
                  <Number>{data.postCount}</Number>
                </InfoView>
                <InfoView>
                  <Name>팔로워</Name>
                  <Number>{data.followers}</Number>
                </InfoView>
                <InfoView></InfoView>
              </StoreInfo>
              <BtnList>
                {data.follow ? (
                  <StoreProfileBtn
                    title={"팔로우 끊기"}
                    clickAble={true}
                    width="90px"
                    height="30px"
                    fontSize="12px"
                    hoverCss={true}
                    onClickHandler={() => {
                      putUnFollowMutate();
                    }}
                  />
                ) : (
                  <StoreProfileBtn
                    title={"팔로우"}
                    clickAble={true}
                    width="90px"
                    height="30px"
                    fontSize="12px"
                    hoverCss={true}
                    inversion={true}
                    onClickHandler={() => {
                      if (isGuest) {
                        alert("로그인 후 이용하실 수 있습니다.");
                        router.push("/login");
                      } else {
                        postFollowMutate();
                      }
                    }}
                  />
                )}

                <StoreProfileBtn
                  title="메세지 보내기"
                  clickAble={true}
                  hoverCss={true}
                  width="136px"
                  height="30px"
                  fontSize="12px"
                  onClickHandler={() => {
                    if (isGuest) {
                      alert("로그인 후 이용하실 수 있습니다.");
                      router.push("/login");
                    } else if (!data.follow) {
                      alert("팔로우 후 이용하실 수 있습니다.");
                    } else {
                      if (isChatRoomExist.exist) {
                        setRoomInfoState({
                          roomId: isChatRoomExist.roomId,
                          partnerName: isChatRoomExist.partnerName,
                        });
                        router.push("/myPage/chat");
                      } else {
                        console.log(storeId);
                        postChatRoom(storeId);
                        router.push("/myPage/chat");
                      }

                    }
                  }}
                />
              </BtnList>
            </InfoContent>
          </InnerContainer>
        </>
      )}
    </Container>
  );
};

export default StoreProfile;

const StoreImg = styled.img`
  width: 320px;
  height: 320px;
`;
const DefaultStoreImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 320px;
  background-color: #fdc886;
`;
const StoreProfileBtn = styled(Tag)``;
const Container = styled.div`
  display: flex;
  width: 640px;
  height: 320px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
  background-color: #fffdf9;
`;
const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 36px;
`;
const InfoContent = styled.div`
  display: flex;
  max-width: 247px;
  flex-direction: column;
`;
const textcss = css`
  color: #000;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`;

const StoreName = styled.h1`
  ${textcss}
  font-size: 28px;
  font-weight: 700;
`;
const SubTitle = styled.h2`
  ${textcss}
  color: #828282;
  font-weight: 700;
  margin-bottom: 9px;
`;
const MainPhrase = styled.p`
  ${textcss}
  min-height: 50px;
  margin-bottom: 11px;
`;
const Address = styled.p`
  ${textcss}
  margin-bottom: 10px;
`;
const StoreNumber = styled.p`
  ${textcss}
  margin-bottom: 12px;
`;
const StoreInfo = styled.div`
  display: flex;
  gap: 33px;
`;
const InfoView = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;
const Name = styled.span`
  ${textcss}
  font-size: 13px;
  font-weight: 700;
`;
const Number = styled.span`
  ${textcss}
  color: #828282;
  font-size: 13px;
`;
const BtnList = styled.div`
  display: flex;
  gap: 21px;
  margin-top: 19px;
`;
