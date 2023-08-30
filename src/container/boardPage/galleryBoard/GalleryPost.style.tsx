import styled from "styled-components";

interface componentProps {
    width?: number
    height?: number
    size?: string
}

export const GalleryPostWrap = styled.div<componentProps>`
    width: ${({width}) => `${width}px`};
    height: ${({height}) => `${height}px`};
    display: flex;
    flex-direction: column;
    border-radius: 0 0 16px 16px;
    box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 15%);
    margin: 64px 0;
    ${({size})=>{
        if(size==='small')
            return `padding: 12px 8px 12px 16px;`
    }}
`

export const InformationWrap = styled.div<componentProps>`
    display: flex;
    flex-direction: column;
    width: ${({width}) => `${width}px`};
    background-color: #FFFDF9;
    padding: 17px 32px 20px 32px;
    border-radius: 0 0 16px 16px;
    box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 15%);

    ${({size})=>{
        if(size==='small')
            return `padding: 12px 8px 12px 16px;`
    }}
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

