import React from 'react'
import { Box, Text } from './MyPage.style'
import Tag from '../../../components/Tag'

export default function ManagerProfile() {
  return (
    <>
    <Box direction='column' width='1122px' margin='64px 0 0 0' >
          <Box alignItems='' justifyContent='space-between'>
            <Text color='#000000' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>대표 가게 사진 설정</Text>
            <Box color='#000000' fontSize='20px' fontWeight='bold' bgColor='#bbbbbb89' border='1px solid black' rounded='8px' padding='8px' margin='0 0 8px 0'>가게 생성하기</Box>

          </Box>
          {/* 프로필 박스 영역 */}
          <Box border='2px solid #FF6F00' bgColor='#ffffffab' rounded='24px' padding='27px 57px'>
            <Box width='100%' justifyContent='center' height='fit-content'>
            <Box direction='column' alignItems='center'>
              <Box width='160px' height='160px' bgColor='#FDC886'  ></Box>
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
                <Text fontSize='14px' fontWeight='bold' color='#828282' padding='0 64px'>가게 이름을 기재합니다.</Text>
              </Box>
            </Box>
            <Box width='100%' alignItems='center' justifyContent='space-between'>
              <Box  margin='24px 0'>
                <Text fontSize='17px' fontWeight='bold' color='#000000'>전화번호</Text>
                <Text fontSize='14px' fontWeight='bold' color='#828282' padding='0 64px'>010-1234-5678</Text>
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
                <Text fontSize='14px' fontWeight='bold' color='#828282' padding='0 64px'>가게 정보를 기재합니다 예)수제 레터링 케이크</Text>
              </Box>
            </Box>
            <Box width='100%' alignItems='center' justifyContent='space-between'>
              <Box  margin='24px 0'>
                <Text fontSize='17px' fontWeight='bold' color='#000000'>가게 위치</Text>
                <Text fontSize='14px' fontWeight='bold' color='#828282' padding='0 64px'>가게 위치를 기재합니다</Text>
              </Box>
            </Box>

            <Box width='100%' alignItems='center' justifyContent='space-between'>
              <Box  margin='24px 0'>
                <Text fontSize='17px' fontWeight='bold' color='#000000'>가게 설명</Text>
                <Text fontSize='14px' fontWeight='bold' color='#828282' padding='0 64px'>가게의 상세한 설명을 자유롭게 기재합니다</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        
    </>
  )
}
