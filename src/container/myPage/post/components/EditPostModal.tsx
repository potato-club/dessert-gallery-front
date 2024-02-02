import React from "react";
import styled from "styled-components";

const EditPostModal = () => {
  return (
    <Background>
      <Wrapper>
        <ImageBox>asd</ImageBox>
      </Wrapper>
    </Background>
  );
};

export default EditPostModal;

const Wrapper = styled.div`
  width: 900px;
  height: 526px;
  background-color: aliceblue;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;
const ImageBox = styled.div`
  width: 527px;
  height: 100%;
  background-color: red;
`;
