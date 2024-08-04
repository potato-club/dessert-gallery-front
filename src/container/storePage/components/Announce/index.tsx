import React, { useState } from 'react';
import styled from 'styled-components';
import Tag from '../../../../components/Tag';
import { useGetStoreAnnounce } from '../../../../hooks/useBoard';
import AnnounceItem from './AnnounceItem';

const AnnounceList = ({ storeId }: any) => {
  const [spreadClick, setSpreadClick] = useState<boolean>(false);
  const { announceData } = useGetStoreAnnounce({ storeId });
  return (
    <Layout>
      <SpreadAnnounce spreadClick={spreadClick}>
        {announceData?.length ? (
          spreadClick ? (
            announceData.map((item: any, idx: number) => (
              <AnnounceItem
                key={idx}
                type={item.type}
                content={item.content}
                title={item.title}
                spreadClick={spreadClick}
                setSpreadClick={setSpreadClick}
                createdDate={item.createdDate}
                itemLength={announceData?.length}
              />
            ))
          ) : (
            announceData
              .slice(0, 1)
              .map((item: any, idx: number) => (
                <AnnounceItem
                  key={idx}
                  type={item.type}
                  content={item.content}
                  title={item.title}
                  spreadClick={spreadClick}
                  setSpreadClick={setSpreadClick}
                  createdDate={item.createdDate}
                  itemLength={announceData?.length}
                />
              ))
          )
        ) : (
          <AnnounceItem
            type={'공지사항'}
            content={''}
            title={'공지사항이 없습니다.'}
            spreadClick={spreadClick}
            setSpreadClick={setSpreadClick}
            createdDate={''}
            itemLength={announceData?.length}
          />
        )}
        <InnerDiv spreadClick={spreadClick}>
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
    </Layout>
  );
};

export default AnnounceList;

const Layout = styled.div`
  width: 100%;
`;
const SpreadAnnounce = styled.div<{ spreadClick: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: absolute;
  background-color: #fcf0e1;
  box-shadow: ${({ spreadClick }) =>
    spreadClick && `0px 3px 6px rgba(0, 0, 0, 0.161);`};
  width: 100%;
  min-width: 1280px;
  z-index: 10;
`;
const InnerDiv = styled.div<{ spreadClick: boolean }>`
  display: ${({ spreadClick }) => (spreadClick ? 'flex' : 'none')};
  justify-content: flex-end;
  width: 1100px;
  margin-bottom: 16px;
`;
const FoldBtn = styled(Tag)``;
