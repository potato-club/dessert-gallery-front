import React, { useState } from "react";
import styled from "styled-components";

interface CaptionProps {
  titleChange: (value: string) => void;
  contentChange: (value: string) => void;
  addTags: (value: any) => void;
  amount: number;
}

const Caption: React.FC<CaptionProps> = ({
  titleChange,
  contentChange,
  addTags,
  amount,
}) => {
  const MAX_CHARACTERS = 2200;
  const [inputHashTag, setInputHashTag] = useState("");
  const [hashTags, setHashTags] = useState<string[]>([]);

  const handleAddTags = () => {
    addTags(inputHashTag);
  };

  const addHashTag = (e: any) => {
    e.preventDefault();
    if (inputHashTag.trim() !== "") {
      setHashTags((prevHashTags) => [...prevHashTags, inputHashTag.trim()]);
      setInputHashTag("");
    }
    handleAddTags();
  };

  const changeHashTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputHashTag(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    titleChange(value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    contentChange(value);
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
        <TagDiv>
          {hashTags.map((tag, index) => (
            <Tag key={index}>#{tag}</Tag>
          ))}
        </TagDiv>
        <form onSubmit={addHashTag}>
          <TagInput
            placeholder="태그를 입력 후 엔터를 눌러주세요"
            onChange={changeHashTagInput}
            value={inputHashTag}
          />
        </form>
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
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TagDiv = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  gap: 5px;
`;
const TagInput = styled.input`
  width: 100%;
  border: 1px solid black;
`;

const Tag = styled.div`
  border: 1px solid black;
  padding: 5px 10px;
`;
