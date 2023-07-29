import React from "react";
import styled from "styled-components";

function Explain({ role }: { role: "owner" | "user" }) {
  return (
    <ExplainWrapper>
      <ExplainComponent>
        {role === "owner"
          ? "수제 케이크 예약 플랫폼"
          : "원하는 디저트 예약 가능!"}
      </ExplainComponent>
      <ExplainComponent>
        {role === "owner"
          ? "나만의 가게를 운영하자!"
          : "손쉬운 1:1 채팅 서비스"}
      </ExplainComponent>
    </ExplainWrapper>
  );
}
export default Explain;

const ExplainWrapper = styled.div`
  @media screen and (min-width: 1920px) {
    width: 342px;
    height: 135px;
    margin-bottom: 37px;
  }
  @media screen and (max-width: 1919px) {
    width: 228px;
    height: 91px;
    margin-bottom: 25px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ExplainComponent = styled.div`
  @media screen and (min-width: 1920px) {
    width: 342px;
    height: 60px;
    font-size: 18px;
  }
  @media screen and (max-width: 1919px) {
    width: 228px;
    height: 40px;
    font-size: 11px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fcf0e1;
`;
