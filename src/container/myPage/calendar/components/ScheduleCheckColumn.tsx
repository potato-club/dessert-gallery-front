import React, { useState } from "react";
import styled, { css } from "styled-components";
import CheckButton from "../../components/CheckButton";
import DeleteIcon from "/public/svg/common/deleteIcon.svg";

interface ScheduleCheckColumnProps {
  scheduleId: number;
  isSuccess: boolean;
  content: string;
  deleteFn: (scheduleId: number) => void;
  checkFn: (scheduleId: number) => void;
}

const ScheduleCheckColumn = ({ ...props }: ScheduleCheckColumnProps) => {
  const [onWarning, setOnWarning] = useState(false);

  return (
    <Container>
      {onWarning ? (
        <WarningDiv>
          <span>
            <strong>정말로 </strong>
            삭제 하시겠습니까?
          </span>
          <BtnList>
            <CancelBtn
              onClick={() => {
                setOnWarning(false);
              }}
            >
              취소
            </CancelBtn>
            <DeleteBtn
              onClick={() => {
                props.deleteFn(props.scheduleId);
              }}
            >
              삭제
            </DeleteBtn>
          </BtnList>
        </WarningDiv>
      ) : (
        <>
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
          <InputContent isSuccess={props.isSuccess}>
            {props.content}
          </InputContent>
          <ToggleButton
            onClick={() => {
              setOnWarning(true);
            }}
          >
            <DeleteIcon width={18} height={20} />
          </ToggleButton>
        </>
      )}
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
const ToggleButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  svg {
    color: #ff6f00;
  }
`;
const WarningDiv = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: 600;
  }
  strong {
    color: red;
  }
`;
const BtnList = styled.div`
  display: flex;
  gap: 10px;
`;
const btnstyle = css`
  padding: 2px 4px;
  background-color: transparent;
  border: 1px solid #0000001a;
  border-radius: 10px;
  transition: all ease-in-out 200ms;
  font-size: 13px;
  color: white;
  &:hover {
    box-shadow: 0px 0px 0px 4px #0000001a;
    cursor: pointer;
  }
`;
const DeleteBtn = styled.button`
  ${btnstyle}
  background-color: #EC6968;
`;
const CancelBtn = styled.button`
  ${btnstyle}
  background-color: gray;
`;
