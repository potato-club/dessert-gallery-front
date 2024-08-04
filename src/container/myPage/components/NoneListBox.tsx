import React from 'react';
import styled from 'styled-components';

const NoneListBox = ({ ...props }) => {
  return (
    <Container>
      <InnerBox>{props.content}</InnerBox>
    </Container>
  );
};

export default NoneListBox;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 100px;
  font-weight: 600;
  font-size: 23px;
`;
