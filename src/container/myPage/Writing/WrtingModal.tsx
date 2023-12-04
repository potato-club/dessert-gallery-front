import React, { useState } from "react";
import styled from "styled-components";
import ModalWrapper from "../../../components/ModalWrapper";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { modalBg } from "../../../recoil/modalBg/atom";
import Layout from "../../../components/ModalBackground";

const WritingModal = (props: any) => {
  const setModalBgState = useSetRecoilState(modalBg);

  const confirmButton = () => {
    props.setTitle("");
    props.setContent("");
    setModalBgState(false);
  };
  const cancelButton = () => {
    setModalBgState(false);
  };

  return (
    <ModalWrapper>
      <Wrapper>
        공지 내용을 삭제하시겠습니까?
        <CancelButton onClick={cancelButton}>취소</CancelButton>
        <ConfirmButton onClick={confirmButton}>삭제</ConfirmButton>
      </Wrapper>
    </ModalWrapper>
  );
};

export default WritingModal;

const Wrapper = styled.div`
  width: 500px;
  height: 300px;
  background-color: rgb(245, 206, 151);
`;
const CloseBtn = styled.button`
  width: 20px;
  height: 20px;
  background-color: white;
`;
const ConfirmButton = styled.button`
  width: 100px;
  height: 100px;
  background-color: aliceblue;
`;

const CancelButton = styled.button`
  width: 100px;
  height: 100px;
  background-color: aliceblue;
`;
