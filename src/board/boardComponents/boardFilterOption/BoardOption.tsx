import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'

import { BoardOptionWrap, OptionCategoriesWrap, OptionCategoriesButton, OptionCategoriesTextInputLabel, OptionCategoriesSVGImg, OptionCategoriesTextInput, SelectOptionWrap, SelectOptionTagWrap, SelectOptionCancleWrap } from './BoardOption.style'
import CustomizationSelector from './CustomizationSelector'
import Tag from '../../../components/Tag'
import type { boardOptionData, filterData, tagClickData } from '../../../types/componentsData'


function BoardOption() {
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const [selectCategory, setSelectCategory] = useState<number>(2)
  const [searchWord, setSearchWord] = useState<string>('')
  const [filterOptionState, setFilterOptionState] = useState<filterData[]>([
    { selected: '쌀', idx: 0, state: false },
    { selected: '떡', idx: 1, state: false },
    { selected: '일반', idx: 2, state: false },
    { selected: '용돈 케이크', idx: 3, state: false },
    { selected: '포토 케이크', idx: 4, state: false },
    { selected: '토퍼 포함', idx: 5, state: false },
    { selected: 'for 반려동물', idx: 6, state: false },
  ]);
  const [optionData, setOptionData] = useState<boardOptionData>({
    location: [],
    selectSearchWord: '',
    filterOption: []
  })

  useEffect(()=>{}, [isSelected])
  /**
   * 검색어 입력 함수
   */
  const onChangeSearchWord = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
  }

  /**
   * 검색 초기화 버튼 클릭 함수
   */
  const onClickResetForm = () => {
    setOptionData({
      location: [],
      selectSearchWord: '',
      filterOption: []
    })
    setFilterOptionState([
      { selected: '쌀', idx: 0, state: false },
      { selected: '떡', idx: 1, state: false },
      { selected: '일반', idx: 2, state: false },
      { selected: '용돈 케이크', idx: 3, state: false },
      { selected: '포토 케이크', idx: 4, state: false },
      { selected: '토퍼 포함', idx: 5, state: false },
      { selected: 'for 반려동물', idx: 6, state: false },
    ]);
    setIsSelected(false);
  }

  const isAllClean=()=>{
    console.log("이게? ", optionData)
    let check = false;
    if(optionData.filterOption.length > 1){
      check = true;
    }
    else if(optionData.location.length !== 0){
      check = true;
    }else if( optionData.selectSearchWord !== ''){
      check = true
    }

    if(check === false){
      setIsSelected(false);
    }
  }

  /**
   * 검색어 입력 후 enter 키 입력시 동작 함수
   * @param e : enter key press 여부
   */
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

  /**
   * 디저트 종류 선택 함수
   * @param param0 
   */
  const onClickFilterOption = (data: filterData) => {
    let temp: filterData[];
    let filter: filterData[]
  
    if (optionData.filterOption.findIndex((e) => e.selected === data.selected) === -1) {
      temp = optionData.filterOption.concat(data);
      filter = filterOptionState.map((e)=> {
        if(e.selected === data.selected){
          return {selected: e.selected, idx: e.idx, state: true}
        }else{
          return e;
        }
      });
    } else {
      temp = optionData.filterOption.filter((e) => e.selected !== data.selected);
      filter = filterOptionState.map((e)=> {
        if(e.selected === data.selected){
          return {selected: e.selected, idx: e.idx, state: false}
        }else{
          return e;
        }
      });
      isAllClean();
    }
    setOptionData((prev) => ({
      ...prev,
      filterOption: temp,
    }));
    setFilterOptionState(filter); // filterOptionState 업데이트
    setIsSelected(true);
  };

  const onClickTag = ({menu, selected='', idx=0}:tagClickData) => {
    if(menu === 2){
      let temp = optionData.filterOption.filter(e => e.selected !==selected)
      let state = filterOptionState.map((e,i) => {
        if(i === idx){
          return {selected: e.selected, idx: e.idx, state: false};
        }else{
          return e;
        }
      })
      setOptionData((prev)=>({
        ...prev,
        filterOption: temp
      }))
      setFilterOptionState(state); // filterOptionState 업데이트
    }

    if(menu === 3){
      setOptionData((prev)=>({
        ...prev,
        selectSearchWord: ''
      }))
    }
    isAllClean();
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
                                                    onClickHandler={()=>onClickTag({menu: 3})} 
                                                  />
          }
          {
            optionData.filterOption.length !== 0 && optionData.filterOption.map((e)=> <Tag 
                                                                                        margin='18px 30px'
                                                                                        width='207px' 
                                                                                        height='55px' 
                                                                                        fontSize='20px' 
                                                                                        title={e.selected} 
                                                                                        key={e.selected} 
                                                                                        clickAble={true} 
                                                                                        onClickHandler={()=>onClickTag({menu: 2, selected: e.selected, idx: e.idx})} 
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