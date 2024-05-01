import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { modalBg } from "../../../../recoil/modalBg/atom";
import StorePosterModal from "./StorePosterModal";
import { userInfoType } from "../ChatPage";
import ReservationModal from "./ReservationModal";
import { useTokenService } from "../../../../hooks/useTokenService";
import CompletePickupModal from "./CompletePickupModal";

const HeaderBottom = ({
  roomInfoState,
  userInfo,
}: {
  roomInfoState: any;
  userInfo?: userInfoType;
}) => {
  const [onModalBg, setOnModalBg] = useRecoilState(modalBg);
  const [reservationModalState, setReservationModalState] =
    useState<boolean>(false);
  const [completePickupModalState, setCmpletePickupModalState] =
    useState<boolean>(false);

  const { getAccessToken } = useTokenService();

  const getReservationModalState = (modalState: boolean) => {
    setReservationModalState(modalState);
  };

  const getCompletePickupModalState = (modalState: boolean) => {
    setCmpletePickupModalState(modalState);
  };

  return (
    <>
      <Container>
        <Product>
          <ModalOnButton onClick={() => setOnModalBg(true)}>
            가게 게시물 전체 보기
          </ModalOnButton>
        </Product>
        <ButtonDiv userRole={userInfo && userInfo.userRole}>
          <Button
            onClick={() => {
              setReservationModalState(true);
            }}
          >
            예약 확정
          </Button>
          <Button
            onClick={() => {
              setCmpletePickupModalState(true);
            }}
          >
            픽업 완료
          </Button>
        </ButtonDiv>
      </Container>
      {reservationModalState && (
        <ReservationModal getReservationModalState={getReservationModalState} />
      )}
      {completePickupModalState && (
        <CompletePickupModal
          getCompletePickupModalState={getCompletePickupModalState}
        />
      )}

      {onModalBg && (
        <StorePosterModal storeId={roomInfoState.storeId} userInfo={userInfo} />
      )}
    </>
  );
};

export default HeaderBottom;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 12px 34px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -10px 36px -28px inset;
  transform: translateY(-30px);
  transition: all ease-in-out 300ms;
  &:hover {
    transform: translateY(0px);
  }
`;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonDiv = styled.div<{ userRole?: "USER" | "MANAGER" }>`
  display: ${(props) => (props.userRole === "MANAGER" ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1920px) {
    width: 269px;
  }
  @media screen and (max-width: 1919px) {
    width: 202px;
  }
`;

// 그림자 버전 버튼
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  background-color: #fcf6ee;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  @media screen and (min-width: 1920px) {
    width: 122px;
    height: 32px;
    font-size: 12px;
  }
  @media screen and (max-width: 1919px) {
    width: 92px;
    height: 24px;
    font-size: 9px;
  }
`;

const ModalOnButton = styled(Button)`
  width: fit-content;
  padding: 5px 20px;
`;
