import styled from "styled-components";

interface componentsProps {
    fontSize: string
    bold?: boolean
    line?:boolean
}

export const NearbyStorePostWrap = styled.div`
    width: 1100px;
    height: 284px;
    border-radius: 16px 16px 16px 16px;
    background-color: #FFFDF9;
    box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 15%);
    display: flex;
`

export const MapWrap = styled.div`
    width: 550px;
    height: 284px;
    border: none;
    border-right: solid 1px #ff8d0144;
    border-radius: 16px 0 0 16px;
`

export const TextWrap = styled.div`
    width: 550px;
    height: 284px;
    padding: 48px 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

export const TopWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;
`

export const BottomWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Text = styled.div<componentsProps>`
    margin: 10px 0;
    font-family: noto-sans-cjk-kr;
    
    font-size: ${({fontSize})=>`${fontSize}`};
    ${({bold}) => {
        if(bold === true){
            return `font-weight: bold;`
        }
    }};

    ${({line}) => {
        if(line === true){
            return `line-height: 1.2;`
        }
    }};

`

export const RatingWrap = styled.div`
    height: 100%;
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

