import React from "react";
import styled, { css } from "styled-components";
import { resGalleryPost } from "../../../../../types/apiTypes";
import GalleryPost from "../../../../boardPage/galleryBoard/GalleryPost";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Text } from "../../../../mainPage/components/NearbyStorePost.style";

const MarketContent = ({store}:any) => {
  console.log("postS!!!!", store)
  return (
    <Container>
      <PostBoard>
        <Title>게시글</Title>
        <PostBoardContents>
          {store && store.posts.length > 0 &&
            store.posts.filter((e: any, idx: number)=> idx<3).map((e:resGalleryPost, idx:number) => (
                <GalleryPost
                  key={e.id}
                  storeId={store.id}
                  width={96}
                  height={140}
                  imgArray={[e.thumbnail.fileUrl]}
                  location={e.address}
                  onBookmark={false} 
                  ratingValue={"-1"}
                  summary={e.content}
                  title={e.name}
                  size='small'
                  tagValue={Number(e.score) > 4.5 ? "HOT": "none"}
                  bookmark={false}
                  margin="8px 20px"
                  />
            ))}

            {
              store && store.posts.length === 0 &&
              <Text fontSize="16px">아직 등록된 게시글이 없어요!</Text>
            }

        </PostBoardContents>
      </PostBoard>
      <RouterBtn onClick={() => { window.location.href = `/galleryBoard/${store.id}`}}>예약하러 가기</RouterBtn>

      <ReviewBoard>
        <Title>리뷰</Title>
        <ReviewBoardContents>
          
        </ReviewBoardContents>
      </ReviewBoard>
      <RouterBtn onClick={() => { window.location.href = `/galleryBoard/${store.id}`}}>후기 게시판 보러 가기</RouterBtn>

      {/* <Announce /> */}
    </Container>
  );
};

export default MarketContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fcf0e1;
  width: 100%;
`;
const Content = css`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0px 30px;
`;
const PostBoard = styled.div`
  ${Content}
  height: 190px;
`;
const PostBoardContents = styled.div`
  display: flex;
  flex-direction: row;
  height: 190px;
  justify-content: center;
  align-items: center;
`;
const ReviewBoard = styled.div`
  ${Content}
  height: 202px;
`;
const ReviewBoardContents = styled.div`
  ${PostBoardContents}
`;
const Title = styled.div`
  color: #000;
  font-size: 10px;
  font-weight: 700;
  line-height: normal;
  border-bottom: 1.5px solid #dedede;
  padding: 8px 0px;
  margin-top: 5px;
`;
const RouterBtn = styled.div`
  color: #ff6f00;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  background-color: white;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  &:hover {
    cursor: pointer;
    background-color: #ff6f00;
    color: white;
  }
`;
