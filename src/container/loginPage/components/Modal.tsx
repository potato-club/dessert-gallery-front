import React, { ReactNode } from "react";
import styled from "styled-components";
import { modalStateAtom } from "../../../recoil/login/modalStateAtom";
import { useRecoilState } from "recoil";

function Modal({}: {}) {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setModalState({ ...modalState, inputValue: inputValue });
    console.log(modalState);
  };

  
  return (
    <ModalWrapper state={modalState.state}>
      <ModalContentsDiv>
        <ExplainDiv>{modalState.explain}</ExplainDiv>
        <InputDiv inputState={modalState.inputState}>
          <NicknameInput onChange={handleInputChange}></NicknameInput>
        </InputDiv>
      </ModalContentsDiv>
      <ButtonDiv>
        <ModalButton onClick={modalState.onClickConfirmButton}>
          확인
        </ModalButton>
        <ModalButton onClick={modalState.onClickCancelButton}>취소</ModalButton>
      </ButtonDiv>
    </ModalWrapper>
  );
}

export default Modal;

const ModalWrapper = styled.div<{ state: boolean }>`
  display: ${(props) => (props.state === false ? "none" : "")};
  position: relative;
  border: 1px solid black;
  background-color: white;
  position: absolute;
  width: 500px;
  height: 300px;
`;

const ModalContentsDiv = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px;
`;

const ExplainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
`;

const InputDiv = styled.div<{ inputState: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${(props) => (props.inputState === false ? "hidden" : "")};
  width: 100%;
  height: 50px;
`;

const NicknameInput = styled.input`
  width: 300px;
  height: 30px;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

const ModalButton = styled.button`
  width: 50px;
  height: 25px;
  margin: 20px;
`;
