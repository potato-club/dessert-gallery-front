import React, { useState } from "react";
import styled from "styled-components";
import Calender from "./components/Calender";
import StoreProfile from "./components/StoreProfile";
import Announce from "./components/Announce";
import StoreContent from "./components/StoreContent";
import Tag from "../../components/Tag";

const StorePage = () => {
  const [foldClick, setFoldClick] = useState<boolean>(false);
  return (
    <Container>
      <StoreInfo>
        <StoreProfile />
        <Calender />
      </StoreInfo>
      <Announce />
      <AnnounceList>
        {!foldClick && (
          <AbsoluteDiv foldClick={foldClick}>
            <Announce />
            <Announce />
            <InnerDiv>
              <FoldBtn
                title="접기"
                width="150px"
                height="48px"
                clickAble={true}
                inversion={true}
                hoverCss={true}
                onClickHandler={() => setFoldClick(true)}
              />
            </InnerDiv>
          </AbsoluteDiv>
        )}
      </AnnounceList>
      <StoreContent />
    </Container>
  );
};

export default StorePage;

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
  height: 465px;
`;
const AnnounceList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
`;
const AbsoluteDiv = styled.div<{ foldClick: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: absolute;
  background-color: #fcf0e1;
  box-shadow: ${({ foldClick }) =>
    !foldClick && `0px 3px 6px rgba(0, 0, 0, 0.161);`};
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
