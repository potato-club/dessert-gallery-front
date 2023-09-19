import styled from "styled-components";

interface componentProps {
    width?: number
    height?: number
    size?: string
}

interface componentWidthProps {
    width: number
}

export const GalleryPostWrap = styled.div<componentProps>`
    width: ${({width}) => `${width}px`};
    display: flex;
    flex-direction: column;
    border-radius: 0 0 16px 16px;
    box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 15%);
    margin: 48px 0;
`

export const InformationWrap = styled.div<componentProps>`
    display: flex;
    flex-direction: column;
    height: -webkit-fill-available;
    background-color: #FFFDF9;
    padding: 17px 32px 20px 32px;
    border-radius: 0 0 16px 16px;
    justify-content: space-between;
    cursor: pointer;
`

export const TextWrap = styled.div`
    display: flex;
    flex-direction: column; 
`

export const TitleText = styled.div<componentProps>`
    font-size: ${({size}) => `${size}`};
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
`

export const LocationText = styled.div<componentProps>`
    font-size: ${({size}) => `${size}`};
    font-family: noto-sans-cjk-kr;
    margin-top: 8px;
`

export const Summary = styled.div<componentProps>`
    margin: 9px 0 20px 0;
    font-size: ${({size}) => `${size}`};
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
    line-height: normal;
`

