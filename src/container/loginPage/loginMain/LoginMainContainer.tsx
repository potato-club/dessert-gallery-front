import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import LoginBackground from "../../../public/svg/loginPage/loginBackground.svg";
import Title from "../components/Title";
import Input from "../../../components/Input";
import Navigaiton from "./Navigtion";
import Horizon from "./Horizon";
import Tag from "../../../components/Tag";
import SocialLogin from "./SocialLogin";
import Wrapper from "../components/Wrapper";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import LoginModal from "../components/LoginModal";
import { useTokenService } from "../../../hooks/useTokenService";
import { loginPageApi } from "../../../apis/controller/loginPage";

type inputType = {
  /**
   * (선택)placeholder에 출력할 텍스트
   */
  placeholder?: string;

  /**
   * (선택)Input의 margin-bottom 값
   */
  marginBottom?: number;
  type?: "password";
};

function LoginMainContainer() {
  const router = useRouter();
  const { setToken } = useTokenService();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const { getValues, control } = useForm<{
    email: string;
    password: string;
  }>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const handleLogin = async () => {
    const email = getValues("email");
    const password = getValues("password");

    try {
      console.log("try login");

      const response: any = await loginPageApi.postLogin({
        email: email,
        password: password,
      });

      if (response.data.responseCode === "200") {
        console.log(response);
        const accessToken = response.headers.get("Authorization");
        const refreshToken = response.headers.get("Refreshtoken");
        setToken(accessToken, refreshToken);
        setModalMessage("정상 로그인 되었습니다.");
        setIsModalOpen(true);
        setIsLoginSuccess(true);
      } else {
        setIsModalOpen(true);
        setModalMessage("로그인에 실패했습니다.");
        console.log("에러", response.data);
      }
    } catch (error) {
      setIsModalOpen(true);
      setModalMessage("로그인에 실패했습니다.");
    }
  };

  return (
    <Wrapper>
      <LoginModal
        isOpen={isModalOpen}
        onClickClose={() => setIsModalOpen(false)}
        onClickConfirm={() => {
          if (isLoginSuccess) {
            router.push("/");
            setIsModalOpen(false);
          } else {
            setIsModalOpen(false);
          }
        }}
      >
        {modalMessage}
      </LoginModal>
      <MainWrapper>
        <MainContnentsWrapper>
          <Title>LOGIN</Title>
          <InputDiv>
            <Input placeholder="이메일 입력" name="email" control={control} />
            <Input
              placeholder="비밀번호 입력"
              type="password"
              name="password"
              control={control}
            />
          </InputDiv>
          <Navigaiton />
          <TagButtonWrapper>
            <Tag
              title="로그인"
              width="100%"
              height="100%"
              fontSize="100%"
              inversion={true}
              clickAble={true}
              onClickHandler={handleLogin}
            />
          </TagButtonWrapper>
          <Horizon />
          <SocialLogin />
        </MainContnentsWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export default LoginMainContainer;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const MainContnentsWrapper = styled.div`
  @media screen and (min-width: 1920px) {
    width: 500px;
    height: 571px;
  }
  @media screen and (max-width: 1919px) {
    width: 333px;
    height: 379px;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputDiv = styled.div`
  @media screen and (min-width: 1920px) {
    height: 145px;
  }
  @media screen and (max-width: 1919px) {
    height: 97px;
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
