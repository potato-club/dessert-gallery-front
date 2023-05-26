import React, { ChangeEvent, KeyboardEvent , useState } from 'react'

import { BoardOptionWrap, OptionCategoriesWrap, OptionCategoriesButton, OptionCategoriesTextInput, SelectOptionWrap } from './BoardOption.style'

function BoardOption() {
  const [selectCategory, setSelectCategory] = useState<number>(2)
  const [searchWord, setSearchWord] = useState<string>('')
  const [optionData, setOptionData] = useState({
    location: [],
    
  })

  const onChangeSearchWord = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // 엔터 키가 입력되었을 때 동작할 코드 작성
      alert('send');
      setSearchWord('');
    }
  };

  return (
    <BoardOptionWrap>
      <OptionCategoriesWrap>
        <OptionCategoriesButton categoryId={0} selectNumber={selectCategory} onClick={()=>{setSelectCategory(0)}}>픽업 지역 선택</OptionCategoriesButton>
        <OptionCategoriesButton categoryId={1} selectNumber={selectCategory} onClick={()=>{setSelectCategory(1)}} >디저트 종류</OptionCategoriesButton>
        <OptionCategoriesTextInput type="text" onChange={onChangeSearchWord} onKeyDown={handleKeyDown} value={searchWord} onFocus={()=>{setSelectCategory(2)}} />
      </OptionCategoriesWrap>
      <SelectOptionWrap />
    </BoardOptionWrap>
  )
}

export default BoardOption