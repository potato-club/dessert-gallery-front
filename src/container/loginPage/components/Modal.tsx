import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { modalStateAtom } from "../../../recoil/login/modalStateAtom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useSignupDataState } from "../../../recoil/login/signUpStateAtom";
import { useTokenService } from "../../../hooks/useTokenService";
import axios from "axios";
import { useRouter } from "next/router";
import { loginPageApi } from "../../../apis/controller/loginPage";

function Modal() {
  const router = useRouter();
  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [isDuplicatedNickname, setIsDuplicatedNickname] = useState(false);
  const [signupData, setSignupData] = useSignupDataState();
  const [nickname, setNickname] = useState("");
  const [stepSignup, setStepSignup] = useState(1);
  const { setToken } = useTokenService();

  const closeModal = () => {
    setModalState(false);
    setNickname("");
    setStepSignup(1);
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handleCheckNickname = async () => {
    const response = await loginPageApi.getDuplicationNickname(nickname);
    console.log(response);
    if (response.data === false) {
      setIsNicknameChecked(true);
      setStepSignup(stepSignup + 1);
    } else {
      setIsDuplicatedNickname(true);
      setTimeout(() => {
        setIsDuplicatedNickname(false);
      }, 2000);
    }
  };

  const handleSignup = async () => {
    try {
      const response: any = await loginPageApi.postSignup({
        email: signupData.email,
        loginType: signupData.loginType,
        userRole: signupData.userRole,
        nickname: nickname,
        password: "",
      });
      const accessToken = response.headers.get("Authorization");
      const refreshToken = response.headers.get("Refreshtoken");
      setToken(accessToken, refreshToken);
      router.push("/");
    } catch {}
  };

  const stepMessage = () => {
    switch (stepSignup) {
      case 1:
        return signupData.userRole === "MANAGER"
          ? "가게 운영자로 회원가입 하시겠습니까?"
          : "일반 회원으로 회원가입 하시겠습니까?";

      case 2:
        return "닉네임을 입력하세요";

      case 3:
        return `닉네임을 ${nickname}(으)로 설정하시겠습니까?`;
    }
  };

  return (
    <ModalWrapper state={modalState}>
      <ExplainDiv>{stepMessage()}</ExplainDiv>
      <InputDiv>
        <NicknameInput
          type="text"
          onChange={handleNicknameChange}
          value={nickname}
          placeholder="닉네임을 입력하세요"
          stepSignup={stepSignup}
        ></NicknameInput>
        <NicknameCheckP stepSignup={stepSignup} nickname={nickname}>
          닉네임이 입력되지 않았습니다.
        </NicknameCheckP>
        <DuplicatedNicknameCheckP
          stepSignup={stepSignup}
          isDuplicatedNickname={isDuplicatedNickname}
        >
          중복된 닉네임이 있습니다.
        </DuplicatedNicknameCheckP>
      </InputDiv>

      <ButtonDiv>
        <ModalButton
          onClick={() => {
            if (stepSignup === 3) {
              handleSignup();
            } else if (stepSignup === 2) {
              if (nickname === "") {
                return;
              } else {
                handleCheckNickname();
              }
            } else {
              setStepSignup(stepSignup + 1);
            }
          }}
        >
          확인
        </ModalButton>
        <ModalButton
          onClick={() => {
            if (stepSignup === 1) {
              closeModal();
            } else {
              setStepSignup(stepSignup - 1);
            }
          }}
        >
          취소
        </ModalButton>
      </ButtonDiv>
    </ModalWrapper>
  );
}

export default Modal;

const ModalWrapper = styled.div<{ state: boolean }>`
  display: ${(props) => (props.state === false ? "none" : "")};
  border: 3px solid #ff6f00;
  border-radius: 6px;
  background-color: white;
  position: absolute;
  font-size: 21px;
  padding: 0 108px;
  width: 620px;
  height: 360px;
  font-family: noto-sans-cjk-kr, sans-serif;
`;

const ExplainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 167px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 92px;
`;

const NicknameInput = styled.input<{ stepSignup: number }>`
  display: ${(props) => (props.stepSignup !== 2 ? "none" : "")};
  width: 100%;
  height: 40px;
  padding: 0 20px;
  font-size: 15px;
  border-color: #828282;
  border-radius: 6px;
`;

const NicknameCheckP = styled.p<{ nickname: string; stepSignup: number }>`
  display: ${(props) =>
    props.stepSignup === 2 && props.nickname === "" ? "flex" : "none"};
  height: 25px;
  margin-left: 20px;
  align-items: center;
  font-size: 11px;
  color: #ff6f00;
`;

const DuplicatedNicknameCheckP = styled.p<{
  isDuplicatedNickname: boolean;
  stepSignup: number;
}>`
  display: ${(props) =>
    props.stepSignup === 2 && props.isDuplicatedNickname === true
      ? "flex"
      : "none"};
  height: 25px;
  margin-left: 20px;
  align-items: center;
  font-size: 11px;
  color: #ff6f00;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 101px;
`;

const ModalButton = styled.button`
  width: 170px;
  height: 50px;
  border-radius: 6px;
  background-color: #fcf0e1;
  border: none;
  color: #ff6f00;
  font-size: 18px;
  font-weight: bold;
  :hover {
    background-color: #ff6f00;
    color: #fcf0e1;
  }
`;
