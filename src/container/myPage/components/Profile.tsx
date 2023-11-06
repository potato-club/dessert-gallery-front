import React from 'react'
import { Box, Text } from './MyPage.style'

function Profile() {
  return (
    <Box width='100%' height='100%' direction='column' justifyContent='flex-start' alignItems='center' padding='64px'>
      <Box direction='column' >
        <Text color='#000000' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>마이 프로필</Text>
        {/* 프로필 박스 영역 */}
        <Box border='2px solid #FF6F00' bgColor='#ffffffab' rounded='24px' padding='56px 32px'>
          {/* 사진영역 */}
          <Box direction='column' alignItems='center'>
            <Box width='200px' height='200px' bgColor='#FDC886'  ></Box>
            <Text padding='16px 0 0 0' fontSize='26px' fontWeight='bold' color='#FF6F00' cursor='pointer'>사진 변경</Text>
          </Box>
          {/* 정보영역 */}
        </Box>
      </Box>
    </Box>
  )
}

export default Profile