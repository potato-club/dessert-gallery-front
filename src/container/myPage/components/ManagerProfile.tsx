import React, { useEffect, useState } from 'react'
import { Box, Text, ImgBox } from './MyPage.style'
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



export default function ManagerProfile() {
  const [isManager, setIsManager] = useState<boolean>(false);
  const [storeInfo, setStoreInfo] = useState<any>(null)

  useEffect(()=>{
    const getStoreProfile = async ()=> {
      try {
        const response = await propfileApiList.getStoreProfile()
        setStoreInfo(response)
        console.log("manager!!!!!, ", response)
      } catch (error) {
        
      }
    }
    getStoreProfile()
  },[])
  if(storeInfo !== null &&storeInfo!=='noneStore'){
  console.log("manager profile!!", storeInfo)
  return (
    <>
    <Box direction='column' width='1122px' margin='64px 0 0 0' >
          <Box alignItems='' justifyContent='space-between'>
            <Text color='#000000' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>대표 가게 사진 설정</Text>
            <Tag color='#000000' fontSize='16px' height='36px' width='140px' margin='0 0 8px 0' title='가게 정보 수정'/>

          </Box>
          {/* 프로필 박스 영역 */}
          <Box border='2px solid #FF6F00' bgColor='#ffffffab' rounded='24px' padding='27px 57px'>
            <Box width='100%' justifyContent='center' height='fit-content'>
            <Box direction='column' alignItems='center'>
              <ImgBox width='160px' height='160px' bgColor='#FDC886' imgUrl={storeInfo.res.storeImage.fileUrl} />
              <Text padding='16px 0 0 0' fontSize='24px' fontWeight='bold' color='#FF6F00' cursor='pointer'>사진 변경</Text>
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
  }else{
    return (
      <>
      <Box direction='column' width='1122px' margin='64px 0 0 0' >
            <Box alignItems='' justifyContent='space-between'>
              <Text color='#00000086' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>대표 가게 사진 설정</Text>
              <Tag color='#000000' fontSize='16px' height='36px' width='140px' margin='0 0 8px 0' clickAble={true} hoverCss={true} title='가게 생성하기'/>
  
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
    }
}
