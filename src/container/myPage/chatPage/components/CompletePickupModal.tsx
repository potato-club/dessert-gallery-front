import { useEffect, useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { useRoomInfoState } from "../../../../recoil/chat/roomInfoStateAtom";
import axios from "axios";
import { useTokenService } from "../../../../hooks/useTokenService";
import PickupListItem from "./PickupListItem";
import { createPortal } from "react-dom";

type reservationListType = {
  id: number;
  dateTime: string;
};

const CompletePickupModal = ({
  getCompletePickupModalState,
}: {
  getCompletePickupModalState: (modalState: boolean) => void;
}) => {
  const [mounted, setMounted] = useState(false);
  const [roomInfoState, setRoomInfoState] = useRoomInfoState();
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [pickupListState, setPickupListState] =
    useState<reservationListType[]>();

  const { getAccessToken } = useTokenService();

  // 손님의 예약 리스트 받아오기 테스트 코드
  const fetchPickUpList = async () => {
    console.log(roomInfoState);

    const response = await axios.get(
      `https://api.dessert-gallery.site/stores/${roomInfoState.storeId}/chat/reservations?nickname=${roomInfoState.partnerName}`,
      { headers: { Authorization: getAccessToken() } }
    );
    console.log(response);
    return response.data;
  };

  // 손님의 예약 완료처리하기(체크처리하기) 테스트 코드
  const fetchCompletePickup = async () => {
    if (selectedItem) {
      const response = await axios.put(
        `https://api.dessert-gallery.site/stores/schedule?id=${selectedItem}`,
        {},
        { headers: { Authorization: getAccessToken() } }
      );
      console.log(response);
      if (response.status === 200) {
        alert("선택한 예약이 완료처리 되었습니다.");
        getCompletePickupModalState(false);
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      console.log(roomInfoState);

      if (roomInfoState.roomId) {
        const response = await fetchPickUpList();
        console.log(response);

        setPickupListState(response);
      }
    }

    fetchData();
    console.log(pickupListState);

    // setReservationState(reservation);
  }, [roomInfoState]);

  useEffect(() => {
    console.log(roomInfoState);
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <Layout>
          <Wrapper>
            <Top>픽업 완료 처리할 예약을 선택해주세요</Top>
            <Contents>
              {pickupListState?.length !== 0 ? (
                pickupListState &&
                pickupListState.map((item, index) => {
                  return (
                    <PickupListItem
                      key={item.id}
                      onClickItem={() => setSelectedItem(item.id)}
                      isSelected={selectedItem === item.id}
                    >
                      {item.dateTime}
                    </PickupListItem>
                  );
                })
              ) : (
                <NoContentsDiv>픽업 완료처리할 예약이 없습니다.</NoContentsDiv>
              )}
            </Contents>
            <Bottom>
              <ButtonDiv>
                <Button onClick={() => fetchCompletePickup()}>확인</Button>
                <Button onClick={() => getCompletePickupModalState(false)}>
                  닫기
                </Button>
              </ButtonDiv>
            </Bottom>
          </Wrapper>
        </Layout>,
        document.querySelector("#completePickupModal") as HTMLElement
      )
    : null;
};

export default CompletePickupModal;

const Layout = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 11;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
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
  height: 200px;
  gap: 20px;
  overflow: auto;
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
  width: 92px;
  height: 24px;
  font-size: 9px;
  /* @media screen and (min-width: 1920px) {
    width: 122px;
    height: 32px;
    font-size: 12px;
  }
  @media screen and (max-width: 1919px) {
    width: 92px;
    height: 24px;
    font-size: 9px;
  } */
`;

const NoContentsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 21px;
  color: #a09f9f;
`;
