import styled, {keyframes} from "styled-components";

// 애니메이션 키프레임 정의
const slideInAnimation = keyframes`
  0% {
    transform: translateY(-10%);
  }
  50% {
    transform: translateY(-5%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const LocationSelectorWrap = styled.div`
    width: 1100px;
    height: 180px;
    background-color: #FFFDF9;
    border-right: 3px solid #FF6F00;
    border-left: 3px solid #FF6F00;
    border-bottom: 2px solid #ff6f0099;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 0;
`;

export const MenuWrap = styled.div`
    width: 1040px;
    height: 90px;
    border-bottom: 1px solid #ff6f0047;
    display: flex;
    justify-content: flex;
    align-items: center;
    animation: ${slideInAnimation} 0.1s ease-in-out;
`;

export const SpecialMenuWrap = styled(MenuWrap)`
    border-bottom: none;
`;

export const MenuText = styled.div`
    width: 100px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #442c19;
    font-size: 20px;
    font-weight: bold;
    animation: ${slideInAnimation} 0.1s ease-in-out;
`;