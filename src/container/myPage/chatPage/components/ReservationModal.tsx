import { useEffect, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ModalWrapper from "../../../../components/ModalWrapper";
import { useRoomInfoState } from "../../../../recoil/chat/roomInfoStateAtom";
import sendApi from "../../../../apis/sendApi";
import { createPortal } from "react-dom";
import { useStompClientContext } from "../context/StompClientProvider";

const ReservationCalendar = ({
  getReservationModalState,
}: {
  getReservationModalState: (modalState: boolean) => void;
}) => {
  const [mounted, setMounted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [roomInfoState, setRoomInfoState] = useRoomInfoState();

  const { onClickReservation } = useStompClientContext();

  const convertedMonth = (month: string) => {
    switch (month) {
      case "Jan":
        return "01";
      case "Feb":
        return "02";
      case "Mar":
        return "03";
      case "Apr":
        return "04";
      case "May":
        return "05";
      case "Jun":
        return "06";
      case "Jul":
        return "07";
      case "Aug":
        return "08";
      case "Sep":
        return "09";
      case "Oct":
        return "10";
      case "Nov":
        return "11";
      case "Dec":
        return "12";
    }
  };

  const stringDateTime = String(selectedDate).split(" ");
  const parsedDateTime = {
    year: stringDateTime[3],
    month: convertedMonth(stringDateTime[1]),
    date: stringDateTime[2],
    time:
      stringDateTime[4].split(":")[0] + ":" + stringDateTime[4].split(":")[1],
  };

  const onClickConfirm = () => {
    if (selectedDate) {
      console.log(selectedDate);

      const dateTime =
        parsedDateTime.year +
        "-" +
        parsedDateTime.month +
        "-" +
        parsedDateTime.date +
        "T" +
        parsedDateTime.time;
      console.log(dateTime);
      const response = sendApi.post("/stores/reservation", {
        dateTime: dateTime,
        client: roomInfoState.partnerName,
      });
      console.log(response);
      return response;
    }
  };

  // 컴포넌트가 Mount된 후 createPortal을 이용해 렌더링 되도록 하기
  useEffect(() => {
    console.log(roomInfoState);
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <Layout>
          <Wrapper>
            <Top>
              <DatePicker
                dateFormat="yyyy-MM-dd h:mm aa" // 날짜 형태
                showTimeSelect
                shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫히도록 설정
                minDate={new Date()} // minDate 이전 날짜 선택이 불가능하도록 설정(오늘 이전 날짜 선택이 불가능하도록 설정)
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </Top>
            <Contents>
              <TextDiv>{roomInfoState.partnerName}님의 예약을</TextDiv>
              <TextDiv>
                {parsedDateTime.year}년 {parsedDateTime.month}월{" "}
                {parsedDateTime.date}일 {parsedDateTime.time}으로
                확정하시겠습니까?
              </TextDiv>
            </Contents>
            <Bottom>
              <ButtonDiv>
                <Button
                  onClick={async () => {
                    const response: any = await onClickConfirm();
                    console.log(response);
                    if (response.status === 201) {
                      onClickReservation(
                        `${roomInfoState.partnerName}님의 예약이 ${parsedDateTime.year}년 ${parsedDateTime.month}월 ${parsedDateTime.date}일 ${parsedDateTime.time}으로 확정되었습니다.`
                      );
                    }
                  }}
                >
                  확인
                </Button>
                <Button onClick={() => getReservationModalState(false)}>
                  닫기
                </Button>
              </ButtonDiv>
            </Bottom>
          </Wrapper>
        </Layout>,
        document.querySelector("#reservationModal") as HTMLElement
      )
    : null;
};

export default ReservationCalendar;

const Layout = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 5;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 250px;
  border-radius: 10px;
  background-color: #ffffff;
  z-index: 15;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 23px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
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
