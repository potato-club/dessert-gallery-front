import React, { useState } from "react";
import styled from "styled-components";

interface CaptionProps {
  titleChange: (value: string) => void;
  contentChange: (value: string) => void;
  addTags: (value: any) => void;
  removeTag: (value: any) => void;
  amount: number;
}

const Caption: React.FC<CaptionProps> = ({
  titleChange,
  contentChange,
  addTags,
  removeTag,
  amount,
}) => {
  const MAX_CHARACTERS = 2200;
  const [inputHashTag, setInputHashTag] = useState("");
  const [hashTags, setHashTags] = useState<string[]>([]);

  const handleAddTags = () => {
    addTags(inputHashTag);
  };

  const addHashTag = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputHashTag !== "") {
      const regex = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]*$/;
      if (!regex.test(inputHashTag)) {
        alert("공백 및 특수문자는 입력할 수 없습니다.");
        setInputHashTag("");
        return;
      }
      setHashTags((prevHashTags) => [...prevHashTags, inputHashTag]);
      setInputHashTag("");
      handleAddTags();
    }
  };

  const handleRemoveTag = (tag: string) => {
    setHashTags(hashTags.filter((t) => t !== tag)); // 선택된 태그를 제외한 나머지 태그들로 업데이트
    removeTag(tag);
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
            <Tag key={index} onClick={() => handleRemoveTag(tag)}>
              #{tag}
            </Tag>
          ))}
        </TagDiv>
        <form onSubmit={addHashTag}>
          <TagInput
            placeholder="#없이 태그를 입력해주세요!"
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
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 20px;
`;
const TagDiv = styled.div`
  display: flex;
  gap: 5px;
  overflow-x: scroll;
  height: 80px;
  flex-wrap: wrap;
`;
const Tag = styled.div`
  color: #ff8d00;
  flex-shrink: 0;
  height: 20px;
  cursor: pointer;
`;

const TagInput = styled.input`
  width: 100%;
  border: 3px solid #ff8d00;
  border-radius: 20px;
  height: 35px;
  padding-left: 10px;
`;
