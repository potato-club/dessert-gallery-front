import React from 'react'
import styled from 'styled-components'
import { PostWrap } from './FeedSwitcher.style'

export default function FeedPrev() {
  const prevData = [1,2,3,4,5,6]
  return (
    <PostWrap>
      {prevData.map(e => <PrevPost key={`FeedPrevPost${e}`}/>)}
    </PostWrap>
  )
}

const PrevPost = styled.div`
    width: 184px;
    height: 270px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    border-radius: 0 0 16px 16px;
    box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 15%);
    margin: 48px 0;
`