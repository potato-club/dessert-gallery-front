import React, { useState } from "react";
import styled from "styled-components";
import ModalWrapper from "../../../../components/ModalWrapper";
import SlideImage from "../../../../components/SlideImage/SlideImage";
import { useGetDetailBoard } from "../../../../hooks/useBoard";
import { postBoardComment } from "../../../../apis/controller/detailStore";
import InfoHeader from "./Header";
import InfoContent from "./Contents";
import LoadingSpinner from "./LoadingSpinner";
import { useSetRecoilState } from "recoil";
import { modalBg } from "../../../../recoil/modalBg/atom";
import { postChatRoom } from "../../../../apis/controller/chatPage";
import { useUserState } from "../../../../hooks/useUser";
import { useGetStoreInfo } from "../../../../hooks/useStore";

const PostModal = ({ boardId }: any) => {
  const [comment, setComment] = useState<string>("");
  const [postCommentList, setPostCommentList] = useState<any[]>([]);
  const setModalBgState = useSetRecoilState(modalBg);
  const {isGuest} = useUserState();

  // 가게 정보 불러오기
  //const { data: storeInfo } = useGetStoreInfo(storeId);

  // 세부 게시물 불러오기
  const { data: detailPoster } = useGetDetailBoard(boardId);

  console.log(detailPoster);
  // 모달 댓글 작성하기
  const submit = async (e: any) => {
    await e.preventDefault();
    try {
      const postComment = await postBoardComment({ boardId, comment });
      setPostCommentList((prev) => [postComment, ...prev]);
    } catch (err: any) {
      if (err.response.status == 403) {
        alert("로그인을 해주세요.");
      }
    }
    setComment("");
  };
  return (
    <ModalWrapper>
      <Container>
        {detailPoster ? (
          <SlideImage
            srcArray={detailPoster.images.map((item: any) => {
              return item.fileUrl;
            })}
            width={692}
            height={692}
            moveBtnType="show"
            dotIndicator={true}
          />
        ) : (
          <LoadingDiv>
            <LoadingSpinner width={50} height={50} borderWidth={3} />
          </LoadingDiv>
        )}
        <PostInfo>
          <InfoHeader
            storeInfo={detailPoster?.storeInfo}
            detailPoster={detailPoster}
            boardId={boardId}
          />
          <InfoContent
            address={detailPoster?.storeInfo.address}
            boardId={boardId}
            detailPoster={detailPoster}
            postCommentList={postCommentList}
          />
          <Bottom>
            <InputWrapper onSubmit={submit}>
              <InputBox
                placeholder="댓글 추가"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />
            </InputWrapper>
            <ReservedBtn
              onClick={() => {
                //console.log(storeInfo.id);
                if(!isGuest){
                  // 채팅페이지로 이동 전 모달 백그라운드 제거
                  setModalBgState(false);
                  // 현재 반영된 사항인지 알 수 없어 주석 처리
                  // postChatRoom(storeInfo.id);
                  window.location.href = "/myPage/chat";
                }else{
                  alert('로그인 후 이용해주세요.')
                  window.location.href = "/login";
                }
              }}
            >
              예약하러 가기
            </ReservedBtn>
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
const PostInfo = styled.div`
  display: flex;
  width: 408px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 142px;
  border-top: 2px solid #fdc886;
`;
const InputWrapper = styled.form`
  padding: 20px 28px;
`;
const InputBox = styled.input`
  width: 352px;
  height: 39px;
  background-color: rgb(242, 241, 238);
  border: none;
  border-radius: 10px;
  outline: none;
  padding-left: 15px;
`;
const ReservedBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: #fcf0e1;
  color: #ff6f00;
  font-size: 22px;
  font-weight: 700;
  line-height: normal;
  &:hover {
    color: #fcf0e1;
    background-color: #ff6f00;
    cursor: pointer;
  }
`;
const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
