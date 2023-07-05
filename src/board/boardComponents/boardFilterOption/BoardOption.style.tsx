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
    z-index: 15;
`

export const OptionCategoriesButton = styled.button<optionCategoriesState>`
    border: 3px solid #FF6F00;
    border-right: 3px solid #FF6F00;
    width: 334px;
    height: 68px;
    background-color: #FDC886;
    font-size: 18px;
    font-family: noto-sans-cjk-kr;
    font-weight: bold;
    border-radius: 16px 16px 0 0;

    color: #FF6F00;


    cursor: pointer;

    ${({categoryId})=> {
        if(categoryId === 1){
            return `position: relative;
                    width: 334px;
                    left: -3px; `
        }
    }} 
                
    ${({categoryId, selectNumber})=> {
        if(categoryId === selectNumber){
            return `background-color: #FFFDF9`
        }
    }}
`

export const OptionCategoriesTextInputLabel = styled.label`
  border: 3px solid #FF6F00;
  width: 438px;
  height: 68px;
  background-color: #FDC886;
  display: flex;
  align-items: center;
  position: relative;
  left: -6px;
  border-radius: 16px 16px 0 0;

  input::placeholder {
    color: #FF6F00;
  }

  &:focus-within {
      background-color: #FFFDF9;
  }
`;
export const OptionCategoriesSVGImg = styled.img`
    margin: 0 32px;
`


export const OptionCategoriesTextInput = styled.input`
  border: none;
  width: 336px;
  height: 56px;
  background-color: #FDC886;
  position: relative;
  left: -6px;
  font-size: 18px;
  font-family: noto-sans-cjk-kr;
  font-weight: bold;
  color: #FF6F00;

  &:focus {
    outline: 2px solid transparent;
    background-color: #FFFDF9;
  }
`;


export const SelectOptionWrap = styled.div`
    width: 1100px;
    min-height: 246px;
    background-color: #FFFDF9;
    border: 3px solid #FF6F00;
    border-top: none;
    border-radius: 0 0 16px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SelectOptionTagWrap = styled.div`
    padding: 16px 30px;
    display: flex;
    flex-wrap: wrap
`

export const SelectOptionCancleWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 28px;
`