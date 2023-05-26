import styled from "styled-components";

interface optionCategoriesState {
    categoryId: number
    selectNumber?: number;
}

export const BoardOptionWrap = styled.div`
    margin-top: 64px;
`

export const OptionCategoriesWrap = styled.div`
    width: 1624px;
    display: flex;
    border: 2px soild #FF8D00;
    border-bottom: none;
`

export const OptionCategoriesButton = styled.button<optionCategoriesState>`
    border: 2px solid #FF8D00;
    width: 488px;
    height: 92px;
    background-color: white;
    border-right: none;

    font-size: 28px;
    font-family: noto-sans-cjk-kr;
    font-weight: bold;

    cursor: pointer;

    ${({categoryId, selectNumber})=> {
        if(categoryId === selectNumber){
            return `border-bottom: none;
                    background-color: #FCF0E1`
        }
    }}
`

export const OptionCategoriesTextInput = styled.input`
    border: 2px solid #FF8D00;
    width: 648px;
    height: 92px;
    background-color: white;

    font-size: 28px;
    font-family: noto-sans-cjk-kr;
    font-weight: bold;

    &:focus {
        outline: 2px solid transparent;
    }
`

export const SelectOptionWrap = styled.div`
    width: 1624px;
    height: 336px;
    background-color: #FCF0E1;
    border: 2px solid #FF8D00;
    border-top: none;
`;