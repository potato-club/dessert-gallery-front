import styled from "styled-components";

interface componentsProps {
    fontSize: string
    bold?: boolean
}

export const NearbyStorePostWrap = styled.div`
    width: 1100px;
    height: 284px;
    border-radius: 0 16px 16px 0;
    background-color: #FFFDF9;
    box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 15%);
    display: flex;
`

export const TextWrap = styled.div`
    width: 550px;
    height: 284px;
    padding: 60px 54px;
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