import React from "react";
import styled from "styled-components";

const ModalWrapper = ({ children }: React.PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ModalWrapper;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
