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
      nickname: "",
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
      console.log(response.status);
      if (response.status === 200) {
        setIsEmailSend(true);
      }
    } else {
      console.log("gmail 혹은 네이버 아이디 형식이 아닙니다.");
    }
  };

  const handlCheckVerifyCode = async () => {
    const verifyCode = getValues("verifyCode");
    const formData = new FormData();
    const key = getValues("verifyCode");
    if (key) {
      formData.append("key", key);
    }

    const response = await axios.post(
      "https://api.dessert-gallery.site/users/mail/verify",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
    console.log(response.data.responseCode);
    if (response.status === 200) {
      setIsVerify(true);
    }
  };

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

    if (!isVerify) {
      console.log("인증되지 않은 이메일입니다.");
    } else if (!(getValues("password") === getValues("checkPassword"))) {
      console.log("비밀번호 확인이 일치하지 않습니다.");
    } else if (!isNicknameChecked) {
      console.log("닉네임 중복 확인이 처리되지 않았습니다.");
    } else {
      try {
        const response: any = await axios.post(
          `https://api.dessert-gallery.site/users/signup`,
          {
            loginType: signtupData.loginType,
            userRole: signtupData.userRole,
            email: getValues("email"),
            nickname: getValues("nickname"),
            password: getValues("password"),
          }
        );
        const accessToken = response.headers.get("Authorization");
        const refreshToken = response.headers.get("Refreshtoken");
        setToken(accessToken, refreshToken);
        console.log(response);
      } catch {
        // console.log();
      }
    }
  };

  return (
    <JoinContentsWrapper>
      <ExtendedInputWrapper>
        <Input
          placeholder="이메일 입력(네이버 혹은 구글)"
          name="email"
          control={control}
          rules={{ required: "이메일은 필수 항목입니다." }}
        />
        <SmallTagButtonWrapper>
          <Tag
            title={isEmailSend ? "인증 코드 재전송" : "인증 코드 전송"}
            width="100%"
            height="100%"
            fontSize="100%"
            inversion={true}
            clickAble={true}
            onClickHandler={handleCheckEmail}
          />
        </SmallTagButtonWrapper>
      </ExtendedInputWrapper>
      <ExtendedInputWrapper>
        <Input
          placeholder="인증 코드 입력"
          name="verifyCode"
          control={control}
        />
        <SmallTagButtonWrapper>
          <Tag
            title={isVerify ? "인증 완료" : "인증 코드 확인"}
            width="100%"
            height="100%"
            fontSize="100%"
            inversion={true}
            clickAble={true}
            onClickHandler={handlCheckVerifyCode}
          />
        </SmallTagButtonWrapper>
      </ExtendedInputWrapper>

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
