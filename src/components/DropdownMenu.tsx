import React from "react";

import styled from "styled-components";

const DropdownMenu = ({
  children,
  onClickMenu,
}: {
  children: string;
  onClickMenu: () => void;
}) => {
  return (
    <DropdownMenuComponent>
      <MenuTextA onClick={onClickMenu}>{children}</MenuTextA>
    </DropdownMenuComponent>
  );
};

export default DropdownMenu;

const DropdownMenuComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 13px 0;
  width: 100%;
  height: 22px;
`;

const MenuTextA = styled.a`
  font-size: 15px;
  color: #828282;
  :hover {
    color: #000000;
    font-weight: bold;
  }
`;
