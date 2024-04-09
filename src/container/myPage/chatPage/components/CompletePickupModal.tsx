import { useEffect, useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { useRoomInfoState } from "../../../../recoil/chat/roomInfoStateAtom";
import axios from "axios";
import { useTokenService } from "../../../../hooks/useTokenService";

const CompletePickupModal = ({
  getCompletePickupModalState,
}: {
  getCompletePickupModalState: (modalState: boolean) => void;
}) => {
  const [roomInfoState, setRoomInfoState] = useRoomInfoState();
  const [reservationState, setReservationState] = useState();
  const { getAccessToken } = useTokenService();

  // 손님의 예약 리스트 받아오기 테스트 코드
  const fetchPickUpList = async () => {
    console.log(roomInfoState);

    const response = await axios.get(
      `https://api.dessert-gallery.site/stores/${roomInfoState.storeId}/chat/reservations?nickname=${roomInfoState.partnerName}`,
      { headers: { Authorization: getAccessToken() } }
    );
    console.log(response);
    return response;
  };

  // // 손님의 예약 완료처리하기(체크처리하기) 테스트 코드
  // const onClicktest = async () => {
  //   const response = await axios.put(
  //     `https://api.dessert-gallery.site/stores/schedule?id=${1}`,
  //     {},
  //     { headers: { Authorization: getAccessToken() } }
  //   );
  //   console.log(response);
  // };

  useEffect(() => {
    console.log(roomInfoState);

    const reservation = fetchPickUpList();

    // setReservationState(reservation);
  }, [roomInfoState]);

  return (
    <Wrapper>
      <Top></Top>
      <Contents></Contents>
      <Bottom>
        <ButtonDiv>
          <Button>확인</Button>
          <Button onClick={() => getCompletePickupModalState(false)}>
            닫기
          </Button>
        </ButtonDiv>
      </Bottom>
    </Wrapper>
  );
};

export default CompletePickupModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
  position: absolute;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #ffffff;
  z-index: 10;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 200px;
`;

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
