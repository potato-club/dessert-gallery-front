import React from 'react'
import { MoveToMapWrap, ConstentsWrap,TextWrap, Text } from './MoveToMap.style'
import Tag from '../../../components/Tag'

function MoveToMap() {

  const onClickMoveMapPage = () => {
    window.location.href = '/map'
  }
  
  return (
    <MoveToMapWrap>
      <ConstentsWrap>
        <TextWrap>
          <Text key={1} fontSize='63px'>지금!</Text>
          <Text key={2} fontSize='27px'>근처에 있는 가게들을 찾고 싶다면?</Text>
        </TextWrap>
        <Tag height='60px' width='338px' title='지도 게시판 보러가기' clickAble={true} hoverCss={false} fontSize='24px' onClickHandler={onClickMoveMapPage}/>
      </ConstentsWrap>
    </MoveToMapWrap>
  )
}

export default MoveToMap