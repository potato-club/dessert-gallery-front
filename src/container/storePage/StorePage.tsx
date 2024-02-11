import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Calender from "./components/StoreCalendar";
import StoreProfile from "./components/StoreProfile";
import Announce from "./components/Announce";
import StoreContent from "./components/StoreContent";
import Tag from "../../components/Tag";
import { StoreProps } from "../../../pages/galleryBoard/[store]";
import { useRecoilValue } from "recoil";
import { JWTStateAtom } from "../../recoil/login/JWTStateAtom";
import { useGetScheduleForUser } from "../../hooks/useSchedule";
import { useGetStoreAnnounce } from "../../hooks/useBoard";
import { BoardBottom } from "../../../public/image";

const StorePage = (props: StoreProps) => {
  const [isGuest, setIsGuest] = useState<boolean>(true);
  const jwtData = useRecoilValue(JWTStateAtom);

  useEffect(() => {
    if (jwtData.accessToken) {
      setIsGuest(false);
    }
  }, [jwtData]);

  const [spreadClick, setSpreadClick] = useState<boolean>(false);
  const { setDateInfo, calendarData } = useGetScheduleForUser(props.storeId);

  const { announceData } = useGetStoreAnnounce({ storeId: props.storeId });
  console.log(announceData);
  return (
    <Container>
      <StoreInfo>
        <StoreProfile />
        <CalDiv>
          <Calender
            scheduleList={calendarData?.scheduleList}
            setDateInfo={setDateInfo}
          />
        </CalDiv>
      </StoreInfo>
      {announceData && announceData[0] ? (
        <Announce
          type={announceData[0].type}
          title={announceData[0].title}
          content={announceData[0].content}
          createdDate={announceData[0].createdDate || ""}
          spreadClick={spreadClick}
          setSpreadClick={setSpreadClick}
          isFirst={true}
        />
      ) : (
        <Announce
          content="등록된 공지사항이 없습니다."
          createdDate=""
          type="없음"
          spreadClick={spreadClick}
          title="등록된 공지사항이 없습니다."
          setSpreadClick={setSpreadClick}
          isFirst={true}
        />
      )}
      <AnnounceList>
        {spreadClick && (
          <SpreadAnnounce spreadClick={spreadClick}>
            {announceData &&
              announceData
                .slice(1)
                .map((item: any, idx: number) => (
                  <Announce
                    key={idx}
                    type={item.type}
                    content={item.content}
                    title={item.title}
                    setSpreadClick={setSpreadClick}
                    createdDate={item.createdDate}
                  />
                ))}
            <InnerDiv>
              <FoldBtn
                title="접기"
                width="106px"
                height="32px"
                fontSize="13px"
                clickAble={true}
                inversion={true}
                hoverCss={true}
                onClickHandler={() => setSpreadClick(false)}
              />
            </InnerDiv>
          </SpreadAnnounce>
        )}
      </AnnounceList>
      <StoreContent storeId={props.storeId} />
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
const AnnounceList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
`;
const SpreadAnnounce = styled.div<{ spreadClick: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: absolute;
  background-color: #fcf0e1;
  box-shadow: ${({ spreadClick }) =>
    !spreadClick && `0px 3px 6px rgba(0, 0, 0, 0.161);`};
  width: 100%;
  min-width: 1280px;
  padding-top: 16px;
  z-index: 10;
`;
const InnerDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1100px;
  margin: 8px 0px 24px;
`;
const FoldBtn = styled(Tag)``;
const BottomWrap = styled.div<{ imgSrc: string }>`
  width: 100%;
  height: 495px;
  margin-top: 64px;
  background-image: ${({ imgSrc }) => `url('${imgSrc}')`};
`;
