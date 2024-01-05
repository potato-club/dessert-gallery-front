import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getStoreInfo } from "../../../apis/controller/postPage";
import useGetStoreInfo from "../../../hooks/useGetStoreInfo";
import Image from "next/image";

const MainPost = () => {
  const storeInfo = useGetStoreInfo();
  console.log(storeInfo?.storeImage);

  return (
    <Wrapper>
      <Header>
        <HeaderWrapper>
          <ProfileBox>
            <ProfileImg>
              <Image
                src={storeInfo?.storeImage.fileUrl}
                alt={storeInfo?.storeImage.fileName}
                width={138}
                height={138}
              />
            </ProfileImg>
            <ProfileInfo>
              {storeInfo?.info} / {storeInfo?.content}/{storeInfo?.name}/
            </ProfileInfo>
            <PostBtn />
          </ProfileBox>
        </HeaderWrapper>
      </Header>
      <Body>
        <BodyWrapper></BodyWrapper>
      </Body>
    </Wrapper>
  );
};

export default MainPost;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 30%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 20px 20px;
`;

const HeaderWrapper = styled.div`
  width: 80%;
  height: 100%;
  background-color: red;
`;

const ProfileBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px;
`;
const ProfileImg = styled.div`
  margin-left: 100px;
  width: 138px;
  height: 138px;
  background-color: white;
`;
const ProfileInfo = styled.div`
  width: 60%;
  height: 138px;
  background-color: gray;
`;

const PostBtn = styled.button`
  width: 114px;
  height: 25px;
`;

const PostType = styled.div`
  width: 100%;
  height: 20%;
`;

const Body = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BodyWrapper = styled.div`
  width: 60%;
  height: 100%;
  background-color: white;
`;
