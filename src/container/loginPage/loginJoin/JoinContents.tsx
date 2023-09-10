import React from "react";
import Input from "../../../components/Input";
import Tag from "../../../components/Tag";
import styled from "styled-components";
import { useForm } from "react-hook-form";

function JoinContents() {
  const { handleSubmit, getValues, control } = useForm<{
    email?: string;
    password?: string;
  }>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  return (
    <JoinContentsWrapper>
      <Input placeholder="이메일 입력" name="email" control={control} />
      <Input
        placeholder="비밀번호 입력"
        type="password"
        name="password"
        control={control}
      />
      <TagButtonWrapper>
        <Tag
          title="회원가입"
          width="100%"
          height="100%"
          fontSize="100%"
          inversion={true}
          clickAble={true}
          onClickHandler={() => {
            console.log(getValues());
          }}
        />
      </TagButtonWrapper>
    </JoinContentsWrapper>
  );
}

export default JoinContents;

const JoinContentsWrapper = styled.div`
  @media screen and (min-width: 1920px) {
    height: 240px;
  }
  @media screen and (max-width: 1919px) {
    height: 160px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TagButtonWrapper = styled.div`
  @media screen and (min-width: 1920px) {
    width: 500px;
    height: 60px;
  }
  @media screen and (max-width: 1919px) {
    width: 333px;
    height: 40px;
    font-size: 11px;
  }
`;
