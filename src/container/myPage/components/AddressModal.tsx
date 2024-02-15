import React, { ChangeEvent, useState, KeyboardEvent, useRef, useEffect } from 'react'
import styled from 'styled-components'
import {Box, Text } from './MyPage.style'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'

interface commonI {
  countPerPage: number
  currentPage : number
  totalCount: number
}

interface props {
  onClickInputAddress: ()=>void
}

function AddressModal({onClickInputAddress}: props) {
  const [searchWord, setSearchWord] = useState<string>('')
  // const [pageCnt, setPageCnt] = useState<number>(0)
  const [addrData, setAddrData] = useState<any[]>([])
  const focusRef = useRef<HTMLDivElement>(null)
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const [common, setCommon] = useState<commonI>({
    countPerPage: 20,
    currentPage: -1,
    totalCount: 0,
  }) 
  const [ref, inView] = useInView({ 
    threshold: 1,
    onChange: (inView) => {
      if(inView){
        if(common.totalCount>common.countPerPage * common.currentPage){
          searchAddress();
        }else{
        }
      }
    } 
  });

  useEffect(()=>{
    if(focusRef.current){
      focusRef.current.scrollTop = 0;
    }
  },[isSearch])
  

  /**
   * 무한스크롤
   */
  const searchAddress = async () => {
    if(searchWord !== ''){
      try {
        // const res = await axios.get(`https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=${'U01TX0FVVEgyMDI0MDIxMzIwMjkyODExNDUxNDI='}&currentPage=${pageCnt}&countPerPage=10&keyword=${searchWord}&resultType=json`);
        const res = await axios.get(`https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=${process.env.NEXT_PUBLIC_JUSO_ADDRESS_API_KEY}&currentPage=${common.currentPage+1}&countPerPage=20&keyword=${searchWord}&resultType=json`);
        if (res.data.results.common.errorCode === "0") {
          let tmp = addrData.concat(res.data.results.juso);
          setAddrData(tmp);
          setCommon({
            countPerPage: Number(res.data.results.common.countPerPage),
            currentPage: Number(res.data.results.common.currentPage),
            totalCount: Number(res.data.results.common.totalCount)
          })
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  /**
   * 새로운 검색
   */
  const searchAddressButton = async () => {
    if(searchWord !== ''){
      try {
        // const res = await axios.get(`https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=${'U01TX0FVVEgyMDI0MDIxMzIwMjkyODExNDUxNDI='}&currentPage=${pageCnt}&countPerPage=10&keyword=${searchWord}&resultType=json`);
        const res = await axios.get(`https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=${process.env.NEXT_PUBLIC_JUSO_ADDRESS_API_KEY}&currentPage=0&countPerPage=20&keyword=${searchWord}&resultType=json`);
        if (res.data.results.common.errorCode === "0") {
          setAddrData(res.data.results.juso);
          setCommon({
            countPerPage: Number(res.data.results.common.countPerPage),
            currentPage: Number(res.data.results.common.currentPage),
            totalCount: Number(res.data.results.common.totalCount)
          })
          setIsSearch(prev=>!prev)
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
    
    console.log("search word", searchWord)
  };

  const onClickGetAddress = () => {
    searchAddressButton();
  }

   /**
   * 검색어 입력 후 enter 키 입력시 동작 함수
   * @param e : enter key press 여부
   */
   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // 엔터 키가 입력되었을 때 동작할 코드 작성
    if (e.key === 'Enter') {
      searchAddressButton()
    }
  };

  
  return (
        <ModalContent>
          <ModalHeader>
            <HeaderText>주소 선택</HeaderText>
            <OutBtn onClick={onClickInputAddress}>X</OutBtn>
          </ModalHeader>
          <ModalContents>
            <SearchBox>
              <InputText type='text' onChange={handleInputChange} value={searchWord} onKeyDown={handleKeyDown}/>
              <InputButton onClick={onClickGetAddress}>검색</InputButton>
            </SearchBox>
            <AddressWrap ref={focusRef}>
            {
              addrData && addrData.map((juso, idx)=>(
                <AddressItem key={`juso.zipNo-${idx}`}>
                  <Text color='red' margin='0 0 8px' fontSize='20px' >{juso.zipNo}</Text>
                  <Box>
                    <AddressTag>도로명</AddressTag>
                    <Text color='black' margin='0 0 8px' fontSize='16px' >{juso.roadAddr}</Text>
                  </Box>
                  <Box>
                    <AddressTag>지번</AddressTag>
                    <Text color='black' fontSize='16px' >{juso.jibunAddr}</Text>
                  </Box>
                </AddressItem>
              ))
            }
            <Box ref={addrData.length >0&& common.currentPage!==-1 ? ref : null}/>
            </AddressWrap>
          </ModalContents>
        </ModalContent>
  )
}

export default AddressModal


const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 500px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const ModalHeader = styled.div`
  width: 600px;
  height: 48px;
  background-color: #FF6F00;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderText = styled.div`
  font-size: 28px;
  color: white;
  font-family: noto-sans-cjk-kr;
  font-weight: bold;
  margin: 0 16px;
`

const OutBtn = styled.div`
  font-size: 28px;
  color: white;
  font-weight: bold;
  margin: 0 24px;
  cursor: pointer;
`

const ModalContents = styled.div`
  width: 100%;
  height:calc(100% - 48px);
`

const SearchBox = styled.div`
  background: white;
  border-bottom: 1px solid #e9e9e9;
  padding: 15px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const InputText = styled.input`
  font-family: noto-sans-cjk-kr;
  display: block;
  width: 440px;
  height: 48px;
  font-size: 24px;
  border: 2px solid #f5964d;
  border-radius: 4px;
  padding: 8px;
  background-color: #fff;
`

const InputButton = styled.button`
  border-radius: 4px;
  background-color: white;
  border: 2px solid #f5964d;
  font-size: 16px;
  width: 108px;
  font-family: noto-sans-cjk-kr;
  height: 48px;
  cursor: pointer;
  :hover{
    background-color: #f5964d;
    color: white;
  }
`

const AddressWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px;
  background-color: #eee;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #f5964d white;
  /* 스크롤바 전체 영역 */
::-webkit-scrollbar {
    width: 10px;  /* 세로축 스크롤바 폭 너비 */
    height: 20px;  /* 가로축 스크롤바 폭 너비 */
}
::-webkit-scrollbar-thumb {
    background: #e89a3e; /* 스크롤바 막대 색상 */
    border: 2px solid #9b6a2f; /* 스크롤바 막대 테두리 설정  */
    border-radius: 12px 12px 12px 12px;
}
`

const AddressItem = styled.div`
  width: 97%;
  height: 20%;
  margin: 8px 0;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: white;
  border-radius: 4px;
  border: 2px solid #dadada;
  cursor: pointer;
`

const AddressTag = styled.div`
  font-size: 12px;
  height: 16px;
  width: 48px;
  margin-right: 8px;
  font-family: noto-sans-cjk-kr;
  border-radius: 4px;
  border: 1px solid #e89a3e;
  color: #e89a3e;
`

