import styled from "styled-components";

interface SquareButton {
    fontSize: string,
    length: 'short' | 'medium'
}

const SquareButtonWrap = styled.button<SquareButton>`
    background-color: #FDC886;
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;


    font-size: ${({ fontSize }) => fontSize};
    font-weight: bolder;
    
    background-color: white;
    border: 2px solid #FF8D01;
    border-radius: 24px;
    
    cursor: default;

    ${({ length }) => {
    switch (length) {
      case 'short':
        return `padding: 4px 16px;`;
      case 'medium':
        return  `padding: 4px 24px;`;
      default:
        return `padding: 4px 16px;`;;
    }
  }}
`

export { SquareButtonWrap };