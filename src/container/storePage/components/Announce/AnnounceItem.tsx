import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Tag from '../../../../components/Tag';
import { DownArrow, UpArrow } from '../../../../../public/svg';

interface Props {
  title: string;
  content: string;
  type: string;
  createdDate: string;
  spreadClick: boolean;
  setSpreadClick: Dispatch<SetStateAction<boolean>>;
}

const AnnounceItem = ({ ...props }: Props) => {
  const { title, content, spreadClick, setSpreadClick, createdDate, type } =
    props;

  const [infoBtnClick, setInfoBtnClick] = useState<boolean>(false);
  useEffect(() => {
    if (!spreadClick) setInfoBtnClick(false);
  }, [spreadClick]);

  return (
    <Container>
      <InnerCont>
        <LeftCont>
          <Tag title={type} width="112px" height="32px" fontSize="13px" />
          <Title infoBtnClick={infoBtnClick} spreadClick={spreadClick}>
            {title}
          </Title>
        </LeftCont>
        <RightCont>
          <Time>{createdDate}</Time>
          {infoBtnClick ? (
            <MoreBtn onClick={() => setInfoBtnClick(false)}>
              <span>접기</span>
              <UpArrow width="16px" height="7px" />
            </MoreBtn>
          ) : (
            <MoreBtn onClick={() => setInfoBtnClick(true)}>
              <span>더보기</span>
              <DownArrow width="16px" height="7px" />
            </MoreBtn>
          )}
          {!spreadClick && (
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
      <Content infoBtnClick={infoBtnClick}>
        <Text>{content}</Text>
      </Content>
    </Container>
  );
};

export default AnnounceItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fffdf9;
  border-top: 3px solid #fdc886;
  border-bottom: 3px solid #fdc886;
  padding: 18px 0;
  width: 100%;
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
const Title = styled.span<{
  infoBtnClick: boolean;
  spreadClick: boolean;
}>`
  display: inline-block;
  width: ${({ spreadClick }) => (spreadClick ? '630px' : '510px')};
  color: #000;
  font-size: 15px;
  font-weight: 900;
  line-height: 200%;
  overflow: ${({ infoBtnClick }) => (infoBtnClick ? 'none' : 'hidden')};
  white-space: ${({ infoBtnClick }) => (infoBtnClick ? 'normal' : 'nowrap')};
  text-overflow: ellipsis;
  word-wrap: ${({ infoBtnClick }) => infoBtnClick && 'break-word'};
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
  justify-content: center;
  gap: 15px;
  color: #ff6f00;
  font-size: 15px;
  font-weight: 700;
  border: none;
  outline: none;
  background-color: inherit;
  align-items: center;
  cursor: pointer;
  span {
    min-width: 42px;
  }
`;
const FoldBtn = styled(Tag)``;
const Content = styled.div<{ infoBtnClick: boolean }>`
  display: ${({ infoBtnClick }) => (infoBtnClick ? 'flex' : 'none')};
  justify-content: space-between;
  width: 1100px;
  padding-left: 167px;
`;
const Text = styled.pre`
  min-width: 510px;
  font-size: 15px;
  line-height: 20px;
  white-space: pre-wrap;
`;
