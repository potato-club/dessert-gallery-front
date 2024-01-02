import React from "react";
import styled from "styled-components";

const EventAddBox = () => {
  return (
    <Container>
      <PickColumn>
        <input type="checkbox" />
        <Title>휴무일 추가하기</Title>
        <SubText>가게의 쉬는 날을 지정하여 표시합니다</SubText>
      </PickColumn>
      <PickColumn>
        <input type="checkbox" />
        <Title>이벤트 추가하기</Title>
        <SubText>가게의 이벤트 등 특별한 날을 표시합니다</SubText>
      </PickColumn>
    </Container>
  );
};

export default EventAddBox;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 21px;
  width: 758px;
  height: 201px;
  background-color: #fbf5ee;
  border-radius: 20px;
  margin-top: 30px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  padding-left: 43px;
`;
const PickColumn = styled.div`
  display: flex;
`;
const Title = styled.span`
  margin: 0px 181px 0px 36px;
  color: #000;
  font-family: Noto Sans CJK KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const SubText = styled.span`
  color: #000;
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
