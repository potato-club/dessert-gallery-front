import React from 'react'
import { LogoImage, Wrap, InfoText, FollowWrap } from './NoneNewReviewPosts.style'

export default function NoneNewReviewPosts() {
  return (
    <FollowWrap>
      <Wrap>
        <LogoImage/>
        <InfoText>
          아직 올라온 리뷰가 없어요
        </InfoText>
      </Wrap>
    </FollowWrap>
  )
}
