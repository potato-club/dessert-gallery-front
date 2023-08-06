import React from "react";
import styled from "styled-components";
import ContentsTitle from "./ContentsTitle";
import OwnerImage from "../../../../public/svg/loginPage/owner.svg";
import UserImage from "../../../../public/svg/loginPage/user.svg";
import Explain from "./Explain";
import Tag from "../../../components/Tag";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { signUpDataStateAtom } from "../../../recoil/login/signUpStateAtom";
import { modalStateAtom } from "../../../recoil/login/modalStateAtom";

function PickContents({ role }: { role: "owner" | "user" }) {
  const router = useRouter();
  const [signUpData, setSignUpData] = useRecoilState(signUpDataStateAtom);
  const [modalState, setModalState] = useRecoilState(modalStateAtom);

  const updateUserRole = () => {
    console.log(123);

    const userRole = role === "owner" ? "MANAGER" : "USER";
    console.log(userRole);

    setSignUpData({
      ...signUpData,
      userRole: userRole,
    });
  };

  const checkUserRole = () => {
    const explain =
      role === "owner"
        ? "가게 운영자로 회원가입 하시겠습니까?"
        : "일반 회원으로 회원가입 하시겠습니까?";

    setModalState({
      ...modalState,
      state: true,
      explain: explain,
      onClickConfirmButton: () => {
        updateUserRole();
        inputUserNickname();
      },
      onClickCancelButton: () => {
        setModalState({ ...modalState, state: false });
      },
    });
  };

  const inputUserNickname = () => {
    setModalState({
      ...modalState,
      state: true,
      explain: "닉네임을 입력해주세요",
      inputState: true,
      onClickConfirmButton: () => {
        console.log(modalState.inputValue);

        checkUserNickname();
      },
      onClickCancelButton: () => {
        setModalState({ ...modalState });
      },
    });
  };

  const checkUserNickname = () => {
    console.log(modalState);

    setModalState({
      ...modalState,
      state: true,
      explain: `닉네임을 ${modalState.inputValue}로 설정하시겠습니까?`,
      inputState: false,
      onClickConfirmButton: () => {
        setSignUpData({ ...signUpData, nickname: modalState.inputValue });
        console.log(signUpData);
      },
      onClickCancelButton: () => {
        inputUserNickname();
      },
    });
  };

  return (
    <PickContentsDiv>
      <ImageWrapper>
        {role === "owner" ? <OwnerImage /> : <UserImage />}
      </ImageWrapper>
      <ContentsTitle>
        {role === "owner" ? "가게 운영자" : "일반 회원님"}
      </ContentsTitle>
      <Explain role={role === "owner" ? "owner" : "user"} />
      <TagButtonWrapper>
        <Tag
          title={role === "owner" ? "가게 운영자 로그인" : "일반 회원 로그인"}
          width="100%"
          height="100%"
          fontSize="100%"
          inversion={role === "owner" ? true : false}
          clickAble={true}
          onClickHandler={() => {
            checkUserRole();
          }}
        />
      </TagButtonWrapper>
    </PickContentsDiv>
  );
}

export default PickContents;

const PickContentsDiv = styled.div`
  @media screen and (min-width: 1920px) {
    width: 342px;
    height: 480px;
  }
  @media screen and (max-width: 1919px) {
    width: 227px;
    height: 320px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  @media screen and (min-width: 1920px) {
    width: 123.8px;
  }
  @media screen and (max-width: 1919px) {
    width: 82px;
  }
`;

const TagButtonWrapper = styled.div`
  @media screen and (min-width: 1920px) {
    width: 342px;
    height: 60px;
    font-size: 18px;
  }
  @media screen and (max-width: 1919px) {
    width: 228px;
    height: 40px;
    font-size: 11px;
  }
`;
