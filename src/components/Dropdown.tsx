import React from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import { loginPageApi } from "../apis/controller/loginPage";
import { useRouter } from "next/router";

const Dropdown = ({ dropdownState }: { dropdownState: boolean }) => {
  const router = useRouter();
  return (
    <DropdownWrapper dropdownState={dropdownState}>
      <DropdownMenu
        onClickMenu={() => {
          router.push("/myPage");
        }}
      >
        마이페이지
      </DropdownMenu>
      <DropdownMenu
        onClickMenu={async () => {
          //   const response = await loginPageApi.getLogout();
          //   console.log(response);
        }}
      >
        로그아웃
      </DropdownMenu>
    </DropdownWrapper>
  );
};

export default Dropdown;

const DropdownWrapper = styled.div<{ dropdownState: boolean }>`
  display: ${(props) => (props.dropdownState === true ? "block" : "none")};
  width: 212px;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 1px 3px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  left: 50%;
  transform: translate(-50%, 0);
  font-family: noto-sans-cjk-kr, sans-serif;
`;
