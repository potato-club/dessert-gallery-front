import React, { useState } from "react";
import styled from "styled-components";
import Tag from "../../../components/Tag";
import { DownArrow, UpArrow } from "../../../../public/svg";

/**
 * props 종류
 * title
 * createdDate
 * spreadClick, setSpreadClick
 */
const Announce = ({
  content,
  spreadClick,
  setSpreadClick,
  isFirst,
  createdDate,
}: any) => {
  const [infoBtnClick, setInfoBtnClick] = useState<boolean>(false);
  return (
    <Container>
      {infoBtnClick ? (
        <InnerCont>
          <LeftCont>
            <Tag title="공지사항" width="112px" height="32px" fontSize="13px" />
            <TextContent infoBtnClick={infoBtnClick} spreadClick={spreadClick}>
              {content}
            </TextContent>
          </LeftCont>
          <RightCont>
            <Time>{createdDate}</Time>
            <MoreBtn onClick={() => setInfoBtnClick(false)}>
              <span>접기</span>
              <UpArrow width="16px" height="7px" />
            </MoreBtn>
            {isFirst && !spreadClick && (
              <FoldBtn
                title="전체보기"
                width="106px"
                height="32px"
                fontSize="13px"
                clickAble={true}
                inversion={true}
                hoverCss={true}
                onClickHandler={() => setSpreadClick(true)}
              />
            )}
          </RightCont>
        </InnerCont>
      ) : (
        <InnerCont>
          <LeftCont>
            <Tag title="공지사항" width="112px" height="32px" fontSize="13px" />
            <TextContent infoBtnClick={infoBtnClick} spreadClick={spreadClick}>
              {content}
            </TextContent>
          </LeftCont>
          <RightCont>
            <Time>{createdDate}</Time>
            <MoreBtn onClick={() => setInfoBtnClick(true)}>
              <span>더보기</span>
              <DownArrow width="16px" height="7px" />
            </MoreBtn>
            {isFirst && !spreadClick && (
              <FoldBtn
                title="전체보기"
                width="106px"
                height="32px"
                fontSize="13px"
                clickAble={true}
                inversion={true}
                hoverCss={true}
                onClickHandler={() => setSpreadClick(true)}
              />
            )}
          </RightCont>
        </InnerCont>
      )}
    </Container>
  );
};

export default Announce;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffdf9;
  border-top: 3px solid #fdc886;
  border-bottom: 3px solid #fdc886;
  width: 100%;
  padding: 23px 0;
`;
const InnerCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1100px;
`;
const LeftCont = styled.div`
  display: flex;
  gap: 55px;
`;
const TextContent = styled.span<{
  infoBtnClick: boolean;
  spreadClick: boolean;
}>`
  display: inline-block;
  width: ${({ spreadClick }) => (spreadClick ? "630px" : "510px")};
  color: #000;
  font-size: 15px;
  font-weight: 700;
  line-height: 200%;
  overflow: ${({ infoBtnClick }) => (infoBtnClick ? "none" : "hidden")};
  white-space: ${({ infoBtnClick }) => (infoBtnClick ? "normal" : "nowrap")};
  text-overflow: ellipsis;
`;

const RightCont = styled.div`
  display: flex;
  align-items: center;
  gap: 43px;
`;
const Time = styled.span`
  color: #828282;
  font-size: 15px;
  font-weight: 500;
  margin-right: 33px;
`;
const MoreBtn = styled.button`
  display: flex;
  width: 82px;
  gap: 15px;
  color: #ff6f00;
  font-size: 15px;
  font-weight: 700;
  border: none;
  outline: none;
  background-color: inherit;
  align-items: center;
  cursor: pointer;
`;
const FoldBtn = styled(Tag)``;
