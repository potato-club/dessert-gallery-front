import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContentsTitle from "./ContentsTitle";
import OwnerImage from "../../../../public/svg/loginPage/owner.svg";
import UserImage from "../../../../public/svg/loginPage/user.svg";
import Explain from "./Explain";
import Tag from "../../../components/Tag";
import { useRouter } from "next/router";
import { useSetRecoilState, useRecoilState } from "recoil";
import { modalStateAtom } from "../../../recoil/login/modalStateAtom";
import { useSignupDataState } from "../../../recoil/login/signUpStateAtom";
import LoginModal from "../components/LoginModal";

function PickContents({ role }: { role: "owner" | "user" }) {
  const router = useRouter();
  const [signupData, setSignupData] = useSignupDataState();
  const setModalState = useSetRecoilState(modalStateAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const updateUserRole = () => {
    console.log(123);

    const userRole = role === "owner" ? "MANAGER" : "USER";
    console.log(userRole);

    setSignupData({
      ...signupData,
      userRole: userRole,
    });
  };

  return (
    <PickContentsDiv>
      <LoginModal
        isOpen={isModalOpen}
        onClickClose={() => setIsModalOpen(false)}
        onClickConfirm={() => {
          router.push("/login/join");
        }}
      >
        {modalMessage}
      </LoginModal>
      <ImageWrapper>
        {role === "owner" ? <OwnerImage /> : <UserImage />}
      </ImageWrapper>
      <ContentsTitle>
        {role === "owner" ? "가게 운영자" : "일반 회원님"}
      </ContentsTitle>
      <Explain role={role === "owner" ? "owner" : "user"} />
      <TagButtonWrapper>
        <Tag
          title={
            role === "owner" ? "가게 운영자 회원가입" : "일반 회원 회원가입"
          }
          width="100%"
          height="100%"
          fontSize="100%"
          inversion={role === "owner" ? true : false}
          clickAble={true}
          onClickHandler={() => {
            // pick 페이지 모달 테스트 시에는 아래 if문 주석처리 후 아래 코드 주석 해제
            // setModalState(true);

            updateUserRole();
            if (signupData.loginType === "KAKAO") {
              setModalState(true);
            } else {
              const message =
                role === "owner"
                  ? `가게 운영자로 회원가입 하시겠습니까?\n`
                  : `일반 회원으로 회원가입 하시겠습니까?\n`;
              setModalMessage(
                message + "(회원가입 후에는 변경할 수 없습니다.)"
              );
              setIsModalOpen(true);
            }
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
