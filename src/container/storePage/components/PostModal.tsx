import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { modalBg } from "../../../recoil/modalBg/atom";
import ModalWrapper from "../../../components/ModalWrapper";
import { MenuIcon } from "../../../../public/svg";

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
            <StoreInfo>
              <StoreProfile></StoreProfile>
              <div>
                <StoreName>늘봄 케이크</StoreName>
                <SubCategory>레터링 케이크 주문 제작</SubCategory>
              </div>
            </StoreInfo>
            <MenuIcon width="5px" height="13px" />
          </InfoHeader>
          <Content></Content>
          <ReservedBtn></ReservedBtn>
        </PostInfo>
      </Container>
    </ModalWrapper>
  );
};

export default PostModal;

const Container = styled.div`
  display: flex;
  background-color: #fffdf9;
  width: 1100px;
  height: 692px;
`;
const ImgDiv = styled.div`
  width: 692px;
  background-color: black;
`;
const PostInfo = styled.div`
  display: flex;
  width: 408px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 29px;
  width: 100%;
  border-bottom: 2px solid #fdc886;
  svg {
    cursor: pointer;
  }
`;
const StoreInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
`;
const Content = styled.div`
  width: 100%;
  height: 522px;
`;
const ReservedBtn = styled.div`
  width: 100%;
  height: 64px;
`;
const StoreProfile = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 100%;
  background-color: black;
`;
const StoreName = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`;
const SubCategory = styled.div`
  color: #828282;
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
`;
