import styled from "styled-components";

interface ComponentLengthProps {
    length: 'short' | 'long' | 'medium';
    fontSize?: string;
}

const TagWrap = styled.div<ComponentLengthProps>`
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;


    color:#FF8D01;
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
      case 'long':
        return `padding: 4px 48px;`;
      default:
        return '';
    }
  }}
`

const TagButtonWrap = styled(TagWrap)`
    cursor: pointer;
`

export {TagWrap, TagButtonWrap};