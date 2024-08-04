import React from "react";
import styled, { css } from "styled-components";
import { resGalleryPost } from "../../../../../types/apiTypes";
import GalleryPost from "./GalleryPost";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Text } from "../../../../mainPage/components/NearbyStorePost.style";
import Announce from "./Announce";
import Review from "./Review";

const MarketContent = ({store}:any) => {
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
                  title={e.title}
                  size='small'
                  tagValue={Number(e.score) > 4.5 ? "HOT": "none"}
                  bookmark={false}
                  margin="8px 0px"
                  />
            ))}
        </PostBoardContents>
        {
              store && store.posts.length === 0 &&
              <PostBoardNoneContents>
                <Text fontSize="16px">아직 등록된 게시글이 없어요!</Text>
              </PostBoardNoneContents>
            }
      </PostBoard>
      <RouterBtn onClick={() => { window.location.href = `/galleryBoard/${store.id}`}}>예약하러 가기</RouterBtn>

      <ReviewBoard>
        <Title>리뷰</Title>
        {store.reviews.length===1 && <ReviewBoardContents>
          <Review userName={store.reviews[0].userName} content={store.reviews[0].content} score={store.reviews[0].score} images={[store.reviews[0].image]} createDate={store.reviews[0].createDate} />
        </ReviewBoardContents>}
        {store.reviews.length===2 && <ReviewBoardContents>
          <Review userName={store.reviews[0].userName} content={store.reviews[0].content} score={store.reviews[0].score} images={[store.reviews[0].image]} createDate={store.reviews[0].createDate} />
          <Review border={true} userName={store.reviews[1].userName} content={store.reviews[1].content} score={store.reviews[1].score} images={[store.reviews[1].image]} createDate={store.reviews[1].createDate} />
        </ReviewBoardContents>}
        {store.reviews.length===0 && <ReviewBoardNoneContents>
          <Text fontSize="16px">아직 등록된 리뷰가 없어요!</Text>
        </ReviewBoardNoneContents>}
        
      </ReviewBoard>
      <RouterBtn onClick={() => { window.location.href = `/galleryBoard/${store.id}`}}>후기 게시판 보러 가기</RouterBtn>

      {store.notices.length===1 && <>
        <Announce content={store.notices[0].title} spreadClick={false} setSpreadClick={()=>{}} isFirst={false} createdDate={store.notices[0].createdDate}/>
      </>}
      {store.notices.length===2 && <>
        <Announce content={store.notices[0].title} spreadClick={false} setSpreadClick={()=>{}} isFirst={false} createdDate={store.notices[0].createdDate}/>
        <Announce content={store.notices[1].title} spreadClick={false} setSpreadClick={()=>{}} isFirst={false} createdDate={store.notices[1].createdDate}/>
      </>}
      
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
  justify-content: space-between;
  align-items: center;
`;
const PostBoardNoneContents = styled.div`
  display: flex;
  flex-direction: row;
  height: 190px;
  justify-content: center;
  align-items: center;
`;
const ReviewBoard = styled.div`
  ${Content}
  height: min-content;
min-height: 201px;
`;
const ReviewBoardContents = styled.div`
  ${PostBoardContents}
`;
const ReviewBoardNoneContents = styled.div`
  height: min-content;
  min-height: 201px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
