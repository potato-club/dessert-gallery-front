import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { modalStateAtom } from "../../../recoil/login/modalStateAtom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useKakaoSignupDataState } from "../../../recoil/login/kakaoSignUpStateAtom";
import {
  signUpDataType,
  signupDataStateAtom,
} from "../../../recoil/login/signUpStateAtom";
import { useJWTState } from "../../../recoil/login/JWTStateAtom";
import axios from "axios";

function Modal() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const [signupData, setSignupData] = useRecoilState(signupDataStateAtom);
  const [kakaoSignupData, setKakaoSignupData] = useKakaoSignupDataState();
  const [nickname, setNickname] = useState("");
  const [stepSignup, setStepSignup] = useState(1);
  const [jwtState, setJwtState] = useJWTState();

  const excuteSetSignupData = (signupData: signUpDataType) => {
    if (kakaoSignupData.loginType === "KAKAO") {
      setKakaoSignupData(signupData);
    } else {
      setSignupData(signupData);
    }
  };

  const getSignupData = () => {
    if (kakaoSignupData.loginType === "KAKAO") {
      return kakaoSignupData;
    } else {
      return signupData;
    }
  };

  const closeModal = () => {
    setModalState(false);
    setNickname("");
    setStepSignup(1);
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handleSetNickname = () => {
    excuteSetSignupData({ ...getSignupData(), nickname: nickname });
    console.log(getSignupData());
    closeModal();
  };

  const handleSignup = async () => {
    try {
      const response: any = await axios.post(
        `https://api.dessert-gallery.site/users/signup`,
        { ...getSignupData(), password: "" }
      );
      const accessToken = response.headers.get("Authorization");
      const refreshToken = response.headers.get("Refreshtoken");
      setJwtState({
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    } catch {}
  };

  const renderModalContent = () => {
    switch (stepSignup) {
      case 1:
        return (
          <>
            <ModalContentsDiv>
              <ExplainDiv>
                {getSignupData().userRole === "MANAGER"
                  ? "가게 운영자로 회원가입 하시겠습니까?"
                  : "일반 회원으로 회원가입 하시겠습니까?"}
              </ExplainDiv>
            </ModalContentsDiv>
            <ButtonDiv>
              <ModalButton onClick={() => setStepSignup(2)}>확인</ModalButton>
              <ModalButton onClick={closeModal}>취소</ModalButton>
            </ButtonDiv>
          </>
        );
      case 2:
        return (
          <>
            <ModalContentsDiv>
              <ExplainDiv>닉네임을 입력하세요</ExplainDiv>
              <InputDiv>
                <NicknameInput
                  type="text"
                  onChange={handleNicknameChange}
                  value={nickname}
                  placeholder="닉네임을 입력하세요"
                ></NicknameInput>
              </InputDiv>
            </ModalContentsDiv>
            <ButtonDiv>
              <ModalButton onClick={() => setStepSignup(3)}>확인</ModalButton>
              <ModalButton onClick={closeModal}>취소</ModalButton>
            </ButtonDiv>
          </>
        );
      case 3:
        return (
          <>
            <ModalContentsDiv>
              <ExplainDiv>
                닉네임을 {nickname}(으)로 설정하시겠습니까?
              </ExplainDiv>
            </ModalContentsDiv>
            <ButtonDiv>
              <ModalButton
                onClick={() => {
                  handleSetNickname();
                  handleSignup();
                }}
              >
                확인
              </ModalButton>
              <ModalButton onClick={() => setStepSignup(2)}>취소</ModalButton>
            </ButtonDiv>
          </>
        );
    }
  };

  return <ModalWrapper state={modalState}>{renderModalContent()}</ModalWrapper>;
}

export default Modal;

const ModalWrapper = styled.div<{ state: boolean }>`
  display: ${(props) => (props.state === false ? "none" : "")};
  position: relative;
  border: 1px solid black;
  background-color: white;
  position: absolute;
  width: 500px;
  height: 300px;
`;

const ModalContentsDiv = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px;
`;

const ExplainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
`;

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`;

const NicknameInput = styled.input`
  width: 300px;
  height: 30px;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

const ModalButton = styled.button`
  width: 50px;
  height: 25px;
  margin: 20px;
`;
