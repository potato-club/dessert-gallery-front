import { title } from "process";
import React, { useState } from "react";
import styled from "styled-components";

interface CaptionProps {
  titleChange: (value: string) => void;
  contentChange: (value: string) => void;
  amount: number;
}

const Caption: React.FC<CaptionProps> = ({
  titleChange,
  contentChange,
  amount,
}) => {
  const MAX_CHARACTERS = 2200;

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    contentChange(value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    titleChange(value);
  };

  const [hashtags, setHashtags] = useState<string[]>([]);
  const [tagValue, setTagValue] = useState<string>("");

  const handleHashTagChange = (e: any) => {
    const value = e.target.value;
    const words = value.split(" ");
    setTagValue(value);
    const newHashtags: string[] = [];

    words.forEach((word: string) => {
      if (/#/.test(word)) {
        newHashtags.push(word);
      }
    });

    setHashtags(newHashtags);
    e.target.value = "";
  };

  return (
    <>
      <CaptionBox>
        <Topic
          placeholder="제목을 작성해 주세요..."
          onChange={handleTitleChange}
        />
        <CaptionArea
          placeholder="내용 작성해주세요..."
          onChange={handleContentChange}
          maxLength={MAX_CHARACTERS}
        />
      </CaptionBox>
      <AmountBox>
        <AmountSpan>
          {amount}/{MAX_CHARACTERS}
        </AmountSpan>
      </AmountBox>
      <TagBox>
        <TagTitle>#와 단어를 쓰고 엔터를 누르면 해시태그가 됩니다</TagTitle>
        <TagDiv>
          {hashtags.map((hashtag) => (
            <span key={hashtag}>{hashtag}</span>
          ))}
        </TagDiv>
        <HashTag
          value={tagValue}
          placeholder={"해시태그!"}
          onChange={handleHashTagChange}
        />
      </TagBox>
    </>
  );
};

export default Caption;

const Topic = styled.input`
  width: 100%;
  height: 41px;
  border: none;
  font-size: 24px;
  outline: none;
`;

const CaptionArea = styled.textarea`
  font-size: 16px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  align-items: flex-start;
  resize: none;
  overflow-y: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  box-sizing: border-box;
`;

const CaptionBox = styled.div`
  width: 90%;
  height: 200px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const AmountBox = styled.div`
  width: 90%;
  height: 44px;
  align-items: center;
  display: flex;
`;
const AmountSpan = styled.span`
  font-size: 12px;
  height: 11px;
  white-space: nowrap;
  color: #c7c7c7;
`;
const TagBox = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TagTitle = styled.div`
  width: 100%;
  height: 20px;
  font-size: 15px;
  color: #c5c5c5;
`;
const HashTag = styled.input`
  width: 90%;
  border: none;
  outline: none;
  color: #c5c5c5;
  resize: none;
`;
const TagDiv = styled.div`
  width: 100%;
  height: 100px;
`;
