import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClickClose: () => void;
  onClickConfirm: () => void;
  children: string;
}

function LoginModal({
  children,
  isOpen,
  onClickClose,
  onClickConfirm,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  // 컴포넌트가 Mount된 후 createPortal을 이용해 렌더링 되도록 하기
  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  if (!isOpen) return null;
  return mounted
    ? createPortal(
        <ModalWrapper>
          <ModalTextDiv>{children}</ModalTextDiv>
          <ModalButtonDiv>
            <ModalButton onClick={onClickConfirm}>확인</ModalButton>
          </ModalButtonDiv>
        </ModalWrapper>,
        document.querySelector("#loginModal") as HTMLElement
      )
    : null;
}

export default LoginModal;

const ModalWrapper = styled.div`
  position: absolute;
  background-color: white;
  position: absolute;
  width: 620px;
  height: 360px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  border: 3px solid #ff6f00;
  border-radius: 6px;
  flex-direction: row;
  font-family: noto-sans-cjk-kr, sans-serif;
`;

const ModalTextDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
  padding: 80px 108px 80px 108px;
  font-size: 21px;
  line-height: 30px;
  white-space: pre-wrap;
`;

const ModalButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border: none;
  border-radius: 6px;
  width: 300px;
  cursor: pointer;
  height: 60px;
  background-color: #fcf0e1;

  :hover {
    color: white;
    background-color: #ff6f00;
  }
`;
