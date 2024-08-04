import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const PostCaption = ({
  title,
  content,
  tag,
  onTitleChange,
  onContentChange,
}: any) => {
  const topicInputRef = useRef<HTMLInputElement>(null);

  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTitleChange(e.target.value);
  };

  const handleCaptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onContentChange(e.target.value);
  };

  useEffect(() => {
    topicInputRef.current?.focus();
  }, []);

  const [inputHashTag, setInputHashTag] = useState("");
  const [hashTags, setHashTags] = useState<string[]>([]);
  const [tags, setTags] = useState(tag.split("#"));

  const addHashTag = (e: any) => {
    e.preventDefault();
    if (inputHashTag.trim() !== "") {
      setHashTags((prevHashTags) => [...prevHashTags, inputHashTag.trim()]);
      setInputHashTag("");
    }
  };

  const changeHashTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputHashTag(e.target.value);
  };

  return (
    <>
      <CaptionBox>
        <Topic value={title} onChange={handleTopicChange} ref={topicInputRef} />
        <CaptionArea value={content} onChange={handleCaptionChange} />
      </CaptionBox>
      <AmountBox>
        <AmountSpan>1/2200</AmountSpan>
      </AmountBox>
      <TagBox>
        <TagDiv>
          {tags?.map((tag: string, index: number) => (
            <Tag key={index}>{tag}</Tag>
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

export default PostCaption;

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

const TagInput = styled.input`
  width: 100%;
  border: 3px solid #ff8d00;
  border-radius: 20px;
  height: 35px;
  padding-left: 10px;
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
