import React, { useState } from "react";
import styled from "styled-components";
import Tag from "../../../../components/Tag";
import { useGetStoreAnnounce } from "../../../../hooks/useBoard";
import AnnounceItem from "./AnnounceItem";

const AnnounceList = ({ storeId }: any) => {
  const [spreadClick, setSpreadClick] = useState<boolean>(false);

  const { announceData } = useGetStoreAnnounce({ storeId });

  return (
    <>
      {announceData && announceData[0] ? (
        <AnnounceItem
          type={announceData[0].type}
          title={announceData[0].title}
          content={announceData[0].content}
          createdDate={announceData[0].createdDate || ""}
          spreadClick={spreadClick}
          setSpreadClick={setSpreadClick}
          isFirst={true}
        />
      ) : (
        <AnnounceItem
          content="등록된 공지사항이 없습니다."
          createdDate=""
          type="없음"
          spreadClick={spreadClick}
          title="등록된 공지사항이 없습니다."
          setSpreadClick={setSpreadClick}
          isFirst={true}
        />
      )}
      <ItemList>
        {spreadClick && (
          <SpreadAnnounce spreadClick={spreadClick}>
            {announceData &&
              announceData
                .slice(1)
                .map((item: any, idx: number) => (
                  <AnnounceItem
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
      </ItemList>
    </>
  );
};

export default AnnounceList;

const ItemList = styled.div`
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
