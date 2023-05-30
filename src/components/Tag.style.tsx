import styled from "styled-components";

interface ComponentLengthProps {
    padding: string;
    margin: string;
    fontSize?: string;
    inversion?: Boolean; 
}

const TagWrap = styled.div<ComponentLengthProps>`
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;


    font-family: noto-sans-cjk-kr, sans-serif;
    font-weight: 500;
    font-style: normal;

    color:#FF8D01;
    font-size: ${({ fontSize }) => fontSize};
    font-weight: bolder;
    
    background-color: white;
    border: 2px solid #FF8D01;
    border-radius: 56px;
    
    cursor: default;

    padding: ${({ padding }) => padding};
    margin: ${({ margin }) => margin};

    ${({ inversion }) => {
    switch (inversion) {
      case true:
        return `background-color: #FF8D01;
                color:white;
                border: 2px solid #FF8D01;`;
    }
  }}
`

const TagButtonWrap = styled(TagWrap)`
    cursor: pointer;
`

export {TagWrap, TagButtonWrap};