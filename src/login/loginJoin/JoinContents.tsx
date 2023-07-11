import React from "react";
import Input from "../../components/Input";
import Tag from "../../components/Tag";
import styled from "styled-components";

function JoinContents() {
  return (
    <JoinContentsWrapper>
      <Input placeholder="이름 입력" />
      <Input placeholder="닉네임 입력" />
      <Input placeholder="이메일 입력" />
      <Input placeholder="비밀번호 입력" />
      <Tag
        title="회원가입"
        width="500px"
        height="60px"
        inversion={true}
        clickAble={true}
        onClickHandler={() => {}}
      />
    </JoinContentsWrapper>
  );
}

export default JoinContents;

const JoinContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
`;
