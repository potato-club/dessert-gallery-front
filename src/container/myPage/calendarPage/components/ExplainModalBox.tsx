import React from "react";
import styled from "styled-components";
import { ArrowUp } from "../../../../../public/svg";

const ExplainModalBox = () => {
  return (
    <Container>
      <TextModal>
        <ArrowUp fill="#ffffff" />
        <SpanDiv>
          <span>
            <StrongText>[휴무일]</StrongText> 과
            <StrongText>[이벤트]</StrongText> 를 체크하여 마이 캘린더를 관리해
            보세요
          </span>
          <span>자신의 가게 페이지에 휴무, 이벤트날을 표기할 수 있습니다</span>
          <span>
            우측의 <StrongText>[메모장]</StrongText> 을 통해 자신의 할 일을
            리스트로 만들 수 있습니다
          </span>
          <LastSpan>
            또한 <StrongText>[캘린더 날짜]</StrongText> 를 클릭하여 그 날의 손님
            리스트를 확인해 보세요
          </LastSpan>
        </SpanDiv>
      </TextModal>
    </Container>
  );
};

export default ExplainModalBox;

const Container = styled.div`
  position: absolute;
  filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.16));
`;
const TextModal = styled.div`
  position: absolute;
  left: 450px;
  top: 40px;
  width: 300px;
  height: 128px;
  padding: 19px 22px;
  background-color: white;
  border-radius: 10px;
  svg {
    position: relative;
    left: 200px;
    z-index: 10;
    top: -35px;
  }
`;
const SpanDiv = styled.div`
  position: relative;
  top: -13px;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const StrongText = styled.span`
  color: #ff6f00;
`;
const LastSpan = styled.span`
  margin-top: 21px;
`;
