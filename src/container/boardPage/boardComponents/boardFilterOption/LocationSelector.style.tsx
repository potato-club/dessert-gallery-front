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

interface labelProps {
  checked: boolean
}

export const LocationSelectorWrap = styled.div`
    width: 1100px;
    height: 320px;
    background-color: #FFFDF9;
    border-right: 3px solid #FF6F00;
    border-left: 3px solid #FF6F00;
    border-bottom: 2px solid #ff6f0099;
    display: flex;
    align-items: center;
    z-index: 0;
`;

export const CategoryText = styled.div`
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

export const CityWrap = styled.div`
  width: 330px;
  height: 320px;
  border-right: 2px solid #ff6f0099;
`

export const City = styled.div`
  width: 330px;
  height: 320px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  animation: ${slideInAnimation} 0.1s ease-in-out;

`

export const DistrictWrap = styled.div`
  width: 762px;
  height: 320px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-left: 16px;
  animation: ${slideInAnimation} 0.1s ease-in-out;
`


export const CheckboxInput = styled.input.attrs({ type: 'radio' })`
  -webkit-appearance: none; // 웹킷 브라우저에서 기본 스타일 제거
  -moz-appearance: none; // 모질라 브라우저에서 기본 스타일 제거 
  appearance: none; // 기본 브라우저에서 기본 스타일 제거
  width: 18px;
  height: 18px;
  border-radius: 50%;
  outline: none; // focus 시에 나타나는 기본 스타일 제거
  display: none;
`;

export const CheckboxLabel = styled.label<labelProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: noto-sans-cjk-kr;
  background-color: #ff6f003d;
  border: solid 2px none;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  margin: 8px 0;
  cursor: pointer;

  :hover {
    font-weight: bold;
  }

  ${({checked}) => {
    if(checked){
      return `
        font-weight: bold;
        background-color: #fd8c35ac;
      `
    }
  }};
`;