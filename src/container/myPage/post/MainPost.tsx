import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useGetStoreInfo from "../../../hooks/useGetStoreInfo";
import Image from "next/image";
import PostForm from "./components/PostForm";
import { useEscKey } from "../../../hooks/useEscKey";
import defaultImage from "../../../../public/image/defaultPhoto.png";
import Post from "./components/Post";
import Router from "next/router";
import ReviewList from "../../../components/ReviewList";

interface CustomComponentProps {
  isSelected: boolean;
}

const MainPost = () => {
  const storeInfo = useGetStoreInfo();
  const [modalState, setModalState] = useState(false);
  const [detailState, setDetailState] = useState(false);
  const [selectState, setSelectState] = useState(1);

  useEscKey(() => closeThing());

  const closeThing = () => {
    setModalState(false);
  };

  const reviewClick = () => {
    Router.push({
      query: { store: storeInfo?.id },
    });
    setSelectState(2);
  };

  return (
    <Wrapper>
      <Header>
        <HeaderWrapper>
          <ProfileBox>
            <ProfileImg>
              <Image
                src={
                  storeInfo?.storeImage?.fileUrl
                    ? storeInfo?.storeImage?.fileUrl
                    : defaultImage
                }
                alt={storeInfo?.storeImage.fileName}
                width={138}
                height={138}
              />
            </ProfileImg>
            <ProfileInfoArea>
              <ProfileLine>
                <ProfileName> {storeInfo?.name}</ProfileName>
                <ProfileInfo>{storeInfo?.info}</ProfileInfo>
              </ProfileLine>
              <InfoDiv>{storeInfo?.content}</InfoDiv>
              <InfoDiv>{storeInfo?.address}</InfoDiv>
              <InfoDiv>{storeInfo?.phoneNumber}</InfoDiv>
              <PostNumberLine>
                <PostNumber>게시글</PostNumber>
                <NumberDiv>{storeInfo?.postCount}</NumberDiv>
                <PostNumber>후기글</PostNumber>
                <NumberDiv>{storeInfo?.reviewCount}</NumberDiv>
              </PostNumberLine>
            </ProfileInfoArea>
            <PostBtn onClick={() => setModalState(true)}>게시글 작성</PostBtn>
          </ProfileBox>
          <PostTypeBox>
            <TypePost
              isSelected={selectState === 1}
              onClick={() => setSelectState(1)}
            >
              가게 게시물
            </TypePost>
            <TypeReview
              isSelected={selectState === 2}
              onClick={() => reviewClick()}
            >
              가게 후기글
            </TypeReview>
          </PostTypeBox>
        </HeaderWrapper>
      </Header>
      <Body>{selectState === 1 ? <Post /> : <ReviewList />}</Body>
      {modalState && <PostForm handleDone={() => setModalState(false)} />}
    </Wrapper>
  );
};

export default MainPost;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Header = styled.div`
  height: 261px;
  background-color: #fffdf9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 20px 20px;
  box-shadow: 4px;
`;

const HeaderWrapper = styled.div`
  width: 80%;
  height: 260px;
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
  margin-left: 50px;
  width: 138px;
  height: 138px;
  background-color: white;
  border-radius: 100%;
  overflow: hidden;
`;
const ProfileInfoArea = styled.div`
  width: 60%;
  height: 138px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PostBtn = styled.button`
  width: 114px;
  height: 25px;
`;

const PostTypeBox = styled.div`
  width: 100%;
  height: 20%;
  border-top: 1px solid #dedede;
  display: flex;
  justify-content: space-around;
`;

const TypePost = styled.div<CustomComponentProps>`
  width: 250px;
  height: 100%;
  border-top: ${(props) => (props.isSelected ? "2px solid black" : "")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: ${(props) => (props.isSelected ? "700" : "500")};
  color: ${(props) => (props.isSelected ? "black" : "gray")};
  font-family: Noto Sans CJK KR;
  cursor: pointer;
`;

const TypeReview = styled.div<CustomComponentProps>`
  width: 250px;
  height: 100%;
  border-top: ${(props) => (props.isSelected ? "2px solid black" : "")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: ${(props) => (props.isSelected ? "700" : "400")};
  color: ${(props) => (props.isSelected ? "black" : "gray")};
  font-family: Noto Sans CJK KR;
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileLine = styled.div`
  display: flex;
  gap: 30px;
`;

const ProfileName = styled.div`
  font-size: 18px;
  font-weight: 700;
  font-family: Noto Sans CJK KR;
`;
const ProfileInfo = styled.div`
  font-size: 15px;
  font-weight: 500;
  font-family: Noto Sans CJK KR;
  color: #828282;
`;
const PostNumberLine = styled.div`
  display: flex;
  gap: 30px;
`;

const PostNumber = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 14px;
  font-weight: 700;
`;
const NumberDiv = styled.div`
  color: #828282;
  font-family: Noto Sans CJK KR;
  font-size: 14px;
  font-weight: 500;
`;
const InfoDiv = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 15px;
`;
