import React, { useState } from "react";
import Input from "../../../components/Input";
import Tag from "../../../components/Tag";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSignupDataState } from "../../../recoil/login/signUpStateAtom";
import axios from "axios";
import { useRouter } from "next/router";
import { useTokenService } from "../../../hooks/useTokenService";
import LoginModal from "../components/LoginModal";
import { loginPageApi } from "../../../apis/controller/loginPage";

function VerifyContents() {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const [isVerifyCodeSend, setIsVerifyCodeSend] = useState(false);
  const [signupData, setSignupData] = useSignupDataState();
  const { setToken } = useTokenService();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isVerify, setIsVerify] = useState(false);

  const { getValues, control } = useForm<{
    verifyCode: string;
  }>({
    defaultValues: {
      verifyCode: "",
    },
    mode: "onChange",
  });

  const handleSendVerifyCode = async () => {
    const email = signupData.email;
    console.log(email);

    if (email !== "") {
      const response = await loginPageApi.postSendVerifyCode(email);

      console.log(response);
      console.log(response.status);
      if (response.status === 200) {
        setIsVerifyCodeSend(true);
      }
    }
  };

  const handleCheckVerifyCode = async () => {
    const formData = new FormData();
    const key = getValues("verifyCode");
    if (key) {
      formData.append("key", key);
    }
    try {
      const response: any = await loginPageApi.postCheckVerifyCode(formData);
      console.log(response);
      console.log(response.data.responseCode);
      if (response.status === 200) {
        const accessToken = response.headers.get("Authorization");
        const refreshToken = response.headers.get("Refreshtoken");
        setToken(accessToken, refreshToken);
        setIsVerify(true);
        setModalMessage("정상 인증되어 로그인되었습니다.");
        setIsModalOpen(true);
      } else {
        setModalMessage("정상 인증에 실패했습니다.");
        setIsModalOpen(true);
      }
    } catch (error) {
      console.log(error);
      setModalMessage("정상 인증에 실패했습니다.");
      setIsModalOpen(true);
    }
  };

  return (
    <VerifyContentsWrapper>
      <LoginModal
        isOpen={isModalOpen}
        onClickClose={() => setIsModalOpen(false)}
        onClickConfirm={() => {
          if (isVerify) {
            setIsModalOpen(false);
            router.push("/");
          } else {
            setIsModalOpen(false);
          }
        }}
      >
        {modalMessage}
      </LoginModal>
      <ExtendedInputWrapper>
        <Input
          placeholder="인증 코드 입력"
          name="verifyCode"
          control={control}
        />
        <SmallTagButtonWrapper>
          <Tag
            title={isVerifyCodeSend ? "인증 코드 재전송" : "인증 코드 전송"}
            width="100%"
            height="100%"
            fontSize="100%"
            inversion={true}
            clickAble={true}
            onClickHandler={handleSendVerifyCode}
          />
        </SmallTagButtonWrapper>
      </ExtendedInputWrapper>
      <TagButtonWrapper>
        <Tag
          title="인증코드 확인"
          width="100%"
          height="100%"
          fontSize="100%"
          inversion={true}
          clickAble={true}
          onClickHandler={handleCheckVerifyCode}
        />
      </TagButtonWrapper>
    </VerifyContentsWrapper>
  );
}

export default VerifyContents;

const VerifyContentsWrapper = styled.div`
  @media screen and (min-width: 1920px) {
    height: 150px;
  }
  @media screen and (max-width: 1919px) {
    height: 100px;
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
