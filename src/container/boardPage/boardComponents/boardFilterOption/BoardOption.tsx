import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'

import { BoardOptionWrap, OptionCategoriesWrap, OptionCategoriesButton, OptionCategoriesTextInputLabel, OptionCategoriesSVGImg, OptionCategoriesTextInput, SelectOptionWrap, SelectOptionTagWrap, SelectOptionCancleWrap } from './BoardOption.style'
import LocationSelector from './LocationSelector'
import Tag from '../../../../components/Tag'
import type { tagClickData } from '../../../../types/componentsData'
import SortingButton from '../SortingButton'
import { selectOrder, boardOptionValue } from '../../../../types/componentsProps'


function BoardOption({orderOption, setOrderOption,optionData,setOptionData, setPageCount, setReloadDone}: boardOptionValue) {
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const [selectCategory, setSelectCategory] = useState<number>(2)
  const [searchWord, setSearchWord] = useState<string>('')
  const [searchWordList, setSearchWordList] = useState<string[]>([])
  
  const [sorting, setSorting] = useState<boolean>(false)
  

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
      location: '',
      selectSearchWord: [],
    })
    setIsSelected(false);
    setSearchWordList([])
    setPageCount(1);
    setReloadDone(false);
  }

  /**
   * 정렬 옵션 선택 함수
   */
  const onChangeOrderOption = ({eng, kor}: selectOrder) => {
    setOrderOption({
      eng: eng,
      kor: kor
    })
    setPageCount(1)
    setSorting(false)
  };

  const isAllClean=(menu:number)=>{
    let check = false;
    if(menu ===1){
      if(optionData.selectSearchWord.length !==0){
        check = true;
      }
    }else{
      if(optionData.location.length !== 0){
        check = true;
      }else if(optionData.selectSearchWord.length>1){
        check = true;
      }
    }
    
    if(check === false){
      setIsSelected(false);
    }
    setPageCount(1)
    setReloadDone(false);
  }

  /**
   * 검색어 입력 후 enter 키 입력시 동작 함수
   * @param e : enter key press 여부
   */
  // 여러개의 검색어를 입력할 수 있는 버전
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    // 엔터 키가 입력되었을 때 동작할 코드 작성
    if (e.key === 'Enter' && searchWord.length !== 0) {
      // 사용자가 입력한 키워드가 겹치지 않으면 배열에 추가
    console.log('press enter key ', searchWord)
      let data = searchWordList.findIndex((e)=> e === searchWord) === -1 ? searchWordList.concat(searchWord) : searchWordList 
      setOptionData((prev)=>({
        ...prev,
        selectSearchWord: data
    }))
    setSearchWordList(data);
    setIsSelected(true);
    setSearchWord('');
    setPageCount(1)
    setReloadDone(false);
    }
  };

  /**
   * 지역 옵션 선택 처리 함수
   */
  const onChangeLocation = (e:string) => {
    setOptionData((prev) =>({
      ...prev,
      location: e
    }))
    setIsSelected(true)
    setPageCount(1)
    setReloadDone(false);
  }

  const onClickTag = ({menu, idx=0}:tagClickData) => {
    if(menu === 1){
      setOptionData((prev)=>({
        ...prev,
        location: ''
      }))
      isAllClean(menu);
    }
    else if(menu === 2){
      let temp = searchWordList.filter((e, i) => i !==idx)
      setOptionData((prev)=>({
        ...prev,
        selectSearchWord: temp
      }))
      setSearchWordList(temp)
      isAllClean(menu);
    }
    setPageCount(1)
    setReloadDone(false);
  }

  return (
    <BoardOptionWrap>
      <OptionCategoriesWrap>
        <OptionCategoriesButton categoryId={0} selectNumber={selectCategory} onClick={()=>{setSelectCategory(0)}}>픽업 지역 선택</OptionCategoriesButton>
        <OptionCategoriesTextInputLabel>
          <OptionCategoriesSVGImg src='/SVG/galleryBoardPage/Search.svg'/>
          <OptionCategoriesTextInput type="text" placeholder='해시태그를 검색해보세요' onChange={onChangeSearchWord} onKeyUp={handleKeyUp} value={searchWord} onFocus={()=>{setSelectCategory(2)}}/>
        </OptionCategoriesTextInputLabel>
      </OptionCategoriesWrap>
      {selectCategory === 0 && <LocationSelector selectedLocation={optionData.location} onChangeLocation={onChangeLocation}/>}
      <SelectOptionWrap >
        <SelectOptionTagWrap>
          {optionData.location !== '' && <Tag 
                                                    margin='18px 24px'
                                                    width='207px' 
                                                    height='55px' 
                                                    fontSize='20px' 
                                                    title={optionData.location} 
                                                    key={optionData.location} 
                                                    clickAble={true} 
                                                    onClickHandler={()=>onClickTag({menu: 1})} 
                                                  />
          }
          {
            optionData.selectSearchWord.length !== 0 && optionData.selectSearchWord.map((e, i)=> <Tag 
                                                    margin='18px 24px'
                                                    width='207px' 
                                                    height='55px' 
                                                    fontSize='20px' 
                                                    title={e} 
                                                    key={e} 
                                                    clickAble={true} 
                                                    onClickHandler={()=>onClickTag({menu: 2, idx: i})} 
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
      <SortingButton sorting={()=>{setSorting(prev => !prev)}} isSelect={sorting} selected={orderOption} selectOrder={onChangeOrderOption} />
    </BoardOptionWrap>
  )
}

export default BoardOption