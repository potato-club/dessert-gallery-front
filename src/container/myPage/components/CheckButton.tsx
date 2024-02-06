import React from "react";
import styled from "styled-components";

interface CheckButtonType {
  width: number;
  height: number;
  type: "radio" | "checkbox";
  name?: string;
  id: any;
  value?: string | number;
  defaultchecked: boolean;
  eventFn: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckButton = ({
  width,
  height,
  type,
  name,
  id,
  value,
  defaultchecked,
  eventFn,
}: CheckButtonType) => {
  return (
    <>
      <CustomButton
        type={type}
        name={name}
        id={id}
        value={value}
        defaultChecked={defaultchecked || false}
        onChange={eventFn}
      />
      <Label htmlFor={id} width={width} height={height} />
    </>
  );
};

export default CheckButton;

const CustomButton = styled.input`
  display: none;
  &:checked + label {
    background-color: #ff6f00;
    background-size: 100% 100%;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17" fill="none"><path d="M1.52734 7.70605L7.87524 15.0381L19.4983 1.00098" stroke="%23FFFDF9" stroke-width="2" stroke-linecap="round"/></svg>');
  }
`;
const Label = styled.label<{ width: number; height: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border: 2px solid #ff6f00;
  cursor: pointer;
  border-radius: 7px;
  background-color: white;
`;
