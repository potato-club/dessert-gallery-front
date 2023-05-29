import React from "react";
import styled from "styled-components";
import { RoundButtonValue } from "../types/componentsProps";

const RoundButton = ({
  text,
  width,
  bold,
  onClickRoundButton,
}: RoundButtonValue) => {
  return (
    <StyledRoundButton width={width} bold={bold} onClick={onClickRoundButton}>
      {text}
    </StyledRoundButton>
  );
};

export default RoundButton;

const StyledRoundButton = styled.button<{ width: number; bold?: boolean }>`
  width: ${(props) => props.width + "px"};
  height: 60px;
  font-size: 18px;
  font-weight: ${(props) => (props.bold === true ? "bold" : "")};
  background-color: #fdc886;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;
