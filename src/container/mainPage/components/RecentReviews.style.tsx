import styled from "styled-components";

interface componentProps {
    width?: number
    height?: number
    size?: string
    bold?: boolean
}

export const MiddleWrap = styled.div`
    width: -webkit-fill-available;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
    padding-bottom: 8px;
    border-bottom: 2px solid #FF8D00;
`

export const ReviewPostWrap = styled.div<componentProps>`
    width: ${({width}) => `${width}px`};
    height: ${({height}) => `${height}px`};
    display: flex;
    flex-direction: column;
    border-radius: 0 0 16px 16px;
    background-color: #FFFDF9;
    box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 15%);
    margin: 64px 0 64px 63px;
`

export const InformationWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 12px 16px;
    border-radius: 0 0 16px 16px;
`

export const Contents = styled.div`
    display: block;
    height: 32px;
    width: 224px;
    font-size: 10px;
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
    line-height: normal;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const TitleText = styled.div<componentProps>`
    font-size: 10px;
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
    color: #FF8D00;
`

export const StoreWrap = styled.div`
    display: flex;
    width: -webkit-fill-available;
    justify-content: space-between;
`
export const StoreInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 128px;
`

export const StoreInfoTextWrap = styled(StoreInfo)`
    /* height: 50px;
    overflow: hidden;
    text-overflow: ellipsis; */
    
`

export const Text = styled.div<componentProps>`
    font-size: ${({size}) => `${size}`};
    line-height: normal;
    height: 14px;
    font-family: noto-sans-cjk-kr;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 4px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    
    
    ${({bold}) => {
        if(bold === true){
            return `font-weight: bold;`
        }
    }};
`

export const AddressText = styled(Text)`
    font-size: ${({size}) => `${size}`};
    line-height: normal;
    height: 28px;
    font-family: noto-sans-cjk-kr;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 4px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`
