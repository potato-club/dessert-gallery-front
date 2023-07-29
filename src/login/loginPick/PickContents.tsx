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
      <ResponsiveDiv wrapperWidth={1920}>
        {role === "owner" ? (
          <OwnerImage width={123.8} />
        ) : (
          <UserImage width={123.8} />
        )}
      </ResponsiveDiv>
      <ResponsiveDiv wrapperWidth={1280}>
        {role === "owner" ? (
          <OwnerImage width={82} />
        ) : (
          <UserImage width={82} />
        )}
      </ResponsiveDiv>

      <ContentsTitle>
        {role === "owner" ? "가게 운영자" : "일반 회원님"}
      </ContentsTitle>
      <Explain role={role === "owner" ? "owner" : "user"} />
      <ResponsiveDiv wrapperWidth={1920}>
        <Tag
          title={role === "owner" ? "가게 운영자 로그인" : "일반 회원 로그인"}
          width="342px"
          height="60px"
          inversion={role === "owner" ? true : false}
          clickAble={true}
          onClickHandler={() => {}}
        />
      </ResponsiveDiv>
      <ResponsiveDiv wrapperWidth={1280}>
        <Tag
          title={role === "owner" ? "가게 운영자 로그인" : "일반 회원 로그인"}
          width="228px"
          height="40px"
          inversion={role === "owner" ? true : false}
          fontSize="11px"
          clickAble={true}
          onClickHandler={() => {}}
        />
      </ResponsiveDiv>
    </PickContentsDiv>
  );
}

export default PickContents;

const PickContentsDiv = styled.div`
  @media screen and (min-width: 1920px) {
    width: 342px;
    height: 480px;
  }
  @media screen and (max-width: 1919px) {
    width: 227px;
    height: 320px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResponsiveDiv = styled.div<{ wrapperWidth: 1280 | 1920 }>`
  @media screen and (min-width: 1920px) {
    display: ${(props) => (props.wrapperWidth === 1920 ? "" : "none")};
  }
  @media screen and (max-width: 1919px) {
    display: ${(props) => (props.wrapperWidth === 1280 ? "" : "none")};
  }
`;
