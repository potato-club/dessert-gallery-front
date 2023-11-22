import React, { useState } from "react";
import Input from "../../../components/Input";
import Tag from "../../../components/Tag";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSignupDataState } from "../../../recoil/login/signUpStateAtom";
import axios from "axios";
import { useVerifyPageState } from "../../../recoil/login/veifyPageStateAtom";

function JoinContents() {
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [signupData, setSignupData] = useSignupDataState();
  const [verifyPageState, setVerifyPageState] = useVerifyPageState();

  const { getValues, control } = useForm<{
    email?: string;
    password?: string;
    checkPassword?: string;
    nickname?: string;
  }>({
    defaultValues: {
      email: "",
      password: "",
      checkPassword: "",
      nickname: "",
    },
    mode: "onChange",
  });

  const handlCheckNickname = async () => {
    const nickname = getValues("nickname");
    const response = await axios.get(
      "https://api.dessert-gallery.site/users/duplication/nickname",
      {
        params: {
          nickname: nickname,
        },
      }
    );
    console.log(response);
    if (response.status === 200) {
      setIsNicknameChecked(true);
    }
  };

  const handleSignup = async () => {
    const email = getValues("email");
    const password = getValues("password");

    if (!(getValues("password") === getValues("checkPassword"))) {
      console.log("비밀번호 확인이 일치하지 않습니다.");
    } else if (!isNicknameChecked) {
      console.log("닉네임 중복 확인이 처리되지 않았습니다.");
    } else {
      try {
        const response: any = await axios.post(
          `https://api.dessert-gallery.site/users/signup`,
          {
            loginType: signupData.loginType,
            userRole: signupData.userRole,
            email: getValues("email"),
            nickname: getValues("nickname"),
            password: getValues("password"),
          }
        );
        console.log(response);
        if (response.status === 200) {
          setSignupData({ ...signupData, email: getValues("email") });
          setVerifyPageState(true);
        }
      } catch {}
    }
  };

  return (
    <JoinContentsWrapper>
      <Input
        placeholder="이메일 입력"
        name="email"
        control={control}
        rules={{ required: "이메일은 필수 항목입니다." }}
      />
      <ExtendedInputWrapper>
        <Input placeholder="닉네임 입력" name="nickname" control={control} />
        <SmallTagButtonWrapper>
          <Tag
            title={isNicknameChecked ? "닉네임 확인 완료" : "닉네임 중복 확인"}
            width="100%"
            height="100%"
            fontSize="100%"
            inversion={true}
            clickAble={true}
            onClickHandler={handlCheckNickname}
          />
        </SmallTagButtonWrapper>
      </ExtendedInputWrapper>
      <Input
        placeholder="비밀번호 입력"
        type="password"
        name="password"
        control={control}
      />
      <Input
        placeholder="비밀번호 확인"
        type="password"
        name="checkPassword"
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
          onClickHandler={handleSignup}
        />
      </TagButtonWrapper>
    </JoinContentsWrapper>
  );
}

export default JoinContents;

const JoinContentsWrapper = styled.div`
  @media screen and (min-width: 1920px) {
    height: 420px;
  }
  @media screen and (max-width: 1919px) {
    height: 290px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ExtendedInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1920px) {
    width: 750px;
  }
  @media screen and (max-width: 1919px) {
    width: 500px;
  }
`;

const SmallTagButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  @media screen and (min-width: 1920px) {
    width: 100px;
    height: 30px;
    font-size: 11px;
  }
  @media screen and (max-width: 1919px) {
    width: 70px;
    height: 20px;
    font-size: 8px;
  }
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
