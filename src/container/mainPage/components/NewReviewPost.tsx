import React from 'react'
import styled from 'styled-components'
import RecentReviews from './RecentReviews'
import { resReviewPost } from '../../../types/apiTypes'

export default function NewReviewPost({ newReviewPosts }: { newReviewPosts: resReviewPost[] }) {
  return (
    <ContentWrap>
        {
          newReviewPosts.slice(0,4).map(e=> (
            <RecentReviews height={444} width={256} imgSrc={e.fileUrl} reviewList={e.reviewList} storeId={e.storeId} address={e.address} title={e.storeName} key={e.storeId} />
          ))
        }
    </ContentWrap>
  )
}

const ContentWrap = styled.div`
  width: 1200px;
  margin: 64px 0;
  height: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`