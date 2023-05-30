import React from "react";
import Header from "../components/Header";

/**
 * 각 페이지들을 props로 받아 공통컴포넌트(header,footer 등등)를 페이지와 같이 렌더링
 */
const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
