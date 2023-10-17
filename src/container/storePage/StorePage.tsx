import React, { useState } from "react";
import styled from "styled-components";
import Calender from "./components/StoreCalendar";
import StoreProfile from "./components/StoreProfile";
import Announce from "./components/Announce";
import StoreContent from "./components/StoreContent";
import Tag from "../../components/Tag";
import { StoreProps } from "../../../pages/galleryBoard/[store]";

const StorePage = (props: StoreProps) => {
  const [spreadClick, setSpreadClick] = useState<boolean>(false);

  const { storeInfo, announceData, posterThumnail, detailPoster } = props;

  // console.log(
  //   // storeInfo
  //   // announceData,
  //   // posterThumnail,
  //   // storeReview
  //   // detailPoster
  // );

  // storeInfo -> name, storeImage.fileUrl, info 넘겨주기

  return (
    <Container>
      <StoreInfo>
        <StoreProfile storeInfo={storeInfo} />
        <CalDiv>
          <Calender />
        </CalDiv>
      </StoreInfo>
      {announceData[0] ? (
        <Announce
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
          spreadClick={spreadClick}
          setSpreadClick={setSpreadClick}
          isFirst={true}
        />
      )}
      <AnnounceList>
        {spreadClick && (
          <AbsoluteDiv spreadClick={spreadClick}>
            {announceData.slice(1).map((item: any, idx: number) => (
              <Announce
                key={idx}
                content={item.content}
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
          </AbsoluteDiv>
        )}
      </AnnounceList>
      <StoreContent
        posterThumnail={posterThumnail}
        detailPoster={detailPoster}
        storeInfo={storeInfo}
      />
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
const AbsoluteDiv = styled.div<{ spreadClick: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: absolute;
  background-color: #fcf0e1;
  box-shadow: ${({ spreadClick }) =>
    !spreadClick && `0px 3px 6px rgba(0, 0, 0, 0.161);`};
  width: 100%;
  padding-top: 16px;
`;
const InnerDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1100px;
  margin: 8px 0px 24px;
`;
const FoldBtn = styled(Tag)``;
