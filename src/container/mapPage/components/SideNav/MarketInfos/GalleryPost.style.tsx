import styled from "styled-components";

interface componentProps {
    width?: number
    height?: number
    size?: string
    textSize?: string
    textPadding?: string
    margin?: string
}

interface componentWidthProps {
    width: number
    margin: string
}

export const GalleryPostWrap = styled.div<componentProps>`
    width: ${({width}) => `${width}px`};
    height: ${({height}) => `${height}px`};
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 15%);
    margin: ${({margin}) => `${margin}`};
`

export const InformationWrap = styled.div<componentProps>`
    display: flex;
    flex-direction: column;
    height: -webkit-fill-available;
    background-color: #FFFDF9;
    padding: ${({textPadding}) => `${textPadding}`};
    border-radius: 0 0 8px 8px;
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
    overflow: hidden;
    white-space: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`

export const LocationText = styled.div<componentProps>`
    margin-top: 4px;
    font-size: ${({size}) => `${size}`};
    font-family: noto-sans-cjk-kr;
    overflow: hidden;
    white-space: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`

export const Summary = styled.div<componentProps>`
    margin-top: 9px;
    
    font-size: ${({textSize}) => `${textSize}`};
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
    line-height: normal;
    overflow: hidden;
    white-space: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;

    ${({size}) => {
        if(size==="small"){
            return`
                -webkit-line-clamp: 1; // 원하는 라인수
            `
        }
        else{
            return`
                -webkit-line-clamp: 2; // 원하는 라인수
            `
        }
    }}
    
    
`
