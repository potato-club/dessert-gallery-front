import React, { useState } from "react";
import styled from "styled-components";
import ToggleOptionBox from "../../../../components/ToggleOptionBox";
import CheckButton from "../../components/CheckButton";
import ToggleIcon from "/public/svg/common/MenuIcon.svg";

interface ScheduleCheckColumnProps {
  scheduleId: number;
  isSuccess: boolean;
  content: string;
  deleteFn: (scheduleId: number) => void;
  checkFn: (scheduleId: number) => void;
}

const ScheduleCheckColumn = ({ ...props }: ScheduleCheckColumnProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const contents = [
    {
      title: "삭제하기",
      onClickHandler: () => {
        setIsHover(false);
        props.deleteFn(props.scheduleId);
      },
    },
  ];

  return (
    <Container>
      <CheckButton
        width={30}
        height={30}
        type="checkbox"
        id={`scheduleId${props.scheduleId}`}
        value={props.scheduleId}
        defaultchecked={props.isSuccess}
        eventFn={(e) => {
          props.checkFn(props.scheduleId);
        }}
      />
      <InputContent isSuccess={props.isSuccess}>{props.content}</InputContent>
      <ToggleButton
        onFocus={() => {
          console.log("onfocus");
          setIsHover(true);
        }}
        onBlur={() => {
          console.log("blur");
          setIsToggle(false);
          setIsHover(false);
        }}
        onClick={() => {
          console.log("onClick");
          setIsToggle((prev) => !prev);
          setIsHover(true);
        }}
      >
        <ToggleIcon width={4} height={15} />
        <ToggleBoxDiv>
          {isHover && isToggle && (
            <ToggleOptionBox
              scheduleId={props.scheduleId}
              contents={contents}
            />
          )}
        </ToggleBoxDiv>
      </ToggleButton>
    </Container>
  );
};

export default ScheduleCheckColumn;

const Container = styled.div`
  display: flex;
  gap: 18px;
`;
const InputContent = styled.span<{ isSuccess: boolean }>`
  display: flex;
  align-items: center;
  width: 230px;
  word-break: break-all;
  color: ${({ isSuccess }) => (isSuccess ? "#828282" : "#000")};
  font-size: 16px;
  font-weight: 700;
`;
const ToggleBoxDiv = styled.div`
  position: relative;
  left: -147px;
`;
const ToggleButton = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
