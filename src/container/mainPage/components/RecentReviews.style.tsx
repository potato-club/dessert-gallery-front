import styled from "styled-components";

interface componentProps {
    width?: number
    height?: number
    size?: string
}

interface textComponentProps {
    color?: string
    size?: string
    bold?: boolean
    marginRight?: boolean
}

export const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BoxContentsStart = styled(Box)`
    padding: 17px 17px 15px 17px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    cursor: pointer;
`
const ContentsWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

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
    padding-bottom: 20px;
    border-radius: 0 0 16px 16px;
`

export const TitleText = styled.div<componentProps>`
    font-size: ${({size}) => `${size}`};
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
    color: #FF8D00;
`

export const Summary = styled.div<componentProps>`
    margin-top: 9px;
    font-size: ${({size}) => `${size}`};
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
    line-height: normal;
`

export const ReviewListWrap = styled.div`
    width: 309px;
    height: 202px;
    background-color: #FFF7EB;
`

export const ReviewWrap = styled.div`
    width: 273px;
    height: 100px;
    border-top: 3px solid #FF8D00;
`

export const TopTextWrap = styled.div`  
    margin: 10px 0 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;    
`

export const Text = styled.div<textComponentProps>`
    color: ${({color}) => `${color}`};
    font-size: ${({size}) => `${size}`};
    line-height: normal;
    font-family: noto-sans-cjk-kr;
    
    ${({bold}) => {
        if(bold === true){
            return `font-weight: bold;`
        }
    }};
    ${({marginRight}) => {
        if(marginRight === true){
            return `margin-right: 72px;`
        }
    }};
`

export const TagWrap = styled.div`
    width: 273px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px solid #FF8D00;

`