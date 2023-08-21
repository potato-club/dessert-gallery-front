import React, { useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { modalBg } from "../../../../recoil/modalBg/atom";
import ModalWrapper from "../../../../components/ModalWrapper";
import { MenuIcon } from "../../../../../public/svg";
import Comment from "./Comment";
import Tag from "../../../../components/Tag";

const PostModal = () => {
  const modalBgState = useSetRecoilState(modalBg);
  const [comment, setComment] = useState<string>("");

  const submit = (e: any) => {
    // 댓글 submit
    e.preventDefault();
    setComment(e.target.value);
    console.log(comment);
    // 대충 게시물 댓글 postApi 훅 들어갈 자리
  };

  return (
    <ModalWrapper>
      <Container>
        <ImgDiv onClick={() => modalBgState(false)}></ImgDiv>
        <PostInfo>
          <InfoHeader>
            <StoreInfo>
              <StoreProfile></StoreProfile>
              <div>
                <StoreName>늘봄 케이크</StoreName>
                <SubCategory>레터링 케이크 주문 제작</SubCategory>
              </div>
            </StoreInfo>
            <MenuIcon width="5px" height="13px" />
          </InfoHeader>
          <InfoContent>
            <Address>서울시 강서구 곰달래길 12</Address>
            <Title>상큼오독 산딸기 디저트</Title>
            <TextContent>
              딸기잼이 듬북 들어간 케이크에요 오독오독 씹히는 산딸기의 매력!!
              문의 남겨주시면 빠르게 답장 드리겠습니다
            </TextContent>
            <HashTagBox>
              {/* 대충 리스트 형태로 날아오면 map으로 뿌려주기 */}
              <HashTag>#해시태그</HashTag>
              <HashTag>#해시태그</HashTag>
              <HashTag>#해시태그</HashTag>
              <HashTag>#해시태그</HashTag>
              <HashTag>#해시태그</HashTag>
              <HashTag>#해시태그</HashTag>
              <HashTag>#해시태그</HashTag>
              <HashTag>#해시태그</HashTag>
            </HashTagBox>
            <CommentList>
              {/* 대충 리스트형태로 모든댓글 get하고 뿌려주기 */}
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </CommentList>
          </InfoContent>
          <Bottom>
            <InputWrapper onSubmit={submit}>
              <InputBox placeholder="댓글 추가" />
            </InputWrapper>
            <ReservedBtn
              title="예약하러 가기"
              width="408px"
              height="64px"
              clickAble={true}
              hoverCss={true}
              onClickHandler={() => {
                console.log("대충 예약하러가는 라우팅");
              }}
            />
          </Bottom>
        </PostInfo>
      </Container>
    </ModalWrapper>
  );
};

export default PostModal;

const Container = styled.div`
  display: flex;
  background-color: #fffdf9;
  width: 1100px;
  height: 692px;
`;
const ImgDiv = styled.div`
  width: 692px;
  background-color: black;
`;
const PostInfo = styled.div`
  display: flex;
  width: 408px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InfoHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 29px;
  width: 100%;
  border-bottom: 2px solid #fdc886;
  svg {
    cursor: pointer;
  }
`;
const StoreInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
`;
const StoreProfile = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 100%;
  background-color: black;
`;
const StoreName = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`;
const SubCategory = styled.div`
  color: #ff6f00;
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
`;

const Address = styled.div`
  color: #828282;
  font-size: 15px;
  font-weight: 700;
`;
const Title = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  margin: 9px 0px 17px 0px;
`;
const TextContent = styled.div`
  color: #000;
  font-size: 15px;
  font-weight: 500;
`;
const HashTagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 17px;
  margin: 18px 0px 29px 0px;
`;
const HashTag = styled.div`
  color: #ff6f00;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
`;
const InfoContent = styled.div`
  padding: 33px 28px;
  height: 444px;
  overflow-y: scroll;
`;
const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 0;
  height: 142px;
  border: 2px solid #fdc886;
`;
const InputWrapper = styled.form`
  padding: 20px 28px;
`;
const InputBox = styled.input`
  width: 352px;
  height: 39px;
  background-color: #dedede;
`;
const ReservedBtn = styled(Tag)`
  width: 100%;
  height: 64px;
`;
