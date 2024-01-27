import React, { useEffect } from "react";
import Header from "../components/Header";
import { useRecoilState } from "recoil";
import { modalBg } from "../recoil/modalBg/atom";
import styled from "styled-components";

/**
 * 모달을 띄울때 배경 어두운 색상 적용
 */
const ModalBackground = ({ children }: React.PropsWithChildren) => {
  const [onModal, setOnModal] = useRecoilState(modalBg);

  useEffect(() => {
    if (onModal) {
      document.body.style.overflow = "hidden"; // 스크롤 불가능
    } else {
      document.body.style.overflow = "auto"; // 스크롤 가능
    }

    // Clean up
    return () => {
      document.body.style.overflow = "auto"; // 모달이 닫히면 다시 스크롤 가능
    };
  }, [onModal]);

  return (
    <>
      {onModal && <Container onClick={() => setOnModal(false)} />}
      {children}
    </>
  );
};

export default ModalBackground;

const Container = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
