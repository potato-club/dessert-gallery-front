import React, { useState } from "react";
import styled from "styled-components";

interface Button {
  isSelected: boolean;
}

interface ButtonInfo {
  index: number;
  label: string;
}

const NoticePage = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(0);

  const handleButtonClick = (buttonIndex: number) => {
    setSelectedButton(buttonIndex);
  };

  const buttonInfoList: ButtonInfo[] = [
    // 버튼 기능 목록 추가 할때
    { index: 0, label: "전체" },
    { index: 1, label: "공지사항" },
    { index: 2, label: "이벤트" },
  ];

  return (
    <Wrapper>
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
              onClick={() => handleButtonClick(buttonInfoList.index)}
            >
              {buttonInfoList.label}
            </NoticeButton>
          ))}
        </NoticeValueBox>
        <SearchBox />
      </Middle>
    </Wrapper>
  );
};

export default NoticePage;

const Wrapper = styled.div`
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
  height: 74.5px;
  width: 70%;
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
  width: 70%;
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
`;
