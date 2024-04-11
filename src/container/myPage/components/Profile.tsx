import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Box, Text, ProfileForm, TagWrap, TextInput, BtnText, FileInput, ImgBox, InputBox, ContentsWrap, ModiProfileBox } from './MyPage.style'
import Tag from '../../../components/Tag'
import { useLoginUserInfo } from '../../../hooks/useUser';
import ManagerProfile from './ManagerProfile';
import { getCheckNicknamme, putUser } from '../../../apis/controller/profile';
import { modalBg } from '../../../recoil/modalBg/atom';
import { useSetRecoilState } from "recoil";

export interface FormDataI {
  nickname: string;
  userRole: string;
  file: File[];
  fileName: string;
  fileUrl: string;
  url: string;
}


function Profile() {
  const [modifying, setModifying] = useState<Boolean>(false);
  const { data: userInfo } = useLoginUserInfo();
  const [formData, setFormData] = useState<FormDataI>({
    nickname: '',
    userRole: userInfo && userInfo.userRole ? userInfo.userRole:'',
    file: [],
    fileName: userInfo && userInfo.fileName ? userInfo.fileName:'',
    fileUrl: userInfo && userInfo.fileUrl ? userInfo.fileUrl:'',
    url: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      setFormData({
        ...formData,
        file: [selectedFile],
        fileName: selectedFile.name,
        url: fileUrl
      });
    }
  };

  const handleCancle = () => {
    setFormData({
      nickname: '',
      userRole: 'USER',
      file: [],
      fileName: '',
      fileUrl: userInfo.fileUrl ? userInfo.fileUrl:'',
      url: userInfo.fileUrl ? userInfo.fileUrl:'',
    })
    setModifying(false)
  }

  const convertURLtoFile = async (url: string) => {
  const response = await fetch(url);
  const data = await response.blob();
  const ext = url.split(".").pop(); // url 구조에 맞게 수정할 것
  const filename = url.split("/").pop(); // url 구조에 맞게 수정할 것
  const metadata = { type: `image/${ext}` };
  return new File([data], filename!, metadata);
};

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if(formData.nickname !== '' && userInfo.nickname !== formData.nickname ){
        let nicknameCheck = await getCheckNicknamme(formData.nickname);
        if(nicknameCheck){
          alert('중복된 닉네임입니다!')
          return;
        }
      }
    } catch (error) {
      
    }

    try {
      let sendFormData = new FormData();
      let fileData = formData.file[0] ? formData.file[0]: await convertURLtoFile(userInfo.fileUrl);

      sendFormData.append('nickname', formData.nickname ? formData.nickname : userInfo.nickname);
      sendFormData.append('userRole', userInfo.userRole);
      sendFormData.append('file', formData.file[0]);
      sendFormData.append('fileName', userInfo.fileName);
      sendFormData.append('fileUrl', userInfo.fileUrl);

      const response = await putUser(sendFormData)

      console.log("response", response)

      if (response) {
        alert('내 정보 업데이트')
        window.location.href = '/myPage'
      } else {
        console.error('Server Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  
  if(userInfo){
    console.log("profile ", userInfo)
  console.log("profile 2222", userInfo.fileUrl, userInfo.fileUrl === null)
    return (
      <ContentsWrap width='100%' height='100%' direction='column' justifyContent='flex-start' alignItems='center' padding='64px'>
        <InputBox direction='column' width='1122px' padding='0 0 0 '>
          <Text color='#000000' fontSize='20px' fontWeight='bold' margin='0 0 8px 8px'>마이 프로필</Text>
          {
          modifying ? (
          <ProfileForm onSubmit={handleSubmit} width='1122px' padding='0'>
             {/* 프로필 박스 영역 */}
             <Box border='2px solid #FF6F00' width='100%' bgColor='#ffffffab' rounded='24px' padding='27px 43px'>
                {/* 사진영역 */}
                <Box direction='column' alignItems='center'>
                  <ImgBox width='108px' height='108px' imgUrl={formData.url} />
                  
                  <BtnText
                    htmlFor="file"
                    padding='16px 0 0 0'
                    fontSize='12px'
                    fontWeight='bold'
                    color='#FF6F00'
                    cursor='default'
                    >사진 변경</BtnText>
                  <FileInput
                    type="file"
                    id="file"
                    accept="image/*"
                    onChange={handleImageChange}/>
                </Box>
                {/* 정보영역 */}
                <Box justifyContent='space-between' height='fit-content' width='100%' alignItems='flex-start'>
                  <ModiProfileBox  margin='0 0 0 46px' direction='column' width='738px' justifyContent='space-btween'>
                    <TextInput 
                      padding='16px 0 0 0'
                      fontSize='28px'
                      fontWeight='bold'
                      type="text"
                      id="nickname"
                      name="nickname"
                      value={formData.nickname}
                      onChange={handleInputChange}
                      maxLength={30}
                      placeholder={`${userInfo.nickname}`}/>
                  </ModiProfileBox>
                  <Box direction='column' alignItems='center' height='100%' width='90px'>
                    {modifying && <TagWrap width='63px' height='27px' title='완료' type='submit'  fontSize='13px'>완료</TagWrap>}
                    {modifying && <Tag margin='8px 0' width='63px' height='27px' title='취소' onClickHandler={handleCancle} clickAble={true} hoverCss={true} fontSize='13px' />}
                  </Box>
                </Box>
              </Box>
          </ProfileForm>
          ):(
            <>
                {/* 프로필 박스 영역 */}
              <Box border='2px solid #FF6F00' bgColor='#ffffffab' rounded='24px' padding='27px 36px'>
                {/* 사진영역 */}
                <Box direction='column' alignItems='center'>
                <ImgBox width='108px' height='108px' imgUrl={userInfo.fileUrl} />
                  {modifying&&<Text padding='16px 0 0 0' fontSize='12px' fontWeight='bold' color='#FF6F00' cursor='pointer'>사진 변경</Text>}
                </Box>
                {/* 정보영역 */}
                <Box justifyContent='space-between' height='fit-content' width='100%' alignItems='flex-start'>
                  <ModiProfileBox  margin='0 0 0 36px' direction='column' width='738px' justifyContent='space-btween'>
                    <Text padding='16px 0 0 0' fontSize='28px' fontWeight='bold' color='#000000' cursor='pointer'>{userInfo.nickname}</Text>
                    <Box>
                      <Text padding='16px 0 0 0' fontSize='17px' fontWeight='bold' color='#000000' cursor='pointer'>현재 </Text>
                      <Text padding='16px 8px 0 8px' fontSize='17px' fontWeight='bold' color='#FF6F00' cursor='pointer'>{userInfo.userRole === 'MANAGER' ? "사장님" : "고객 "}</Text>
                      <Text padding='16px 0 0 0' fontSize='17px' fontWeight='bold' color='#000000' cursor='pointer'>계정을 이용 중입니다.</Text>
                    </Box>
                  </ModiProfileBox>
                  <Box direction='column' alignItems='center' height='100%' width='68px'>
                    <Tag width='63px' height='27px' title='수정' onClickHandler={()=>setModifying(true)} clickAble={true} hoverCss={true} fontSize='13px' />
                  </Box>
                </Box>
              </Box>
          </>
          )
          }
          
        </InputBox>

        {userInfo.userRole === 'MANAGER' && <ManagerProfile/>}
      </ContentsWrap>
    )
  }
  else{
    return null;
  }
}

export default Profile