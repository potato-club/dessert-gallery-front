import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Calender from "./components/StoreCalendar";
import StoreProfile from "./components/StoreProfile";
import StoreContent from "./components/StoreContent";
import { StoreProps } from "../../../pages/galleryBoard/[store]";
import { useRecoilValue } from "recoil";
import { JWTStateAtom } from "../../recoil/login/JWTStateAtom";
import { useGetScheduleForUser } from "../../hooks/useSchedule";
import { BoardBottom } from "../../../public/image";
import AnnounceList from "./components/Announce";

const StorePage = (props: StoreProps) => {
  const [isGuest, setIsGuest] = useState<boolean>(true);
  const jwtData = useRecoilValue(JWTStateAtom);

  useEffect(() => {
    if (jwtData.accessToken) {
      setIsGuest(false);
    }
  }, [jwtData]);

  const { setDateInfo, calendarData } = useGetScheduleForUser(props.storeId);

  return (
    <Container>
      {/* 가게 프로필, 가게 캘린더 */}
      <StoreInfo>
        <StoreProfile />
        <CalDiv>
          <Calender
            scheduleList={calendarData?.scheduleList}
            setDateInfo={setDateInfo}
          />
        </CalDiv>
      </StoreInfo>

      {/* 공지사항 */}
      <AnnounceList storeId={props.storeId} />

      {/* 게시글 or 리뷰 */}
      <StoreContent storeId={props.storeId} />

      {/* footer */}
      <BottomWrap imgSrc={BoardBottom.src} />
    </Container>
  );
};

export default StorePage;

const CalDiv = styled.div`
  border: 3px solid #ff8d00;
  border-radius: 20px;
  background-color: white;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 1280px;
`;
const StoreInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 101px;
  background-color: #fcf0e1;
  width: 100%;
  padding: 72px 0;
`;

const BottomWrap = styled.div<{ imgSrc: string }>`
  width: 100%;
  height: 495px;
  margin-top: 64px;
  background-image: ${({ imgSrc }) => `url('${imgSrc}')`};
`;
