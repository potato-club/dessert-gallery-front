import React from 'react'
import styled from 'styled-components';
import LocationSelector from './LocationSelector';

interface props {
  onChangeLocation: (lat: string, lng: string) => void
  onClickMoveMap: ()=>void
}
export default function LocationModal({onChangeLocation, onClickMoveMap}:props) {
  return (
    <ModalContainer>
        <ModalContent>
          <ModalHeader>
            <Text>지역 이동</Text>
            <OutBtn onClick={onClickMoveMap}>X</OutBtn>
          </ModalHeader>
          <LocationSelector onChangeLocation={onChangeLocation}/>
        </ModalContent>
      </ModalContainer>
  )
}

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  background: white;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 32;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

`;

const ModalHeader = styled.div`
  width: 1000px;
  height: 48px;
  background-color: #FF6F00;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.div`
  font-size: 28px;
  color: white;
  font-family: noto-sans-cjk-kr;
  font-weight: bold;
  margin: 0 16px;
`

const OutBtn = styled.div`
  font-size: 28px;
  color: white;
  font-weight: bold;
  margin: 0 24px;
  cursor: pointer;
`

