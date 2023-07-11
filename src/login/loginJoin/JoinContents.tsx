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

      <TagDiv wrapperWidth={1920}>
        <Tag
          title="회원가입"
          width="500px"
          height="60px"
          inversion={true}
          clickAble={true}
          onClickHandler={() => {}}
        />
      </TagDiv>
      <TagDiv wrapperWidth={1280}>
        <Tag
          title="회원가입"
          width="333px"
          height="40px"
          fontSize="11px"
          inversion={true}
          clickAble={true}
          onClickHandler={() => {}}
        />
      </TagDiv>
    </JoinContentsWrapper>
  );
}

export default JoinContents;

const JoinContentsWrapper = styled.div`
  @media screen and (min-width: 1920px) {
    height: 400px;
  }
  @media screen and (max-width: 1919px) {
    height: 283px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TagDiv = styled.div<{ wrapperWidth: 1280 | 1920 }>`
  @media screen and (min-width: 1920px) {
    display: ${(props) => (props.wrapperWidth === 1920 ? "" : "none")};
  }
  @media screen and (max-width: 1919px) {
    display: ${(props) => (props.wrapperWidth === 1280 ? "" : "none")};
  }
`;
