import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Box, Text, ImgBox, ProfileForm, FileInput, BtnText, TextInput } from './MyPage.style'
import { propfileApiList } from '../../../apis/controller/profile';
import Tag from '../../../components/Tag'

// export interface storeImageI {
//   fileName: string,
//   fileUrl: string
// }
// export interface storeOwnerI {
//   id: number,
//   name: string,
//   info: string,
//   content: string,
//   address: string",
//   phoneNumber": "string",
//   storeImage": storeImageI
//   postCount": 0,
//   reviewCount": 0
// }


export interface updateStoreI {
  name: string,
  info: string,
  content: string,
  address: string,
  phoneNumber: string,
  image: File[],
  storeId: number,
  removeOriginImage: boolean,
  url: string | null
}

export default function ManagerProfile() {
  const [storeInfo, setStoreInfo] = useState<any>(null)
  const [inputMode, setInputMode] = useState<boolean>(false);
  const [modiStoreValue, setModiStoreValue] = useState<updateStoreI>({
    name: '',
    address: '',
    content: '',
    image: [],
    info: '',
    phoneNumber: '',
    storeId: -1,
    removeOriginImage: false,
    url: null
  })
  const [imgUrl, setImgUrl] = useState<string>('');

  useEffect(()=>{
    const getStoreProfile = async ()=> {
      try {
        const response = await propfileApiList.getStoreProfile()
        setStoreInfo(response)
        setModiStoreValue({
          name: response.res.name,
          address: response.res.address,
          content: response.res.content,
          image: [],
          info: response.res.info,
          phoneNumber: response.res.phoneNumber,
          storeId: response.res.id,
          removeOriginImage: false,
          url: response.res.fileUrl
        })
      } catch (error) {
        
      }
    }
    getStoreProfile()
  },[])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setModiStoreValue({ ...modiStoreValue, [name]: value });
  };

  const handleImageDelete = () => {
    console.log("modiStoreValue: ", modiStoreValue.url)
      setModiStoreValue({
        ...modiStoreValue,
        image: [],
        url: '',
        removeOriginImage: true,
      });
      alert('사진이 삭제되었습니다.')
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      setModiStoreValue({
        ...modiStoreValue,
        image: [selectedFile],
        url: fileUrl,
        removeOriginImage: false,
      });
    }
  };

  const handleCancle = () => {
    setModiStoreValue({
      name: storeInfo.res.name,
      address: storeInfo.res.address,
      content: storeInfo.res.content,
      image: [],
      info: storeInfo.res.info,
      phoneNumber: storeInfo.res.phoneNumber,
      storeId: storeInfo.res.id,
      removeOriginImage: false,
      url: storeInfo.res.storeImage?.fileUrl
    })
    setInputMode(false)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // FormData를 서버로 전송하거나 API 호출을 수행할 수 있습니다.

      let sendFormData = new FormData();

      const updateDto = {
        name: modiStoreValue.name,
        info: modiStoreValue.info,
        content: modiStoreValue.content,
        address: modiStoreValue.address,
        phoneNumber: modiStoreValue.phoneNumber,
        removeOriginImage: modiStoreValue.removeOriginImage
      };
    
      sendFormData.append(
        "updateDto",
        new Blob([JSON.stringify(updateDto)], { type: "application/json" })
      );
    
      if(!modiStoreValue.removeOriginImage && modiStoreValue.image.length !== 0){
        sendFormData.append("image", modiStoreValue.image[0]);
      }

      const response = await propfileApiList.putUpdateStoreProfile({sendFormData, id: modiStoreValue.storeId})

      if (response) {
        alert('수정 완료')
        window.location.href = '/myPage'
      } else {
        console.error('Server Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmitCreate = async (e: FormEvent) => {
    e.preventDefault();
    const hasMissingValues = Object.entries(modiStoreValue).some(([key, value]) =>
      key !== 'storeId' && key !== 'url' && (key !== 'image' ? (value === '' || value === undefined) : (value.length === 0))
    );

    // 누락된 값이나 undefined인 값이 있을 경우 경고창을 띄움
    if (hasMissingValues) {
      alert('입력되지 않은 값이 있거나 값이 유효하지 않습니다.');
      return;
    }
    if (!hasMissingValues) {
      try {
        // FormData를 서버로 전송하거나 API 호출을 수행할 수 있습니다.
  
        let sendFormData = new FormData();
  
        const requestDto = {
          name: modiStoreValue.name,
          info: modiStoreValue.info,
          content: modiStoreValue.content,
          address: modiStoreValue.address,
          phoneNumber: modiStoreValue.phoneNumber,
        };
      
        sendFormData.append(
          "requestDto",
          new Blob([JSON.stringify(requestDto)], { type: "application/json" })
        );
      
        sendFormData.append("image", modiStoreValue.image[0]);
  
  
        const response = await propfileApiList.PostCreateStore(sendFormData)
  
  
        if (response) {
          alert('가게 생성 완료')
          window.location.href = '/myPage'
        } else {
          console.error('Server Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  if(storeInfo !== null &&storeInfo.res!=='noneStore'&&!inputMode){
  console.log("사장이면서, 정보가 있는 상태", storeInfo)
  return (
    <>
    <Box direction='column' width='1122px' margin='64px 0 0 0' >
          <Box alignItems='' justifyContent='space-between'>
            <Text color='#000000' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>대표 가게 사진</Text>
            <Tag color='#000000' onClickHandler={()=>setInputMode(true)} clickAble={true} hoverCss={true} fontSize='16px' height='36px' width='140px' margin='0 0 8px 0' title='가게 정보 수정'/>

          </Box>
          {/* 프로필 박스 영역 */}
          <Box border='2px solid #FF6F00' bgColor='#ffffffab' rounded='24px' padding='27px 57px'>
            <Box width='100%' justifyContent='center' height='fit-content'>
            <Box direction='column' alignItems='center'>
              <ImgBox width='160px' height='160px' bgColor='#FDC886' imgUrl={storeInfo.res.storeImage !== null ? storeInfo.res.storeImage.fileUrl : ''} />
            </Box>
            </Box>
          </Box>
        </Box>

    <Box direction='column' width='1122px' margin='64px 0 0 0'>
          <Text color='#000000' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>가게 프로필</Text>
          {/* 프로필 박스 영역 */}
          <Box direction='column' border='2px solid #FF6F00' bgColor='#ffffffab' rounded='24px' padding='0 57px'>
            <Box width='100%' alignItems='center' justifyContent='space-between'>
              <Box  margin='24px 0'>
                <Text fontSize='17px' fontWeight='bold' color='#000000'>가게 이름</Text>
                <Text fontSize='14px' fontWeight='bold' color='#000000' padding='0 64px'>{storeInfo.res.name}</Text>
              </Box>
            </Box>
            <Box width='100%' alignItems='center' justifyContent='space-between'>
              <Box  margin='24px 0'>
                <Text fontSize='17px' fontWeight='bold' color='#000000'>전화번호</Text>
                <Text fontSize='14px' fontWeight='bold' color='#000000' padding='0 64px'>{storeInfo.res.phoneNumber}</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box direction='column' width='1122px' margin='64px 0 0 0'>
          <Box alignItems='' justifyContent='space-between'>
            <Text color='#000000' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>가게 상세 설명</Text>
          </Box>
          {/* 프로필 박스 영역 */}
          <Box direction='column' border='2px solid #FF6F00' bgColor='#ffffffab' rounded='24px' padding='0 57px'>
            <Box width='100%' alignItems='center' justifyContent='space-between'>
              <Box  margin='24px 0'>
                <Text fontSize='17px' fontWeight='bold' color='#000000'>가게 정보</Text>
                <Text fontSize='14px' fontWeight='bold' color='#000000' padding='0 64px'>{storeInfo.res.info}</Text>
              </Box>
            </Box>
            <Box width='100%' alignItems='center' justifyContent='space-between'>
              <Box  margin='24px 0'>
                <Text fontSize='17px' fontWeight='bold' color='#000000'>가게 위치</Text>
                <Text fontSize='14px' fontWeight='bold' color='#000000' padding='0 64px'>{storeInfo.res.address}</Text>
              </Box>
            </Box>

            <Box width='100%' alignItems='center' justifyContent='space-between'>
              <Box  margin='24px 0'>
                <Text fontSize='17px' fontWeight='bold' color='#000000'>가게 설명</Text>
                <Text fontSize='14px' fontWeight='bold' color='#000000' padding='0 64px'>{storeInfo.res.content}</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        
    </>
  )
  }else if(storeInfo !== null &&storeInfo.res!=='noneStore'&&inputMode){
  console.log("사장이면서, 정보 수정 중", storeInfo)
    return (
      <>
      <Box direction='column' width='1122px' margin='64px 0 0 0' >
            <Box alignItems='' justifyContent='space-between'>
              <Text color='#000000' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>대표 가게 사진 설정</Text>
              <Box>
                <Tag color='#000000' onClickHandler={handleCancle} clickAble={true} hoverCss={true} fontSize='16px' height='36px' width='140px' margin='0 16px 8px 0' title='정보 수정 취소'/>
                <Tag color='#000000' onClickHandler={handleSubmit} clickAble={true} hoverCss={true} fontSize='16px' height='36px' width='140px' margin='0 0 8px 0' title='정보 수정 완료'/>
              </Box>
            </Box>
            {/* 프로필 박스 영역 */}
            <Box border='2px solid #FF6F00' bgColor='#ffffffab' rounded='24px' padding='27px 57px'>
              <Box width='100%' justifyContent='center' height='fit-content'>
              <Box direction='column' alignItems='center'>
                {
                  modiStoreValue.url === null || modiStoreValue.url === undefined
                    ? <ImgBox width='160px' height='160px' bgColor='#FDC886' imgUrl={storeInfo.res.storeImage?storeInfo.res.storeImage.fileUrl:''} />
                    : <ImgBox width='160px' height='160px' bgColor='#FDC886' imgUrl={modiStoreValue.url} />
                }
                
                <BtnText
                    htmlFor="file"
                    padding='16px 0 0 0'
                    fontSize='24px'
                    fontWeight='bold'
                    color='#FF6F00'
                    cursor='pointer'
                    >사진 변경</BtnText>
                <Text
                    padding='16px 0 0 0'
                    fontSize='24px'
                    fontWeight='bold'
                    color='#FF6F00'
                    cursor='pointer'
                    onClick={handleImageDelete}
                    >사진 삭제</Text>
                <FileInput
                    type="file"
                    id="file"
                    accept="image/*"
                    onChange={handleImageChange}/>
              </Box>
              </Box>
            </Box>
          </Box>
  
      <Box direction='column' width='1122px' margin='64px 0 0 0'>
            <Text color='#000000' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>프로필 설정</Text>
            {/* 프로필 박스 영역 */}
            <Box direction='column' border='2px solid #FF6F00' bgColor='#ffffffab' rounded='24px' padding='0 57px'>
              <Box width='100%' alignItems='center' justifyContent='space-between'>
                <Box  margin='24px 0'>
                  <Text fontSize='17px' fontWeight='bold' color='#000000'>가게 이름</Text>
                  <TextInput fontSize='14px' fontWeight='bold' color='#000000' padding='0 64px' type="text" id="name" name="name" value={modiStoreValue.name} onChange={handleInputChange} placeholder={`${storeInfo.res.name}`}/>
                </Box>
              </Box>
              <Box width='100%' alignItems='center' justifyContent='space-between'>
                <Box  margin='24px 0'>
                  <Text fontSize='17px' fontWeight='bold' color='#000000'>전화번호</Text>
                  <TextInput fontSize='14px' fontWeight='bold' color='#000000' padding='0 64px' type="text" id="phoneNumber" name="phoneNumber" value={modiStoreValue.phoneNumber} onChange={handleInputChange} placeholder={`${storeInfo.res.phoneNumber}`}/>
                </Box>
              </Box>
            </Box>
          </Box>
  
          <Box direction='column' width='1122px' margin='64px 0 0 0'>
            <Box alignItems='' justifyContent='space-between'>
              <Text color='#000000' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>가게 상세 설명</Text>
            </Box>
            {/* 프로필 박스 영역 */}
            <Box direction='column' border='2px solid #FF6F00' bgColor='#ffffffab' rounded='24px' padding='0 57px'>
              <Box width='100%' alignItems='center' justifyContent='space-between'>
                <Box  margin='24px 0'>
                  <Text fontSize='17px' fontWeight='bold' color='#000000'>가게 정보</Text>
                  <TextInput fontSize='14px' fontWeight='bold' color='#000000' padding='0 64px' type="text" id="info" name="info" value={modiStoreValue.info} onChange={handleInputChange} placeholder={`${storeInfo.res.info}`}/>

                </Box>
              </Box>
              <Box width='100%' alignItems='center' justifyContent='space-between'>
                <Box  margin='24px 0'>
                  <Text fontSize='17px' fontWeight='bold' color='#000000'>가게 위치</Text>
                  <TextInput fontSize='14px' fontWeight='bold' color='#000000' padding='0 64px' type="text" id="address" name="address" value={modiStoreValue.address} onChange={handleInputChange} placeholder={`${storeInfo.res.address}`}/>
                </Box>
              </Box>
  
              <Box width='100%' alignItems='center' justifyContent='space-between'>
                <Box  margin='24px 0'>
                  <Text fontSize='17px' fontWeight='bold' color='#000000'>가게 설명</Text>
                  <TextInput fontSize='14px' fontWeight='bold' color='#000000' padding='0 64px' type="text" id="content" name="content" value={modiStoreValue.content} onChange={handleInputChange} placeholder={`${storeInfo.res.content}`}/>
                </Box>
              </Box>
            </Box>
          </Box>
  
          
      </>
    )
  }else if(storeInfo !== null &&storeInfo.res==='noneStore'&&!inputMode){
  console.log("사장아님, 가게 생성X", storeInfo)
    return (
      <>
      <Box direction='column' width='1122px' margin='64px 0 0 0' >
            <Box alignItems='' justifyContent='space-between'>
              <Text color='#00000086' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>대표 가게 사진 설정</Text>
              <Tag color='#000000' fontSize='16px' height='36px' width='140px' margin='0 0 8px 0' onClickHandler={()=>setInputMode(true)} clickAble={true} hoverCss={true} title='가게 생성하기'/>
  
            </Box>
            {/* 프로필 박스 영역 */}
            <Box border='2px solid #ff6f0047' bgColor='#ffffffab' rounded='24px' padding='27px 57px'>
              <Box width='100%' justifyContent='center' height='fit-content'>
              <Box direction='column' alignItems='center'>
                <Box width='160px' height='160px' bgColor='#fdc7868b'  ></Box>
                <Text padding='16px 0 0 0' fontSize='24px' fontWeight='bold' color='#ff6f0047' cursor='pointer'>사진 변경</Text>
              </Box>
              </Box>
            </Box>
          </Box>
  
      <Box direction='column' width='1122px' margin='64px 0 0 0'>
            <Text color='#00000086' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>프로필 설정</Text>
            {/* 프로필 박스 영역 */}
            <Box direction='column' border='2px solid #ff6f0047' bgColor='#ffffffab' rounded='24px' padding='0 57px'>
              <Box width='100%' alignItems='center' justifyContent='space-between'>
                <Box  margin='24px 0'>
                  <Text fontSize='17px' fontWeight='bold' color='#00000086'>가게 이름</Text>
                  <Text fontSize='14px' fontWeight='bold' color='#828282' padding='0 64px'>가게 이름을 기재합니다.</Text>
                </Box>
              </Box>
              <Box width='100%' alignItems='center' justifyContent='space-between'>
                <Box  margin='24px 0'>
                  <Text fontSize='17px' fontWeight='bold' color='#00000086'>전화번호</Text>
                  <Text fontSize='14px' fontWeight='bold' color='#828282' padding='0 64px'>010-1234-5678</Text>
                </Box>
              </Box>
            </Box>
          </Box>
  
          <Box direction='column' width='1122px' margin='64px 0 0 0'>
            <Box alignItems='' justifyContent='space-between'>
              <Text color='#00000086' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>가게 상세 설명</Text>
            </Box>
            {/* 프로필 박스 영역 */}
            <Box direction='column' border='2px solid #ff6f0047' bgColor='#ffffffab' rounded='24px' padding='0 57px'>
              <Box width='100%' alignItems='center' justifyContent='space-between'>
                <Box  margin='24px 0'>
                  <Text fontSize='17px' fontWeight='bold' color='#00000086'>가게 정보</Text>
                  <Text fontSize='14px' fontWeight='bold' color='#828282' padding='0 64px'>가게 정보를 기재합니다 예)수제 레터링 케이크</Text>
                </Box>
              </Box>
              <Box width='100%' alignItems='center' justifyContent='space-between'>
                <Box  margin='24px 0'>
                  <Text fontSize='17px' fontWeight='bold' color='#00000086'>가게 위치</Text>
                  <Text fontSize='14px' fontWeight='bold' color='#828282' padding='0 64px'>가게 위치를 기재합니다</Text>
                </Box>
              </Box>
  
              <Box width='100%' alignItems='center' justifyContent='space-between'>
                <Box  margin='24px 0'>
                  <Text fontSize='17px' fontWeight='bold' color='#00000086'>가게 설명</Text>
                  <Text fontSize='14px' fontWeight='bold' color='#828282' padding='0 64px'>가게의 상세한 설명을 자유롭게 기재합니다</Text>
                </Box>
              </Box>
            </Box>
          </Box>
  
          
      </>
    )
    }else{
      console.log("가게 생성중", storeInfo)
      return (
        <>
        <Box direction='column' width='1122px' margin='64px 0 0 0' >
              <Box alignItems='' justifyContent='space-between'>
                <Text color='#000000' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>대표 가게 사진 설정</Text>
                <Box>
                  <Tag color='#000000' onClickHandler={handleCancle} clickAble={true} hoverCss={true} fontSize='16px' height='36px' width='140px' margin='0 16px 8px 0' title='가게 생성 취소'/>
                  <Tag color='#000000' onClickHandler={handleSubmitCreate} clickAble={true} hoverCss={true} fontSize='16px' height='36px' width='140px' margin='0 0 8px 0' title='가게 생성 완료'/>
                </Box>
              </Box>
              {/* 프로필 박스 영역 */}
              <Box border='2px solid #FF6F00' bgColor='#ffffffab' rounded='24px' padding='27px 57px'>
                <Box width='100%' justifyContent='center' height='fit-content'>
                <Box direction='column' alignItems='center'>
                  <ImgBox width='160px' height='160px' bgColor='#FDC886' imgUrl={modiStoreValue.url !== null ? modiStoreValue.url: ''} />
                  <BtnText
                      htmlFor="file"
                      padding='16px 0 0 0'
                      fontSize='24px'
                      fontWeight='bold'
                      color='#FF6F00'
                      cursor='pointer'
                      >사진 변경</BtnText>
                  <FileInput
                      type="file"
                      id="file"
                      accept="image/*"
                      onChange={handleImageChange}/>
                </Box>
                </Box>
              </Box>
            </Box>
    
        <Box direction='column' width='1122px' margin='64px 0 0 0'>
              <Text color='#000000' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>프로필 설정</Text>
              {/* 프로필 박스 영역 */}
              <Box direction='column' border='2px solid #FF6F00' bgColor='#ffffffab' rounded='24px' padding='0 57px'>
                <Box width='100%' alignItems='center' justifyContent='space-between'>
                  <Box  margin='24px 0'>
                    <Text fontSize='17px' fontWeight='bold' color='#000000'>가게 이름</Text>
                    <TextInput fontSize='14px' fontWeight='bold' color='#000000' padding='0 64px' type="text" id="name" name="name" value={modiStoreValue.name} onChange={handleInputChange} placeholder={`가게 이름을 기재합니다.`}/>
                  </Box>
                </Box>
                <Box width='100%' alignItems='center' justifyContent='space-between'>
                  <Box  margin='24px 0'>
                    <Text fontSize='17px' fontWeight='bold' color='#000000'>전화번호</Text>
                    <TextInput fontSize='14px' fontWeight='bold' color='#000000' padding='0 64px' type="text" id="phoneNumber" name="phoneNumber" value={modiStoreValue.phoneNumber} onChange={handleInputChange} placeholder={`010-1234-5678`}/>
                  </Box>
                </Box>
              </Box>
            </Box>
    
            <Box direction='column' width='1122px' margin='64px 0 0 0'>
              <Box alignItems='' justifyContent='space-between'>
                <Text color='#000000' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>가게 상세 설명</Text>
              </Box>
              {/* 프로필 박스 영역 */}
              <Box direction='column' border='2px solid #FF6F00' bgColor='#ffffffab' rounded='24px' padding='0 57px'>
                <Box width='100%' alignItems='center' justifyContent='space-between'>
                  <Box  margin='24px 0'>
                    <Text fontSize='17px' fontWeight='bold' color='#000000'>가게 정보</Text>
                    <TextInput fontSize='14px' fontWeight='bold' color='#000000' padding='0 64px' type="text" id="info" name="info" value={modiStoreValue.info} onChange={handleInputChange} placeholder={`가게 정보를 기재합니다 예)수제 레터링 케이크`}/>
  
                  </Box>
                </Box>
                <Box width='100%' alignItems='center' justifyContent='space-between'>
                  <Box  margin='24px 0'>
                    <Text fontSize='17px' fontWeight='bold' color='#000000'>가게 위치</Text>
                    <TextInput fontSize='14px' fontWeight='bold' color='#000000' padding='0 64px' type="text" id="address" name="address" value={modiStoreValue.address} onChange={handleInputChange} placeholder={`가게 위치를 기재합니다`}/>
                  </Box>
                </Box>
    
                <Box width='100%' alignItems='center' justifyContent='space-between'>
                  <Box  margin='24px 0'>
                    <Text fontSize='17px' fontWeight='bold' color='#000000'>가게 설명</Text>
                    <TextInput fontSize='14px' fontWeight='bold' color='#000000' padding='0 64px' type="text" id="content" name="content" value={modiStoreValue.content} onChange={handleInputChange} placeholder={`가게의 상세한 설명을 자유롭게 기재합니다`}/>
                  </Box>
                </Box>
              </Box>
            </Box>
    
            
        </>
      )
    }
}
