import React, { useState } from "react";
import styled from "styled-components";
import ModalWrapper from "../../../components/ModalWrapper";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { modalBg } from "../../../recoil/modalBg/atom";
import Link from "next/link";

interface ButtonProps {
  btnColor: string;
  fontColor: string;
}

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
        <Title>공지 내용을 삭제하시겠습니까?</Title>
        <ButtonWrapper>
          <Button btnColor="white" fontColor="#FF8D00" onClick={cancelButton}>
            취소
          </Button>
          <Link href={"/myPage/notice"}>
            <Button
              typeof="submit"
              btnColor="#FF8D00"
              fontColor="black"
              onClick={confirmButton}
            >
              삭제
            </Button>
          </Link>
        </ButtonWrapper>
      </Wrapper>
    </ModalWrapper>
  );
};

export default WritingModal;

const Wrapper = styled.div`
  width: 500px;
  height: 300px;
  background-color: rgb(245, 206, 151);
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: cetnter;
  justify-content: center;
`;

const Button = styled.div<ButtonProps>`
  width: 158px;
  height: 52px;
  font-family: Noto Sans CJK KR;
  font-size: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => props.btnColor};
  color: ${(props) => props.fontColor};
  border: 2px solid #ff8d00;
`;

const CancelButton = styled.button`
  width: 100px;
  height: 100px;
  background-color: aliceblue;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;
const Title = styled.h1`
  justify-content: center;
`;
