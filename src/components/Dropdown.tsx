import React, { useState } from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import { useRouter } from "next/router";
import { useTokenService } from "../hooks/useTokenService";
import LoginModal from "../container/loginPage/components/LoginModal";
import sessionStorageService from "../libs/sessionStorageService";
import { SESSION_KEY } from "../constants/session";
import axios from "axios";

const Dropdown = ({ dropdownState }: { dropdownState: boolean }) => {
  const { getAccessToken, getRefreshToken, setToken } = useTokenService();

  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const fetchLogout = async () => {
    const accessToekn = getAccessToken();
    const refreshToken = getRefreshToken();

    const response = await axios.get(
      "https://api.dessert-gallery.site/users/logout",
      {
        headers: {
          Authorization: accessToekn,
          RefreshToken: refreshToken,
        },
      }
    );
    console.log(response);
    return response;
  };

  return (
    <DropdownWrapper dropdownState={dropdownState}>
      <LoginModal
        isOpen={isModalOpen}
        onClickClose={() => setIsModalOpen(false)}
        onClickConfirm={() => {
          router.reload();
        }}
      >
        {modalMessage}
      </LoginModal>
      <DropdownMenu
        onClickMenu={() => {
          router.push("/myPage");
        }}
      >
        마이페이지
      </DropdownMenu>
      <DropdownMenu
        onClickMenu={() => {
          const response = fetchLogout();
          console.log(response);
          setToken("", "");
          sessionStorageService.delete(SESSION_KEY);
          setModalMessage("로그아웃 되었습니다.");
          setIsModalOpen(true);
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
