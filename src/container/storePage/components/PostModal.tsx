import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { modalBg } from "../../../recoil/modalBg/atom";

const PostModal = () => {
  const modalBgState = useSetRecoilState(modalBg);

  const modalClose = () => {
    modalBgState(false);
  };
  return (
    <ModalWrapper>
      <Container>
        <ImgDiv onClick={modalClose}></ImgDiv>
        <PostInfo>
          <InfoHeader>
            <StoreProfile></StoreProfile>
            <StoreName></StoreName>
            <SubCategory></SubCategory>
          </InfoHeader>
          <Content></Content>
          <ReservedBtn></ReservedBtn>
        </PostInfo>
      </Container>
    </ModalWrapper>
  );
};

export default PostModal;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
const Container = styled.div`
  display: flex;
  background-color: white;
  width: 1100px;
  height: 692px;
`;
const ImgDiv = styled.div`
  width: 692px;
  background-color: black;
`;
const PostInfo = styled.div``;
const InfoHeader = styled.div``;
const Content = styled.div``;
const ReservedBtn = styled.div``;
const StoreProfile = styled.div``;
const StoreName = styled.div``;
const SubCategory = styled.div``;
