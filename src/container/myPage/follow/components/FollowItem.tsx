import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { useFollowAction } from "../../../../hooks/useFollowAction";
const FollowItem = ({ ...props }) => {
  const router = useRouter();
  const { putUnFollowMutate } = useFollowAction(props.storeId);
  const disconnectFollow = (e: any) => {
    e.preventDefault();
    putUnFollowMutate();
  };

  return (
    <Container>
      <Left onClick={() => router.push(`/galleryBoard/${props.storeId}`)}>
        <ProfileImg src={props.fileUrl} />
        <Nickname>{props.storeName}</Nickname>
      </Left>
      <FollowBtn onClick={(e) => disconnectFollow(e)}>팔로우 끊기</FollowBtn>
    </Container>
  );
};

export default FollowItem;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 11px 40px;
  background-color: rgba(255, 253, 249, 0.78);
`;
const Left = styled.div`
  display: flex;
  gap: 25px;
  justify-content: space-between;
  align-items: center;
`;
const ProfileImg = styled.img`
  background-color: #fdc886;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`;
const Nickname = styled.span`
  font-size: 15px;
  font-weight: 600;
`;
const FollowBtn = styled.button`
  border: none;
  border-radius: 25px;
  width: 119px;
  height: 34px;
  background-color: #dedede;
  transition: all ease-in-out 100ms;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #828282;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.161);
  }
`;
