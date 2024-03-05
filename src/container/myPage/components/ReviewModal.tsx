import React, { ChangeEvent, useState, KeyboardEvent, useRef, useEffect } from 'react'
import styled from 'styled-components'
import {Box } from './MyPage.style'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'
import { reverse } from 'dns'
import { useRecoilState} from "recoil";
import { modalBg } from '../../../recoil/modalBg/atom';
import Image from 'next/image'
import defaultImage from '../../../../public/image/TodayBackground.png'
import ReviewScore from './ReviewScore'

interface styleI {
  textType: "title" | "text"| "sub"
}
interface commonI {
  content: string
  score : number
  images: File[]
}

interface ImageI {
  index:number
  images: File
  imagesUrl: string
}

interface storeImageDataI {
  fileName: string
  fileUrl: string
}

interface writeAbleI {
  id: number
  name: string
  content: string
  address: string
  storeImage: storeImageDataI
}

interface props {
  setShowReviewModal: React.Dispatch<React.SetStateAction<Boolean>>
  writeAbleStoreData: writeAbleI[]
}

function ReviewModal({setShowReviewModal, writeAbleStoreData}: props) {
  const [content, setContent] = useState<string>('')
  const [score, setScore] = useState<number>(3.5)
  const [modalBgState, setModalBgState] = useRecoilState(modalBg);
  const [images, setImages] = useState<ImageI[]>([])
  const [sendImageArray, setSendImageArray] = useState<File[]>([])
  const [index, setIndex] = useState<number>(0)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      setImages(prev => prev.concat({
        images: selectedFile,
        imagesUrl: fileUrl,
        index: prev.length+1
      }));
      setSendImageArray(prev => prev.concat(selectedFile))
    }
  };
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
    
    console.log("search word", content)
  };

  const onClickInputAddress = () => {
    setModalBgState(false);
    setShowReviewModal(false)
  };

   /**
   * 검색어 입력 후 enter 키 입력시 동작 함수
   * @param e : enter key press 여부
   */
   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // 엔터 키가 입력되었을 때 동작할 코드 작성
    if (e.key === 'Enter') {
      console.log('enter')
    }
  };

  
  return (
        <Wrap>
          <ModalHeader>
            <HeaderText>후기 작성하기</HeaderText>
            <OutBtn onClick={onClickInputAddress}>X</OutBtn>
          </ModalHeader>
          <ModalContents>
            <Box bgColor='#FCF6EE' padding='14px 32px'>
              <ImageBox>
                {writeAbleStoreData[index].storeImage
                  ?<Image src={writeAbleStoreData[index].storeImage.fileUrl} alt={writeAbleStoreData[index].storeImage.fileName} sizes='(max-width: 1023px) 50px, (min-width: 1024px) 80px' layout='fill'/>
                  :<Image src={defaultImage} alt='빈이미지' sizes='(max-width: 1023px) 50px, (min-width: 1024px) 80px'layout='fill'/>
                }
              </ImageBox>
              <Box direction='column' alignItems='flex-start' justifyContent='space-evenly' padding='0 24px'>
                <Text textType='text'>{writeAbleStoreData[index].name}</Text>
                <Text textType='sub'>{writeAbleStoreData[index].content}</Text>
                <Text textType='text'>{writeAbleStoreData[index].address}</Text>
              </Box>
            </Box>
          <ContetnsWrap>
            <Box height='120px' direction='column' alignItems='flex-start' justifyContent='space-evenly'>
              <Text textType='title'>별점을 등록해주세요</Text>
              <Text textType='sub'>별점 등록 ({score})</Text>
              <Box width='100%'>
                <ReviewScore score={score} setScore={setScore}/>
              </Box>
            </Box>
          
          

            <SearchBox>
              {/* <InputText type='text' onChange={handleInputChange} value={searchWord} onKeyDown={handleKeyDown}/>
              <InputButton onClick={onClickGetAddress}>검색</InputButton> */}
            </SearchBox>
            {/* <AddressWrap ref={focusRef}>
            {
              addrData && addrData.map((juso, idx)=>(
                <AddressItem onClick={()=>onClickAddress(juso.roadAddr)} key={`juso.zipNo-${idx}`}>
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
            <Box ref={addrData.length >0&& common.currentPage!==-1 ? ref : null}/> */}
            {/* </AddressWrap> */}
          </ContetnsWrap>

          </ModalContents>
        </Wrap>
  )
}

export default ReviewModal


const Wrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 476px;
  height: fit-content;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width:1023px) {
    width: 300px;
    height: 507px;
  }
`;

const ContetnsWrap = styled.div`
  padding: 34px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  
`;

const ModalHeader = styled.div`
  width: 476px;
  background-color: white;
  padding: 20px 24px;
  width: 100%;
  
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width:1023px) {
    width: 300px;
  }
`

const HeaderText = styled.div`
  font-size: 28px;
  color: #FF6F00;
  font-family: noto-sans-cjk-kr;
  font-weight: bold;
`

const OutBtn = styled.div`
  font-size: 28px;
  color: gray;
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
  padding: 15px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const ImageBox = styled.div`
  background-color: #FF6F00;
  position: relative;
  @media (min-width:1024px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width:1023px) {
    width: 50px;
    height: 50px;
  }
`

const Text = styled.div<styleI>`
 ${({textType})=>{
      if(textType === "title"){
        return `
        font-size: 12px;
        font-weight: bold;
        font-family: noto-sans-cjk-kr;
        `
      }else if(textType === "text"){
        return `
        font-size: 10px;
        font-weight: bold;
        font-family: noto-sans-cjk-kr;
        `
      }else{
        return `
        font-size: 7px;
        color: #828282;
        font-family: noto-sans-cjk-kr;
        `
      }
    }}
  @media (min-width:1024px) {
    ${({textType})=>{
      if(textType === "title"){
        return `
        font-size: 20px;
        font-weight: bold;
        font-family: noto-sans-cjk-kr;
        `
      }else if(textType === "text"){
        return `
        font-size: 17px;
        font-weight: bold;
        font-family: noto-sans-cjk-kr;
        `
      }else{
        return `
        font-size: 12px;
        color: #828282;
        font-family: noto-sans-cjk-kr;
        `
      }
    }}
  }
  
`

