import styled from "styled-components";
import mainBottomLeft  from "../../../../public/image/mainBottomLeft.png";
import mainBottomRight  from "../../../../public/image/mainBottomRight.png";

interface textComponentProps {
  fontSize?: string
  bold?: boolean

}

export const MoveToMapWrap = styled.div`
  width: 100vw;
  height: 280px;
  background-color: #FF8D00;
  background-image: url(${mainBottomLeft.src}), url(${mainBottomRight.src});
  background-position: 0px 0px, 100% 0px;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1280px) {
    width: 1280px; 
  }
  @media screen and (max-width: 480px) {
    min-width: 480px; 
  }
`

export const ConstentsWrap = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
` 

export const Text = styled.div<textComponentProps>`
    margin: 16px 0;
    font-family: noto-sans-cjk-kr;
    color: white;
    font-size: ${({fontSize})=>`${fontSize}`};
    font-weight: bold;
`

