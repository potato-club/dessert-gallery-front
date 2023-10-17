import React from "react";
import styled from "styled-components";
import Calendar from "./components/MyCalendar";
import Menu from "./components/Menu";
import myPageBack from "../../../public/image/myPageBack.png"

const MyPage = () => {
  return (
    <PageWrapper>
      <Menu/>
      <Contents>
        <Calendar />
      </Contents>
    </PageWrapper>
  );
};

export default MyPage;

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  border-radius: 0 16px 16px 0;
  background-color: #FCF0E1;
  background-image: url(${myPageBack.src});
  background-position: right top;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  display: flex;
`

const Contents = styled.div`
  width: 100%;
  height: 100%
`