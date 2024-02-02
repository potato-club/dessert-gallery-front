import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { modifyCalendarPage } from "../../../../hooks/useSchedule";
import ScheduleCheckColoumn from "./ScheduleCheckColumn";

interface memoListItemType {
  checked: boolean;
  content: string;
  id: number;
}

const MemoList = ({ ...props }) => {
  const [memoInput, setMemoInput] = useState<string>("");
  const { memoAddFn } = modifyCalendarPage.useAddMemo(props.dateInfo);
  const { memoCheck } = modifyCalendarPage.useCheckMemo(props.dateInfo);
  const { memoDelete } = modifyCalendarPage.useDeleteMemo(props.dateInfo);

  const submitMemo = (e: any) => {
    e.preventDefault();
    memoAddFn(memoInput);
    setMemoInput("");
  };

  return (
    <Container>
      <InputForm onSubmit={(e) => submitMemo(e)}>
        <input
          placeholder="자유롭게 메모를 입력해 주세요!"
          onChange={(e) => setMemoInput(e.target.value)}
          value={memoInput}
        />
        <AddBtn type="submit" onSubmit={(e) => submitMemo(e)}>
          추가
        </AddBtn>
      </InputForm>
      {props.memoList && (
        <Content>
          <NotWorkingDiv>
            <Title>미완료 목록</Title>
            {props.memoList.map((item: memoListItemType) => {
              if (!item.checked)
                return (
                  <ScheduleCheckColoumn
                    key={item.id}
                    scheduleId={item.id}
                    isSuccess={item.checked}
                    content={item.content}
                    deleteFn={memoDelete}
                    checkFn={memoCheck}
                  />
                );
            })}
          </NotWorkingDiv>
          <SuccessWorkingDiv>
            <Title>완료 목록</Title>
            {props.memoList.map((item: memoListItemType) => {
              if (item.checked)
                return (
                  <ScheduleCheckColoumn
                    key={item.id}
                    scheduleId={item.id}
                    isSuccess={item.checked}
                    content={item.content}
                    deleteFn={memoDelete}
                    checkFn={memoCheck}
                  />
                );
            })}
          </SuccessWorkingDiv>
        </Content>
      )}
    </Container>
  );
};

export default MemoList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px 27px;
  height: 626px;
  background-color: #fefbf6;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  gap: 30px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  input {
    font-size: 16px;
    height: 25px;
    border: none;
    width: 100%;
    outline: none;
    border-bottom: 2px solid #828282;
    padding-bottom: 5px;
    background-color: transparent;
  }
`;
const AddBtn = styled.button`
  width: 66px;
  height: 28px;
  color: #000;
  padding: 4px 6px;
  margin-top: 10px;
  background-color: #fcf6ee;
  border: 1px solid #828282;
  border-radius: 8px;
  font-size: 11px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const WorkingDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const NotWorkingDiv = styled(WorkingDiv)``;
const SuccessWorkingDiv = styled(WorkingDiv)``;
const Title = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
`;
