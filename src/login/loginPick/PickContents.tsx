import React from "react";
import styled from "styled-components";
import ContentsTitle from "./ContentsTitle";
import OwnerImage from "../../../public/svg/loginPage/owner.svg";
import UserImage from "../../../public/svg/loginPage/user.svg";
import Explain from "./Explain";
import Tag from "../../components/Tag";

function PickContents({ role }: { role: "owner" | "user" }) {
  return (
    <PickContentsDiv>
      {role === "owner" ? <OwnerImage></OwnerImage> : <UserImage></UserImage>}
      <ContentsTitle>
        {role === "owner" ? "가게 운영자" : "일반 회원님"}
      </ContentsTitle>
      <Explain role={role === "owner" ? "owner" : "user"} />
      <Tag
        title={role === "owner" ? "가게 운영자 로그인" : "일반 회원 로그인"}
        width="342px"
        height="60px"
        inversion={role === "owner" ? true : false}
        clickAble={true}
        onClickHandler={() => {}}
      ></Tag>
    </PickContentsDiv>
  );
}

export default PickContents;

const PickContentsDiv = styled.div`
  width: 342px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
