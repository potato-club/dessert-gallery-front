import styled from "styled-components";

interface componentProps {
    width?: number
    height?: number
    size?: string
}

export const ReviewPostWrap = styled.div<componentProps>`
    width: ${({width}) => `${width}px`};
    height: ${({height}) => `${height}px`};
    display: flex;
    flex-direction: column;
    border-radius: 0 0 16px 16px;
    background-color: #FFFDF9;
    box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 15%);
    margin: 64px 0;
`

export const InformationWrap = styled.div<componentProps>`
    display: flex;
    flex-direction: column;
    width: ${({width}) => `${width}px`};
    align-items: start;
    padding: 17px 16px 20px 16px;
    border-radius: 0 0 16px 16px;
`

export const TitleText = styled.div<componentProps>`
    font-size: ${({size}) => `${size}`};
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
    color: #FF8D00;
`

export const Summary = styled.div<componentProps>`
    margin: 9px 0 20px 0;
    font-size: ${({size}) => `${size}`};
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
    line-height: normal;
`

