import styled from "styled-components";

interface componentsProps {
    fontSize: string
    bold?: boolean
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
    padding: 52px 54px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

`

export const RatingWrap = styled.div`
    margin-top: auto;
`

