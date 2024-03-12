import React from "react";
import styled from "styled-components";
import { useBlockedAction } from "../../../../hooks/useFollowAction";

const BlockedItem = ({ ...props }) => {
  const { putUnBlockedMutate } = useBlockedAction(props.userName);
  const unBlocked = (e: any) => {
    e.preventDefault();
    putUnBlockedMutate();
  };

  return (
    <Container>
      <Left>
        <ProfileImg src={props.fileUrl} />
        <Nickname>{props.userName}</Nickname>
      </Left>
      <FollowBtn onClick={(e) => unBlocked(e)}>차단 해제</FollowBtn>
    </Container>
  );
};

export default BlockedItem;

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
