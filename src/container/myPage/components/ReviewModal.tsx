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
import {LeftArrow, RightArrow} from '../../../../public/svg'
//차후 변경
import { postReview } from '../../../apis/controller/review'

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
  storeImage: storeImageDataI | null
}

interface props {
  setShowReviewModal: React.Dispatch<React.SetStateAction<boolean>>
  writeAbleStoreData: writeAbleI[]
}

function ReviewModal({setShowReviewModal, writeAbleStoreData}: props) {
  const [content, setContent] = useState<string>('')
  const [score, setScore] = useState<number>(0)
  const [modalBgState, setModalBgState] = useRecoilState(modalBg);
  const [images, setImages] = useState<ImageI[]>([])
  const [sendImageArray, setSendImageArray] = useState<File[]>([])
  const [index, setIndex] = useState<number>(0)


  const handleSubmit = async () => {

    try {
      // FormData를 서버로 전송하거나 API 호출을 수행할 수 있습니다.

      let sendFormData = new FormData();

      const requestDto = {
        content: content,
        score: score,
      };
    
      sendFormData.append(
        "requestDto",
        new Blob([JSON.stringify(requestDto)], { type: "application/json" })
      );
    
      if(sendImageArray.length !== 0){
        sendImageArray.forEach((i) => {
          sendFormData.append("images", i);
        });
      }

      const response = await postReview({storeId: writeAbleStoreData[index].id, req: sendFormData})

      if (response) {
        alert('리뷰 작성 완료')
        window.location.href = '/myPage'
      } else {
        console.error('Server Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onClickLeft = () => {
    if(index>0){
      setIndex(prev=>prev-1)
      setContent('')
      setImages([])
      setScore(0)
      setSendImageArray([])
    }
  }
  const onClickRight = () => {
    if(index<writeAbleStoreData.length-1) {
      setIndex(prev=>prev+1)
      setContent('')
      setImages([])
      setScore(0)
      setSendImageArray([])
    }
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(images.length>=4) {
      alert('후기 사진은 4개까지 첨부 가능합니다! \n기존 사진을 삭제하고 추가해주세요!')
      return;
    }
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

  const handleImageDelete = (index: number) => {

    const temp = images.filter(e=> e.index !== index);
    const data = temp.map((e, i) => ({ ...e, index: i }));
    
    const sendData = sendImageArray.filter((_,i)=> i !== index)

    setImages(data);
    setSendImageArray(sendData);
  };
  
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    
    console.log("search word", content)
  };

  const onClickInputAddress = () => {
    setModalBgState(false);
    setShowReviewModal(false)
  };

  
  return (
        <Wrap>
          <ModalHeader>
            <HeaderText>후기 작성하기</HeaderText>
            <OutBtn onClick={onClickInputAddress}>X</OutBtn>
          </ModalHeader>
          <ModalContents>
            <Box bgColor='#FCF6EE' padding='14px 0' justifyContent='space-between'>
              <Box justifyContent='center' alignItems='center'>
                {
                  index>0
                  ?( 
                    <ArrowWrap onClick={onClickLeft}>
                      <LeftArrow width={16} height={24}/>
                    </ArrowWrap>
                  ):(
                    <ArrowWrap/>
                  )
                }
                
                <ImageBox>
                <Image src={writeAbleStoreData[index].storeImage?.fileUrl ?? defaultImage} alt={writeAbleStoreData[index].storeImage?.fileName ?? '빈이미지'} sizes='(max-width: 1023px) 50px, (min-width: 1024px) 80px' layout='fill'/>
                </ImageBox>
                <Box height='100%' direction='column' alignItems='flex-start' justifyContent='space-evenly' padding='0 24px'>
                  <Text textType='text'>{writeAbleStoreData[index].name}</Text>
                  <Text textType='sub'>{writeAbleStoreData[index].content}</Text>
                  <Text textType='text'>{writeAbleStoreData[index].address}</Text>
                </Box>
              </Box>
              <Box>
              {
                  index<writeAbleStoreData.length-1
                  ?( 
                    <ArrowWrap onClick={onClickRight}>
                      <RightArrow width={16} height={24}/>
                    </ArrowWrap>
                  ):(
                    <ArrowWrap/>
                  )
                }
              </Box>
            </Box>
          <ContetnsWrap>
            <Box height='140px' width='406px' direction='column' alignItems='flex-start' justifyContent='space-evenly'>
              <Text textType='title'>별점을 등록해주세요</Text>
              <Text textType='sub'>별점 등록 ({score})</Text>
              <Box width='100%' margin='8px 0' justifyContent='space-around'>
                <ReviewScore score={score} setScore={setScore}/>
              </Box>
            </Box>


            <Box height='260px' margin='30px 0 8px 0' direction='column' alignItems='flex-start' justifyContent='space-evenly'>
              <Text textType='title'>리뷰를 작성해주세요</Text>
              <Text textType='sub'>상품과 관련된 후기를 작성해주세요</Text>
              <InputContents value={content} onChange={handleInputChange} maxLength={250} placeholder='좋은 후기는 디저트 갤러리에 큰 도움이 된답니다 :)'/>
            </Box>
            {
              images.length === 0 ? (
                <Box>
                  <BtnText htmlFor="file">사진 첨부하기</BtnText>
                  <FileInput type="file" id="file" accept="image/*" onChange={handleImageChange}/>
                </Box>
              ): (
                <ImgScrollWrap>
                <ImgWrap>
                  {
                    images.map(e=>(
                      <ImagePreview onClick={()=>{handleImageDelete(e.index)}} key={`imgPrev${e.index}`}>
                        <Image width={72} height={72} src={e.imagesUrl}/>
                      </ImagePreview>
                    ))
                  }
                  <ImageExistBtnText htmlFor="file">+</ImageExistBtnText>
                  <FileInput type="file" id="file" accept="image/*" onChange={handleImageChange}/>
                </ImgWrap>
                </ImgScrollWrap>
              )
            }
            
          </ContetnsWrap>
            <Box>
              <CancleButton onClick={onClickInputAddress}>취소</CancleButton>
              <SendButton onClick={handleSubmit}>등록</SendButton>
            </Box>

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
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 20;
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
  padding: 24px 34px;
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
  cursor: pointer;
`

const ModalContents = styled.div`
  width: 100%;
  height:calc(100% - 48px);
`

const ArrowWrap = styled.div`
  height:100%;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
cursor: default;
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

const InputContents = styled.textarea`
  width: 406px;
  height: 190px;
  border-radius: 8px;
  padding: 16px;
  font-family: noto-sans-cjk-kr;
  background-color: #FEE8CB;
  border: 1px solid #82828216;
  resize: none;
`
const BtnText = styled.label`
  font-family: noto-sans-cjk-kr;
  width: 406px;
  height: 60px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid #828282;
  background-color: #FCF6EE;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const ImagePreview = styled.div`
  border: 1px solid #82828245;
  width: 72px;
  height: 72px;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;
`

const ImageExistBtnText = styled.label`
  font-family: noto-sans-cjk-kr;
  width: 72px;
  height: 72px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid #82828245;
  background-color: #FCF6EE;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const FileInput = styled.input`
  display: none;
`

const SendButton = styled.div`
  font-family: noto-sans-cjk-kr;
  background-color: #FF6F00;
  color: white;
  width: 50%;
  height: 64px;
  font-weight: bold;
  font-size: 24px;
  border-radius: 0 0 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const CancleButton = styled.div`
  font-family: noto-sans-cjk-kr;
  background-color: #FCF0E1;
  color: #FF6F00;
  width: 50%;
  height: 64px;
  font-weight: bold;
  font-size: 24px;
  border-radius: 0 0 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const ImgScrollWrap = styled.div`
  
`

const ImgWrap = styled.div`
  display: flex;
  height: 100px;
  width: 406px;
`