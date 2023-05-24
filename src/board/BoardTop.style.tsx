import styled from "styled-components";

interface componentProps {
    imgSrc: string
}

const BoardTopWrap = styled.div<componentProps>`
    height: 264px;
    background-image: ${({imgSrc})=> `url(${imgSrc})`};
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
    font-size: 60px;
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
    margin-bottom: 12px;
`

const DecriptionWrap = styled.div`
    font-family: noto-sans-cjk-kr;
    font-size: 18px;
`

export {BoardTopWrap, TextWrap, TitleWrap, DecriptionWrap}