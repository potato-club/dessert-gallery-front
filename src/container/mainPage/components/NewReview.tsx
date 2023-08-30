import React from 'react'
import styled from 'styled-components'

function NewReview() {
  return (
    <NewReviewWrap>
      <TextWrap>
        <TitleText>최신 후기글</TitleText>
        <SummaryText>최신 후기는 이곳에서! 지금 올라오는 생생한 후기들을 감상하세요!</SummaryText>
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