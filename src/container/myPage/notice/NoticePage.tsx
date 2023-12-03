import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import useNoticeList from "../../../hooks/useNoticeList";
import { NoticeListDto } from "../../../types/apiTypes";
interface NoticePageProps {
  isGuest: any;
}

interface Button {
  isSelected?: boolean;
  detail?: boolean;
}

interface ButtonInfo {
  index: number;
  label: string;
}
interface NoticeInfo {
  id: number;
  value: string;
  title: string;
  content: string;
  date: string;
}

const NoticePage: React.FC<NoticePageProps> = ({ isGuest }) => {
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const [detailButton, setDetailButton] = useState<number | null>(null);

  const noticeList = useNoticeList();

  const handleValueClick = (buttonIndex: number) => {
    setSelectedButton(buttonIndex);
  };
  const handleDetailClick = (noticeId: number) => {
    if (detailButton === noticeId) {
      setDetailButton(null);
    } else {
      setDetailButton(noticeId);
    }
  };

  const buttonInfoList: ButtonInfo[] = [
    // 버튼 기능 목록 추가 할때
    { index: 0, label: "전체" },
    { index: 1, label: "공지사항" },
    { index: 2, label: "이벤트" },
  ];

  return (
    <Wrapper>
      <MenuWrapper>
        <Header>
          <NoticeBox>공지사항/이벤트 관리</NoticeBox>
          <WritingBox>게시글 작성</WritingBox>
        </Header>
        <Middle>
          <NoticeValueBox>
            {buttonInfoList.map((buttonInfoList) => (
              <NoticeButton
                key={buttonInfoList.index}
                isSelected={selectedButton === buttonInfoList.index}
                onClick={() => handleValueClick(buttonInfoList.index)}
              >
                {buttonInfoList.label}
              </NoticeButton>
            ))}
          </NoticeValueBox>
          <SearchBox>
            <IoSearch />
            <SearchInput placeholder="검색어를 입력해 주세요" />
          </SearchBox>
        </Middle>
      </MenuWrapper>
      <Div>
        {noticeList?.map((noticeList) => (
          <ContentsBackground
            key={noticeList.id}
            detail={noticeList.id === detailButton}
          >
            <ContentBox detail={noticeList.id === detailButton}>
              <NoticeValue>{noticeList.type}</NoticeValue>
              {noticeList.id === detailButton ? (
                <NoticeContent>{noticeList.content}</NoticeContent>
              ) : (
                <NoticeTitle>{noticeList.title}</NoticeTitle>
              )}

              <NoticeDate>{noticeList.createdDate}</NoticeDate>
              <OptionBox>
                <Option onClick={() => handleDetailClick(noticeList.id)}>
                  {noticeList.id === detailButton ? "접기" : "더보기"}
                </Option>
                {noticeList.id === detailButton ? (
                  <IoIosArrowUp
                    onClick={() => handleDetailClick(noticeList.id)}
                  />
                ) : (
                  <IoIosArrowDown
                    onClick={() => handleDetailClick(noticeList.id)}
                  />
                )}
                <HiDotsVertical />
              </OptionBox>
            </ContentBox>
          </ContentsBackground>
        ))}
      </Div>
    </Wrapper>
  );
};

export default NoticePage;
const Wrapper = styled.div`
  row-gap: 40px;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`;

const Header = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  align-items: end;
  display: flex;
  width: 80%;
  height: 74.5px;
  justify-content: space-between;
`;

const NoticeBox = styled.div``;

const WritingBox = styled.button`
  width: 114px;
  height: 25px;
  border: 1px solid #828282;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  cursor: pointer;
`;
const Middle = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  height: 41px;
  width: 80%;
  align-items: center;
`;

const NoticeValueBox = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
`;

const NoticeButton = styled.button<Button>`
  width: 105px;
  height: 36px;
  border-radius: 20px;
  color: ${(props) => (props.isSelected ? "white" : "#FDC886")};
  background-color: ${(props) => (props.isSelected ? "#FF8D00;" : "white")};
  border: 2px solid #ff8d00;
`;

const SearchBox = styled.div`
  width: 398px;
  height: 40px;
  padding: 12.5px;
  border: none;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const SearchInput = styled.input`
  width: 340px;
  height: 20px;
  border: none;
  outline: none;
`;
const Div = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  width: 100%;
  background-color: #fdfaf5;
`;
const ContentsBackground = styled.div<Button>`
  background-color: ${(props) => (props.detail ? "white" : "none")};
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: ${(props) => (props.detail ? "0px 2px  3px" : "none")};
`;

const ContentBox = styled.div<Button>`
  margin-top: ${(props) => (props.detail ? "17px" : "0px")};
  flex-shrink: 0;
  height: ${(props) => (props.detail ? "200px" : "70px")};
  background-color: ${(props) => (props.detail ? "white" : "none")};
  display: flex;
  align-items: ${(props) => (props.detail ? "flex-start" : "center")};
  font-family: Noto Sans CJK KR;
  font-size: 14px;
  gap: 96px;
`;
const NoticeValue = styled.div`
  width: 105px;
  height: 36px;
  border-radius: 20px;
  border: 2px solid #cccac6;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NoticeTitle = styled.div`
  width: 400px;
  height: 36px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
`;
const NoticeContent = styled.div`
  width: 400px;
  height: 36px;
  font-size: 15px;
  align-items: center;
  display: flex;
`;

const NoticeDate = styled.div`
  width: 80px;
  color: #828282;
  height: 36px;
  display: flex;
  align-items: center;
`;
const OptionBox = styled.div`
  width: 115px;
  gap: 22px;
  display: flex;
  height: 36px;
  align-items: center;
`;
const Option = styled.div`
  font-weight: 700;
  justify-content: center;
  display: flex;
  width: 36.34px;
`;
