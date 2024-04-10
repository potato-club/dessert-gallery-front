import React from 'react'
import styled from 'styled-components'
import Tag from '../../../components/Tag'
import { useGetRecentReviews } from '../../../hooks/useGetMain'
import NewReviewPost from './NewReviewPost'


function NewReview() {
  const {data, isLoading, error} = useGetRecentReviews();

  const onClickMoreButton = () => {
    window.location.href ='/reviewBoard'
  }
  return (
    <NewReviewWrap>
      <TextWrap>
        <TitleText>최신 후기글</TitleText>
        <SummaryText>최신 후기는 이곳에서! 지금 올라오는 생생한 후기들을 감상하세요!</SummaryText>
        {!isLoading && <NewReviewPost newReviewPosts={data}/>}
        <Tag height='55px' width='228px' title='더보기' clickAble={true} fontSize='21px' hoverCss={true} margin='55px 0' onClickHandler={onClickMoreButton}/>
      </TextWrap>
    </NewReviewWrap>
  )
}

export default NewReview

const NewReviewWrap = styled.div`
  width: 100vw;
  height: 797px;
  @media screen and (max-width: 1280px) {
    width: 1280px; 
  }
  @media screen and (max-width: 480px) {
    min-width: 480px; 
  }
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

