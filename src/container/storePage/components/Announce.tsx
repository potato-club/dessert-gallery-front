import React from "react";
import styled from "styled-components";

const Announce = () => {
  return <Container>공지사항</Container>;
};

export default Announce;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffdf9;
  border-top: 3px solid #fdc886;
  border-bottom: 3px solid #fdc886;
  width: 100%;
  height: 78px;
`;
