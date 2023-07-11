import React from "react";
import styled from "styled-components";
import Image from "next/image";
const Calender = () => {
  return (
    <Container>
      <Image src="/image/calender.png" width="540px" height="482px" alt="" />
    </Container>
  );
};

export default Calender;

const Container = styled.div`
  color: red;
  font-size: 100px;
  background-color: #fffdf9;
  height: 482px;
  border-radius: 20px;
  /* border: 1px solid #ff6f00; */
`;
