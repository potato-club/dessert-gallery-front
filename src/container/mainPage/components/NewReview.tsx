import React from 'react'
import styled from 'styled-components'
import type { resReviewPost } from '../../../types/apiTypes'
import RecentReviews from './RecentReviews'
import Tag from '../../../components/Tag'


function NewReview({recentReviewList}:{recentReviewList: resReviewPost[]}) {
  const onClickMoreButton = () => {
    window.location.href ='/reviewBoard'
  }
  return (
    <NewReviewWrap>
      <TextWrap>
        <TitleText>최신 후기글</TitleText>
        <SummaryText>최신 후기는 이곳에서! 지금 올라오는 생생한 후기들을 감상하세요!</SummaryText>
        <ContentWrap>
        {
          recentReviewList.map(e=> (
            <RecentReviews height={444} width={256} imgSrc={e.fileUrl} reviewList={e.reviewList} storeId={e.storeId} address={e.address} title={e.storeName} key={e.storeId} />
          ))
        }
        </ContentWrap>
        <Tag height='55px' width='228px' title='더보기' clickAble={true} fontSize='21px' hoverCss={true} margin='55px 0' onClickHandler={onClickMoreButton}/>
      </TextWrap>
    </NewReviewWrap>
  )
}

export default NewReview

const NewReviewWrap = styled.div`
  width: 100vw;
  height: 797px;
`

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0 53px 0;
`;

const TitleText = styled.div`
  font-family: noto-sans-cjk-kr;
  font-weight: bold;
  font-size: 40px;
`;

const SummaryText = styled.div`
  font-family: noto-sans-cjk-kr;
  font-size: 12px;
  margin-top: 7px;
`;

const ContentWrap = styled.div`
  width: 1200px;
  margin: 0 0 64px 0;
  height: 450px;
  display: flex;
  justify-content: space-between
`