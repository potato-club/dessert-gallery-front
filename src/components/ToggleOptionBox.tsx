import React from "react";
import styled from "styled-components";
import { ArrowUp } from "../../public/svg";

interface BoxItemType {
  title: string;
  onClickHandler: () => void;
}

const ToggleOptionBox = ({ ...props }) => {
  return (
    <Container>
      <ArrowUp fill="#ffffff" />
      <FunctionBox>
        {props.contents.map((item: BoxItemType, idx: number) => {
          return (
            <Func onClick={() => item.onClickHandler()} key={idx}>
              {item.title}
            </Func>
          );
        })}
      </FunctionBox>
    </Container>
  );
};

export default ToggleOptionBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.16));
  svg {
    position: relative;
    left: 130px;
    top: 2px;
  }
`;
const FunctionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 212px;
  border-radius: 10px;
`;

const Func = styled.button`
  width: 212px;
  font-size: 15px;
  padding: 23px 0px;
  color: #828282;
  font-weight: 500;
  line-height: normal;
  background-color: transparent;
  border: transparent;
  &:hover {
    color: #000;
    font-weight: 700;
  }
`;
