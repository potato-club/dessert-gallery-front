import React, { ChangeEvent, KeyboardEvent, useState } from 'react'

import { BoardOptionWrap, OptionCategoriesWrap, OptionCategoriesButton, OptionCategoriesTextInputLabel, OptionCategoriesSVGImg, OptionCategoriesTextInput, SelectOptionWrap, SelectOptionTagWrap, SelectOptionCancleWrap } from './BoardOption.style'
import CustomizationSelector from './CustomizationSelector'
import Tag from '../../../components/Tag'
import type { boardOptionData, filterData } from '../../../types/componentsData'


function BoardOption() {
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const [selectCategory, setSelectCategory] = useState<number>(2)
  const [searchWord, setSearchWord] = useState<string>('')
  const [filterOptionState, setFilterOptionState] = useState(Array(7).fill(false))
  const [optionData, setOptionData] = useState<boardOptionData>({
    location: [],
    selectSearchWord: '',
    filterOption: []
  })

  const onChangeSearchWord = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
  }

  const onClickResetForm = () => {
    setOptionData({
      location: [],
      selectSearchWord: '',
      filterOption: []
    })
    setIsSelected(false);
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // 엔터 키가 입력되었을 때 동작할 코드 작성
      setOptionData((prev)=>({
        ...prev,
        selectSearchWord: searchWord
    }))
    setIsSelected(true);
    setSearchWord('');
    }
  };

  const onClickFilterOption = ({selected, idx}:filterData) => {
    let temp = optionData.filterOption.concat(selected)
    let state = filterOptionState.map((e,i) => {
      if(i === idx){
        return true;
      }else{
        return e;
      }
    })
    setOptionData((prev)=>({
      ...prev,
      filterOption: temp
  }))
  setFilterOptionState(state);
  setIsSelected(true);
  }

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
      {selectCategory === 1 && <CustomizationSelector filterstate={filterOptionState} onClickFilterOption={onClickFilterOption} />}
      <SelectOptionWrap >
        <SelectOptionTagWrap>
          {
            optionData.selectSearchWord !== '' && <Tag 
                                                    margin='18px 30px'
                                                    width='207px' 
                                                    height='55px' 
                                                    fontSize='20px' 
                                                    title={optionData.selectSearchWord} 
                                                    key={optionData.selectSearchWord} 
                                                    clickAble={true} 
                                                    onClickHandler={()=>alert('click')} 
                                                  />
          }
          {
            optionData.filterOption.length !== 0 && optionData.filterOption.map((e)=> <Tag 
                                                                                        margin='18px 30px'
                                                                                        width='207px' 
                                                                                        height='55px' 
                                                                                        fontSize='20px' 
                                                                                        title={e} 
                                                                                        key={e} 
                                                                                        clickAble={true} 
                                                                                        onClickHandler={()=>alert('click')} 
                                                                                      />)
          }
        </SelectOptionTagWrap>
        <SelectOptionCancleWrap>
          {
            isSelected 
            ? <Tag margin='0 28px' width='210px' height='48px' title='선택 초기화' clickAble={true} hoverCss={true} onClickHandler={onClickResetForm} fontSize='20px' inversion={true}  />
            : <Tag margin='0 28px' width='210px' height='48px' title='선택 초기화' clickAble={false}  fontSize='20px' inversion={false}  />
          }
        </SelectOptionCancleWrap>
      </SelectOptionWrap>
    </BoardOptionWrap>
  )
}

export default BoardOption