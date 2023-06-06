import React, { ChangeEvent, KeyboardEvent , useState } from 'react'

import { BoardOptionWrap, OptionCategoriesWrap, OptionCategoriesButton, OptionCategoriesTextInputLabel, OptionCategoriesSVGImg, OptionCategoriesTextInput, SelectOptionWrap, SelectOptionTagWrap } from './BoardOption.style'

import Tag from '../../../components/Tag'


function BoardOption() {
  const [selectCategory, setSelectCategory] = useState<number>(2)
  const [searchWord, setSearchWord] = useState<string>('')
  const [optionData, setOptionData] = useState({
    location: [],
    selectSearchWord: '',
    filterOption: []
  })

  const onChangeSearchWord = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // 엔터 키가 입력되었을 때 동작할 코드 작성
      setOptionData((prev)=>({
        ...prev,
        selectSearchWord: searchWord
    }))
      setSearchWord('');
    }
  };

  return (
    <BoardOptionWrap>
      <OptionCategoriesWrap>
        <OptionCategoriesButton categoryId={0} selectNumber={selectCategory} onClick={()=>{setSelectCategory(0)}}>픽업 지역 선택</OptionCategoriesButton>
        <OptionCategoriesButton categoryId={1} selectNumber={selectCategory} onClick={()=>{setSelectCategory(1)}} >디저트 종류</OptionCategoriesButton>
        <OptionCategoriesTextInputLabel>
          <OptionCategoriesSVGImg src='/SVG/galleryBoardPage/Search.svg'/>
          <OptionCategoriesTextInput type="text" placeholder='검색어를 입력해 주세요' onChange={onChangeSearchWord} onKeyDown={handleKeyDown} value={searchWord} onFocus={()=>{setSelectCategory(2)}}/>
        </OptionCategoriesTextInputLabel>
      </OptionCategoriesWrap>
      <SelectOptionWrap >
        <SelectOptionTagWrap>
          {
            optionData.selectSearchWord !== '' && <Tag margin='32px 32px' width='304px' height='80px' fontSize='20px' title={optionData.selectSearchWord} key={optionData.selectSearchWord} clickAble={true} onClickHandler={()=>alert('click')} />
          }
          <Tag margin='32px 32px' width='304px' height='80px' fontSize='20px' title='testTag1' key='testTag1' clickAble={true} onClickHandler={()=>alert('click')} />
          <Tag margin='32px 32px' width='304px' height='80px' fontSize='20px' title='testTag2' key='testTag2' clickAble={true} onClickHandler={()=>alert('click')} />
        </SelectOptionTagWrap>
      </SelectOptionWrap>
    </BoardOptionWrap>
  )
}

export default BoardOption