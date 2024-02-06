import React, { useState } from "react";
import styled from "styled-components";
import ToggleOptionBox from "../../../../components/ToggleOptionBox";
import { modifyCalendarPage } from "../../../../hooks/useSchedule";
import CheckButton from "../../components/CheckButton";
import ToggleIcon from "/public/svg/common/MenuIcon.svg";

const MemoColumn = ({ ...props }) => {
  const { memoCheck } = modifyCalendarPage.useCheckMemo(props.dateInfo);
  const { memoDelete } = modifyCalendarPage.useDeleteMemo(props.dateInfo);
  const [isHover, setIsHover] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const contents = [
    {
      title: "삭제하기",
      onClickHandler: () => {
        setIsHover(false);
        memoDelete(props.memoId);
      },
    },
  ];
  return (
    <Container>
      <CheckButton
        width={30}
        height={30}
        type="checkbox"
        id={`checkMemo${props.memoId}`}
        value={props.memoId}
        defaultchecked={props.isSuccess}
        eventFn={(e) => {
          console.log(e.target);
          memoCheck(props.memoId);
        }}
      />
      <InputContent isSuccess={props.isSuccess}>{props.content}</InputContent>
      <ToggleButton
        onFocus={() => setIsHover(true)}
        onBlur={() => {
          setIsToggle(false);
          setIsHover(false);
        }}
        onClick={() => {
          setIsToggle((prev) => !prev);
          setIsHover(true);
        }}
      >
        <ToggleIcon width={4} height={15} />
        <ToggleBoxDiv>
          {isHover && isToggle && (
            <ToggleOptionBox memoId={props.memoId} contents={contents} />
          )}
        </ToggleBoxDiv>
      </ToggleButton>
    </Container>
  );
};

export default MemoColumn;
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
