import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WritingModal from "./WrtingModal";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { modalBg } from "../../../recoil/modalBg/atom";
import { postNoticeApi } from "../../../apis/controller/noticePage";
import Router, { useRouter } from "next/router";
import { modifyNoticeApi } from "../../../apis/controller/noticePage";
import { modifyGetNoticeApi } from "../../../apis/controller/noticePage";

interface ButtonProps {
  btnColor: string;
  fontColor: string;
}
interface ModifyData {
  title: string;
  content: string;
  exposed: boolean;
  typeKey: number;
}

const WritingPage = () => {
  const ISMODIFY = useRouter().query.isModify;
  const ID = parseInt(useRouter().query.id as string);
  // 로컬스토리지와 쿼리 파라미터중 어떤 방법을 사용할지 아직 고민중
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [exposed, setexposed] = useState("true");
  const [typeKey, setTypeKey] = useState("0");
  const [modifyNotice, setModifyNotice] = useState<ModifyData>();
  const titleChange = (e: any) => setTitle(e.target.value);
  const contentChange = (e: any) => setContent(e.target.value);
  const setModalBgState = useSetRecoilState(modalBg);

  const mainExpotureChange = (e: any) => {
    setexposed(e.target.value);
  };

  const noticeTypeChange = (e: any) => {
    setTypeKey(e.target.value);
  };

  const cancelButton = () => {
    setModalBgState(true);
  };

  const postData = async () => {
    await postNoticeApi({ title, content, exposed, typeKey });
  };

  const modifyData = async () => {
    await modifyNoticeApi({ title, content, exposed, typeKey }, ID);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    {
      ISMODIFY ? await modifyData() : await postData();
    }
    setTitle("");
    setContent("");
    Router.push("/myPage/notice");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (ISMODIFY) {
        const result = await modifyGetNoticeApi(ID);
        setModifyNotice(result.data);
      }
    };

    fetchData();
  }, [ID, ISMODIFY]);

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <ContentWriteTitle>
          {ISMODIFY ? "게시글 수정" : "게시글 작성"}
        </ContentWriteTitle>
        <WritingBox>
          <TitleWritingBox>
            <Title>제목</Title>
            <TitleWriting>
              <TitleWritingInput
                placeholder={
                  ISMODIFY ? modifyNotice?.title : "제목을 입력해주세요"
                }
                value={title}
                onChange={titleChange}
                required
              />
            </TitleWriting>
          </TitleWritingBox>
          <ContentWritingBox>
            <Content>내용</Content>
            <ContentWriting>
              <ContentTextArea
                placeholder={
                  ISMODIFY ? modifyNotice?.content : "내용을 입력해주세요"
                }
                value={content}
                onChange={contentChange}
                required
              ></ContentTextArea>
            </ContentWriting>
          </ContentWritingBox>
        </WritingBox>

        <OptionBox>
          <MainExpotureBox>
            <MainExpoture>메인 노출</MainExpoture>
            <Type
              type="radio"
              name="mainExpoture"
              id="expoture"
              value="true"
              defaultChecked={true}
              onChange={mainExpotureChange}
            />
            <Label htmlFor="expoture" />
            <LabelDiv>설정함</LabelDiv>
            <Type
              type="radio"
              name="mainExpoture"
              id="unExporture"
              value="false"
              onChange={mainExpotureChange}
            />
            <Label htmlFor="unExporture" />
            <LabelDiv>설정안함</LabelDiv>
          </MainExpotureBox>
          <InfoTypeBox>
            <MainExpoture>공지 유형</MainExpoture>
            <Type
              type="radio"
              name="noticeType"
              id="notice"
              value="0"
              defaultChecked={true}
              onChange={noticeTypeChange}
            />
            <Label htmlFor="notice" />
            <LabelDiv>공지사항</LabelDiv>
            <Type
              type="radio"
              name="noticeType"
              id="event"
              value="1"
              onChange={noticeTypeChange}
            />
            <Label htmlFor="event" />
            <LabelDiv>이벤트</LabelDiv>
          </InfoTypeBox>
        </OptionBox>
        {useRecoilValue(modalBg) && (
          <WritingModal setTitle={setTitle} setContent={setContent} />
        )}
        <ButtonBox>
          <Button type="submit" btnColor="#FF8D00" fontColor="black">
            {ISMODIFY ? "수정" : "완료"}
          </Button>

          <Button
            type="button"
            btnColor="white"
            fontColor="#FF8D00"
            onClick={cancelButton}
          >
            {ISMODIFY ? "취소" : "삭제"}
          </Button>
        </ButtonBox>
      </Wrapper>
    </Form>
  );
};

export default WritingPage;
const Form = styled.form`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
`;
const ContentWriteTitle = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  align-items: end;
  display: flex;
  height: 74.5px;
  width: 70%;
`;
const WritingBox = styled.div`
  width: 70%;
  opacity: 0.9;
`;
const TitleWritingBox = styled.div`
  height: 70px;
  display: flex;
  border-width: 2px 0 2px 0;
  border-style: solid;
  border-color: #ff6f00;
  width: 100%;
`;
const Title = styled.div`
  width: 21%;
  background-color: #ff6f00;
  color: #fff;
  font-family: Noto Sans CJK KR;
  font-size: 21px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const TitleWriting = styled.div`
  width: 79%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TitleWritingInput = styled.input`
  width: 80%;
  height: 39px;
  border-radius: 5px;
  border: 1px solid #828282;
`;

const ContentWritingBox = styled.div`
  display: flex;
  height: 430px;
  border-bottom: 2px solid #ff6f00;
  width: 100%;
`;
const Content = styled.div`
  color: black;
  width: 21%;
  background-color: #fdc886;
  font-family: Noto Sans CJK KR;
  font-size: 21px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: 800;
`;
const ContentWriting = styled.div`
  width: 79%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentTextArea = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  width: 79%;
  height: 360px;
`;

const OptionBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`;
const MainExpotureBox = styled.div`
  height: 72px;
  border-width: 2px 0 2px 0;
  border-style: solid;
  border-color: #ff6f00;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0px 47px 0px 47px;
`;
const MainExpoture = styled.div`
  color: #000;
  font-family: Noto Sans CJK KR;
  font-size: 21px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const InfoTypeBox = styled.div`
  height: 72px;
  border-width: 2px 0 2px 0;
  border-style: solid;
  border-color: #ff6f00;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0px 47px 0px 47px;
`;

const Type = styled.input`
  display: none;
  &:checked + label {
    background-color: #ff6f00;
    background-size: 100% 100%;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17" fill="none"><path d="M1.52734 7.70605L7.87524 15.0381L19.4983 1.00098" stroke="%23FFFDF9" stroke-width="2" stroke-linecap="round"/></svg>');
  }
`;
const Label = styled.label`
  width: 28px;
  height: 28px;
  border: 2.5px solid #ff6f00;
  cursor: pointer;
  border-radius: 7px;
  background-color: white;
`;
const LabelDiv = styled.div`
  color: #000;
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-weight: 800;
  width: 80px;
`;
const ButtonBox = styled.div`
  width: 70%;
  height: 52px;
  display: flex;
  justify-content: end;
  gap: 36px;
`;
const Button = styled.button<ButtonProps>`
  width: 158px;
  height: 52px;
  font-family: Noto Sans CJK KR;
  font-size: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => props.btnColor};
  color: ${(props) => props.fontColor};
  border: 2px solid #ff8d00;
`;
