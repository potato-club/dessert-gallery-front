import React from "react";
import styled from "styled-components";
import { RectangleButtonValue } from "../types/componentsProps";

const RectangleButton = ({
  text,
  buttonType,
  onClickRectangleButton,
}: RectangleButtonValue) => {
  return (
    <StyledRectangleButton
      buttonType={buttonType}
      onClick={onClickRectangleButton}
    >
      <TextDiv buttonType={buttonType}>{text}</TextDiv>
      {buttonType === "type3" && (
        <TriangleSvg width="21" height="14">
          <polygon points="0 0, 10.5 14, 21 0" fill="black" />
        </TriangleSvg>
      )}
    </StyledRectangleButton>
  );
};

export default RectangleButton;

const StyledRectangleButton = styled.button<{
  buttonType: "type1" | "type2" | "type3";
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fdc886;
  border: none;
  width: ${(props) => {
    switch (props.buttonType) {
      case "type1":
        return "213px";
      case "type2":
        return "216px";
      case "type3":
        return "149px";
    }
  }};

  height: ${(props) => {
    switch (props.buttonType) {
      case "type1":
        return "58px";
      case "type2":
        return "73px";
      case "type3":
        return "45px";
    }
  }};
  font-size: ${(props) => {
    switch (props.buttonType) {
      case "type1":
        return "24px";
      case "type2":
        return "30px";
      case "type3":
        return "25px";
    }
  }};
  font-weight: bold;
  color: ${(props) => (props.buttonType === "type1" ? "#fffdf9" : "#000000")};
`;

const TextDiv = styled.div<{ buttonType: "type1" | "type2" | "type3" }>`
  /* width: ${(props) => (props.buttonType !== "type3" ? "100%" : "88px")}; */
  /* 
    현재 웹페이지에 기본적으로 적용되는 css 때문에 살짝 깨지는 현상 발생
    reset css를 이용하는게 좋을 듯함
  */
  width: ${(props) => (props.buttonType !== "type3" ? "100%" : "80px")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TriangleSvg = styled.svg`
  margin: 0 20px;
`;
