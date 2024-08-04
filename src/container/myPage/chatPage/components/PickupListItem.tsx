import { useEffect, useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { useRoomInfoState } from "../../../../recoil/chat/roomInfoStateAtom";
import axios from "axios";
import { useTokenService } from "../../../../hooks/useTokenService";

const PickupListItem = ({
  children,
  onClickItem,
  isSelected,
}: {
  children: string;
  onClickItem: () => void;
  isSelected: boolean;
}) => {
  const year = children.split("T")[0].split("-")[0];
  const month = children.split("T")[0].split("-")[1];
  const date = children.split("T")[0].split("-")[2];

  const hour = children.split("T")[1].split(":")[0];
  const time = children.split("T")[1].split(":")[1];

  return (
    <div>
      <Button onClick={onClickItem} isSelected={isSelected}>
        {year}년 {month}월 {date}일 {hour}시 {time}분
      </Button>
    </div>
  );
};

export default PickupListItem;

const Button = styled.button<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  font-size: 17px;
  color: ${(props) => (props.isSelected ? "#FF6F00" : "#828282")};
  background: #fcf0e1;
  border: ${(props) =>
    props.isSelected ? "2px solid #FF6F00" : "2px solid #fcf0e1"};
  border-radius: 13px;
  cursor: pointer;
`;
