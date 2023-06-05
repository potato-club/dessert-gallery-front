import styled from "styled-components";

interface optionCategoriesState {
    categoryId: number
    selectNumber?: number;
}

export const BoardOptionWrap = styled.div`
    margin-top: 64px;
`

export const OptionCategoriesWrap = styled.div`
    display: flex;
    border: 2px soild #FF8D00;
    border-bottom: none;
    position: relative;
`

export const OptionCategoriesButton = styled.button<optionCategoriesState>`
    border: 3px solid #FF8D00;
    border-right: 3px solid #FF8D00;
    width: 487px;
    height: 101px;
    background-color: #FDC886;
    font-size: 28px;
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
    border-radius: 16px 16px 0 0;

    color: #FF8D00;


    cursor: pointer;

    ${({categoryId})=> {
        if(categoryId === 1){
            return `position: relative;
                    width: 488px;
                    left: -3px; `
        }
    }} 
                
    ${({categoryId, selectNumber})=> {
        if(categoryId === selectNumber){
            return `background-color: #FFFDF9`
        }
    }}
`

export const OptionCategoriesTextInput = styled.input`
    border: 3px solid #FF8D00;
    width: 651px;
    height: 101px;
    background-color: #FDC886;

    position: relative;
    left: -6px;

    font-size: 28px;
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
    color: #FF8D00;

    border-radius: 16px 16px 0 0;

    &::placeholder {
        color: #FF8D00;
    }

    &:focus {
        outline: 2px solid transparent;
        background-color: #FFFDF9;
    }
`

export const SelectOptionWrap = styled.div`
    width: 1620px;
    height: 336px;
    background-color: #FFFDF9;
    border: 3px solid #FF8D00;
    border-top: none;
    border-radius: 0 0 16px 16px;
`;

export const SelectOptionTagWrap = styled.div`
    padding: 24px 48px;
    display: flex;
`