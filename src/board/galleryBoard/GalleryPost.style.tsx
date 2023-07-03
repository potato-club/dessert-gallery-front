import styled from "styled-components";

interface componentProps {
    width?: number
    height?: number
}

export const GalleryPostWrap = styled.div<componentProps>`
    width: ${({width}) => `${width}px`};
    height: ${({height}) => `${height}px`};
    display: flex;
    flex-direction: column;
    border-radius: 0 0 16px 16px;
    box-shadow: 0px 3px 6px rgb(0,0,0,0.1);
    margin: 64px 0;
`

export const InformationWrap = styled.div<componentProps>`
    display: flex;
    flex-direction: column;
    width: ${({width}) => `${width}px`};
    background-color: #FCF0E1;
    padding: 32px 32px 20px 32px;
    border-radius: 0 0 16px 16px;
`

export const TitleText = styled.div`
    font-size: 28px;
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
`

export const LocationText = styled.div`
    font-size: 16px;
    font-family: noto-sans-cjk-kr;
    margin-top: 8px;
`

export const Summary = styled.div`
    margin: 12px 0 24px 0;
    font-size: 16px;
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
`

