import React from 'react'
import GalleryPost from './GalleryPost'
import styled from 'styled-components'

export default function Contents() {
  return (
    <Wrap>
      <GalleryPost/>
      <GalleryPost/>
      <GalleryPost/>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;