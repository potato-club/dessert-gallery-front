import React, { useState } from "react";
import styled from "styled-components";
import ToggleOptionBox from "../../../../../components/ToggleOptionBox";
import { MenuIcon } from "../../../../../../public/svg";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { modalBg } from "../../../../../recoil/modalBg/atom";

interface StoreInfoType {
  storeInfo: {
    id: number;
    storeImage: any;
    name: string;
    info: string;
    address: string;
  };
}
const index = ({ storeInfo }: StoreInfoType) => {
  const [menuIconClick, setMenuIconClick] = useState<boolean>(false);

  const router = useRouter();
  const modalBgState = useSetRecoilState(modalBg);
  const storePageModalOption = [
    {
      title: "공유하기",
      onClickHandler: () => {
        console.log(`MenuBox click 공유하기`);
      },
    },
    {
      title: "스토어 방문",
      onClickHandler: () => {
        router.push(`/galleryBoard/${storeInfo.id}`);
        modalBgState(false);
      },
    },
  ];
  return (
    <Container>
      <StoreInfo>
        <StoreProfile src={storeInfo.storeImage.fileUrl} />
        <div>
          <StoreName>{storeInfo.name}</StoreName>
          <SubCategory>{storeInfo.info || "default 값"}</SubCategory>
        </div>
      </StoreInfo>
      <div>
        <BoxPosition>
          {menuIconClick && <ToggleOptionBox contents={storePageModalOption} />}
        </BoxPosition>
        <MenuToggleBtn>
          <MenuIcon
            width="5px"
            height="13px"
            onClick={() => {
              setMenuIconClick((prev) => !prev);
            }}
          />
        </MenuToggleBtn>
      </div>
    </Container>
  );
};

export default index;

const Container = styled.div`
  position: sticky;
  top: 0;
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
  width: 100%;
`;
const MenuToggleBtn = styled.button`
  background-color: transparent;
  border: none;
`;
const StoreProfile = styled.img`
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
  color: #ff6f00;
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
`;
const BoxPosition = styled.div`
  position: relative;
  top: 20px;
  left: -140px;
`;
