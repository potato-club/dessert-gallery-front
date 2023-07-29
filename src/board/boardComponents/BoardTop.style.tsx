import styled from "styled-components";
import { StaticImageData } from "next/image";

interface componentProps {
    imgSrc?: string | StaticImageData | undefined;
}

const BoardTopWrap = styled.div<componentProps>`
    width: 100vw;
    height: 176px;
    background-image: ${({imgSrc})=> `url('${imgSrc}')`};
    background-color: #FDC886;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
`

const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TitleWrap = styled.div`
    font-size: 40px;
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
    margin-bottom: 12px;
    color: white;
`

const DecriptionWrap = styled.div`
    font-family: noto-sans-cjk-kr;
    font-size: 12px;
    color: white;

`

export {BoardTopWrap, TextWrap, TitleWrap, DecriptionWrap}