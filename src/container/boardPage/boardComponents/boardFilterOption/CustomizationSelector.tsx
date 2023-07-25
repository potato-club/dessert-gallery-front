import React, { useEffect } from 'react'
import { CustomizationSelectorWrap, MenuWrap, MenuText, SpecialMenuWrap } from './CustomizationSelector.style'
import Tag from '../../../../components/Tag';
import type { customizationSelectorValue } from '../../../../types/componentsProps'

export default function CustomizationSelector({filterstate, onClickFilterOption}: customizationSelectorValue) {
  useEffect(() => {console.log(filterstate)}, [filterstate]);
  return (
    <CustomizationSelectorWrap>
      <MenuWrap>
        <MenuText>원재료</MenuText>
        <Tag width='100px' height='40px' title='쌀' clickAble={true} inversion={filterstate[0].state} onClickHandler={()=>onClickFilterOption({selected: '쌀', idx: 0, state: filterstate[0].state})} fontSize='16px' margin='0 32px'/>
        <Tag width='100px' height='40px' title='떡'  clickAble={true} inversion={filterstate[1].state} onClickHandler={()=>onClickFilterOption({selected: '떡', idx: 1, state: filterstate[1].state})} fontSize='16px' margin='0 32px'/>
        <Tag width='100px' height='40px' title='일반'  clickAble={true} inversion={filterstate[2].state} onClickHandler={()=>onClickFilterOption({selected: '일반', idx: 2, state: filterstate[2].state})} fontSize='16px' margin='0 32px'/>
      </MenuWrap>
      <SpecialMenuWrap>
        <MenuText>특수</MenuText>
        <Tag width='140px' height='40px' title='용돈 케이크'  clickAble={true} inversion={filterstate[3].state} onClickHandler={()=>onClickFilterOption({selected: '용돈 케이크', idx: 3, state: filterstate[3].state})} fontSize='16px' margin='0 32px'/>
        <Tag width='140px' height='40px' title='포토 케이크'  clickAble={true} inversion={filterstate[4].state} onClickHandler={()=>onClickFilterOption({selected: '포토 케이크', idx: 4, state: filterstate[4].state})} fontSize='16px' margin='0 32px'/>
        <Tag width='124px' height='40px' title='토퍼 포함' clickAble={true} inversion={filterstate[5].state} onClickHandler={()=>onClickFilterOption({selected: '토퍼 포함', idx: 5, state: filterstate[5].state})} fontSize='16px' margin='0 32px'/>
        <Tag width='152px' height='40px' title='for 반려동물' clickAble={true} inversion={filterstate[6].state} onClickHandler={()=>onClickFilterOption({selected: 'for 반려동물', idx: 6, state: filterstate[6].state})} fontSize='16px' margin='0 32px'/>
      
      </SpecialMenuWrap>
    </CustomizationSelectorWrap>
  )
}
