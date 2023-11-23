import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ModalWrapper from "../../../../components/ModalWrapper";
import { MenuIcon } from "../../../../../public/svg";
import Comment from "./Comment";
import Bookmark from "../../../../components/SlideImage/Bookmark";
import SlideImage from "../../../../components/SlideImage/SlideImage";
import MenuBox from "./MenuBox";
import {
  useGetDetailBoard,
  useInfinityModalComment,
} from "../../../../hooks/useBoard";
import {
  postBoardComment,
  toggleBookmark,
} from "../../../../apis/controller/detailStore";
import { useGetStoreInfo } from "../../../../hooks/useStore";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import LoadingSpinner from "./LoadingSpinner";

const PostModal = ({ boardId }: any) => {
  const [comment, setComment] = useState<string>("");
  const [onBookmarkState, setOnBookmarkState] = useState<boolean>(false);
  const [menuIconClick, setMenuIconClick] = useState<boolean>(false);
  const [commentList, setCommentList] = useState<any[]>([]);
  const [postCommentList, setPostCommentList] = useState<any[]>([]);
  const [isLoad, setIsLoad] = useState(false);

  // 가게 정보 불러오기
  const router = useRouter();
  const { data: storeInfo } = useGetStoreInfo({
    storeId: Number(router.query.store),
    options: { refetchOnWindowFocus: false },
  });

  // 세부 게시물 불러오기
  const detailPoster = useGetDetailBoard({}, boardId);

  // infiniteQuery 모달 댓글 불러오기
  const { data, fetchNextPage, hasNextPage, isLoading, refetch } =
    useInfinityModalComment({ boardId });
  useEffect(() => {
    if (data) {
      const list = data?.pages
        .map((page) => {
          return page.result;
        })
        .flat();
      setCommentList(list);
    }
  }, [data]);

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

  const [ref, inView] = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView && !isLoading && hasNextPage) {
      setIsLoad(true);
      setTimeout(() => {
        fetchNextPage();
        setIsLoad(false);
      }, 1500);
    }
  }, [inView, isLoading]);

  if (!detailPoster) {
    return <></>;
  }

  const { title, content, tags, images } = detailPoster;

  return (
    <ModalWrapper>
      <Container>
        <SlideImage
          srcArray={images.map((item: any) => {
            return item.fileUrl;
          })}
          width={692}
          height={692}
        />
        <PostInfo>
          <InfoHeader>
            <StoreInfo>
              <StoreProfile src={storeInfo.storeImage.fileUrl} />
              <div>
                <StoreName>{storeInfo.name}</StoreName>
                <SubCategory>{storeInfo.info || "default 값"}</SubCategory>
              </div>
            </StoreInfo>
            <MenuIcon
              width="5px"
              height="13px"
              onClick={() => {
                setMenuIconClick((prev) => !prev);
              }}
            />
          </InfoHeader>

          <InfoContent>
            {menuIconClick && <MenuBox />}
            <TopPosition>
              <Address>{storeInfo.address}</Address>
              <BookmarkDiv>
                <Bookmark
                  storeId={boardId}
                  onBookmark={onBookmarkState}
                  size="medium"
                  onClickBookmark={() => {
                    toggleBookmark({ boardId });
                    setOnBookmarkState((prev) => !prev);
                  }}
                />
              </BookmarkDiv>
            </TopPosition>
            <Title>{title}</Title>
            <TextContent>{content}</TextContent>
            <HashTagBox>
              {tags.map((item: string, idx: number) => {
                return <HashTag key={idx}>{item}</HashTag>;
              })}
            </HashTagBox>

            <CommentList>
              <>
                {postCommentList.map((item: any, idx: number) => {
                  return (
                    <Comment
                      nickname={item.nickname}
                      comment={item.comment}
                      profile={item.profile}
                      key={idx}
                    />
                  );
                })}
              </>
              {commentList &&
                commentList.map((item: any, idx: number) => {
                  return (
                    <Comment
                      nickname={item.nickname}
                      comment={item.comment}
                      profile={item.profile}
                      key={idx}
                    />
                  );
                })}
            </CommentList>
            <IoDiv ref={ref}></IoDiv>
            {isLoad && (
              <LoadingDiv>
                <LoadingSpinner width={20} height={20} borderWidth={2} />
              </LoadingDiv>
            )}
          </InfoContent>

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
                console.log("예약하러가는 라우팅");
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
const StoreProfile = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 100%;
  background-color: black;
`;
const BookmarkDiv = styled.div`
  position: relative;
  top: -10px;
`;
const TopPosition = styled.div`
  display: flex;
  justify-content: space-between;
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
  max-width: 300px;
`;
const Title = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  margin: 9px 0px 17px 0px;
  max-width: 300px;
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
  display: flex;
  flex-direction: column;
  padding: 33px 28px;
  height: 444px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
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
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IoDiv = styled.div`
  margin-top: 30px;
`;
