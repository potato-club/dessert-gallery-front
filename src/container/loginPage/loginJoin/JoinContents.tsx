import React, { useState } from "react";
import Input from "../../../components/Input";
import Tag from "../../../components/Tag";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilState } from "recoil";
import { useSignupDataState } from "../../../recoil/login/signUpStateAtom";
import axios from "axios";
import { useRouter } from "next/router";
import { useJWTState } from "../../../recoil/login/JWTStateAtom";
import { useTokenService } from "../../../hooks/useTokenService";

function JoinContents() {
  const router = useRouter();

  const [isEmailSend, setIsEmailSend] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const [isPasswordChecked, setIsPasswordChecked] = useState(false);
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [signtupData, setSignupData] = useSignupDataState();
  const { setToken } = useTokenService();

  const { handleSubmit, getValues, control } = useForm<{
    email?: string;
    verifyCode?: string;
    password?: string;
    checkPassword?: string;
    nickname?: string;
  }>({
    defaultValues: {
      email: "",
      verifyCode: "",
      password: "",
      checkPassword: "",
    },
    mode: "onChange",
  });

  const handleCheckEmail = async () => {
    const email = getValues("email");
    console.log(email);

    if (email !== "") {
      const response = await axios.post(
        "https://api.dessert-gallery.site/users/mail/gmail",
        {
          headers: {
            "Content-Type": "text/javascript",
          },
        },
        {
          params: {
            recipientEmail: email,
          },
        }
      );
      console.log(response);
    } else {
      console.log("gmail 혹은 네이버 아이디 형식이 아닙니다.");
    }
  };

  const handlCheckVerifyCode = async () => {
    const verifyCode = getValues("verifyCode");
    const response = await axios.post(
      "https://api.dessert-gallery.site/users/mail/verify",
      {},
      {
        params: {
          key: verifyCode,
        },
      }
    );

    console.log(response);
    // 성공했을 경우 isVerify state를 true로 변경하기
  };

  const handleSignup = () => {
    const email = getValues("email");
    const password = getValues("password");

    if (!isVerify) {
      console.log("인증되지 않은 이메일입니다.");
    } else if (!isPasswordChecked) {
      console.log("비밀번호 확인이 일치하지 않습니다.");
    } else {
      setSignupDataState({
        ...signupDataState,
        email: email,
      });
      getPassword(password);
    }
    router.push("/login/pick");
  };

  return (
    <JoinContentsWrapper>
      <EmailVerifyWrapper>
        <Input
          placeholder="이메일 입력(네이버 혹은 구글)"
          name="email"
          control={control}
          rules={{ required: "이메일은 필수 항목입니다." }}
        />
        <SmallTagButtonWrapper>
          <Tag
            title="인증 코드 전송"
            width="100%"
            height="100%"
            fontSize="100%"
            inversion={true}
            clickAble={true}
            onClickHandler={handleCheckEmail}
          />
        </SmallTagButtonWrapper>
      </EmailVerifyWrapper>
      <EmailVerifyWrapper>
        <Input
          placeholder="인증 코드 입력"
          name="verifyCode"
          control={control}
        />
        <SmallTagButtonWrapper>
          <Tag
            title="인증 코드 확인"
            width="100%"
            height="100%"
            fontSize="100%"
            inversion={true}
            clickAble={true}
            onClickHandler={handlCheckVerifyCode}
          />
        </SmallTagButtonWrapper>
      </EmailVerifyWrapper>
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
    height: 280px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const EmailVerifyWrapper = styled.div`
  position: relative;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
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
