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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 342px;
  height: 135px;
  margin-bottom: 37px;
`;

const ExplainComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 342px;
  height: 60px;
  font-size: 18px;
  background-color: #fcf0e1;
`;
