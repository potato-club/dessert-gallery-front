import React, { useEffect } from "react";
import Header from "../components/Header";
import { useRecoilState } from "recoil";
import { modalBg } from "../recoil/modalBg/atom";
import styled from "styled-components";

/**
 * 각 페이지들을 props로 받아 공통컴포넌트(header,footer 등등)를 페이지와 같이 렌더링
 */
const Layout = ({ children }: React.PropsWithChildren) => {
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
      <Header />
      {children}
    </>
  );
};

export default Layout;

const Container = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
