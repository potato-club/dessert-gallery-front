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
  detailPoster: {
    content: string;
    images: any;
    tags: string[];
    title: string;
    viewCount: number;
    commentCount: number;
  };
  boardId: number;
}
const ModalHeader = ({ storeInfo, detailPoster, boardId }: StoreInfoType) => {
  const [menuIconClick, setMenuIconClick] = useState<boolean>(false);

  const router = useRouter();
  const modalBgState = useSetRecoilState(modalBg);

  const kakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(process.env.NEXT_PUBLIC_SHARE_KEY);
      }

      const templateArgs = detailPoster.images.reduce(
        (acc: any, img: any, idx: any) => {
          if (idx >= 3) {
            acc.EXTRA_NUM =
              detailPoster.images.length - 3 > 4
                ? 3
                : detailPoster.images.length - 3;
          } else {
            acc[`BOARD_URL${idx + 1}`] = img.fileUrl;
          }
          return acc;
        },
        {
          REGI_WEB_DOMAIN: `http://localhost:3000`,
          REDIRECT_PATH: `galleryBoard/${storeInfo.id}?boardId=${boardId}`,
          PROFILE_IMG: storeInfo.storeImage.fileUrl,
          BOARD_HASHTAG: detailPoster.tags.join(" "),
          BOARD_TITLE: detailPoster.title,
          STORE_NAME: storeInfo.name,
          COMMENT_COUNT: detailPoster.commentCount,
          VIEW_COUNT: detailPoster.viewCount,
        }
      );

      console.log(templateArgs);
      kakao.Share.sendCustom({
        templateId: 104258,
        templateArgs: templateArgs,
      });
    }
  };
  const storePageModalOption = [
    {
      title: "카카오 공유하기",
      onClickHandler: () => {
        kakaoButton();
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
      {storeInfo && (
        <StoreInfo>
          <StoreProfile src={storeInfo.storeImage.fileUrl} />
          <div>
            <StoreName>{storeInfo.name}</StoreName>
            <SubCategory>{storeInfo.info || "default 값"}</SubCategory>
          </div>
        </StoreInfo>
      )}

      <div>
        <BoxPosition>
          {menuIconClick && <ToggleOptionBox contents={storePageModalOption} />}
        </BoxPosition>
        <MenuToggleBtn
          onClick={() => {
            setMenuIconClick((prev) => !prev);
          }}
        >
          <MenuIcon width="5px" height="13px" />
        </MenuToggleBtn>
      </div>
    </Container>
  );
};

export default ModalHeader;

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 29px;
  width: 100%;
  border-bottom: 2px solid #fdc886;
`;
const StoreInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
  width: 100%;
`;
const MenuToggleBtn = styled.button`
  background-color: transparent;
  padding: 0px;
  width: 17px;
  border: none;
  cursor: pointer;
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
