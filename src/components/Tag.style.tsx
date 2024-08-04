import styled from "styled-components";

interface ComponentLengthProps {
    width: string;
    height: string;
    margin: string;
    fontSize?: string;
    inversion?: Boolean; 
    hoverCss?: Boolean;
    shadow?: boolean;
    color?: string;
}

const TagWrap = styled.div<ComponentLengthProps>`
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;


    font-family: noto-sans-cjk-kr, sans-serif;
    font-weight: 500;
    font-style: normal;

    color:${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: bolder;
    
    background-color: white;
    border: ${({ color }) => `2px solid ${color}`};
    border-radius: 56px;
    
    cursor: default;

    width: ${({ width }) => width};
    height: ${({height})=> height};

    margin: ${({ margin }) => margin};

    ${({ inversion, hoverCss }) => {
      switch (inversion) {
        case true:
          if(hoverCss){
            return `background-color: #FF8D01;
                    color:white;
                    border: 2px solid #FF8D01;
                    &:hover {
                      background-color: white;
                      color:#FF8D01;
                      border: 2px solid #FF8D01;
                    }
                    `;

          }else{
            return `background-color: #FF8D01;
                    color:white;
                    border: 2px solid #FF8D01;
                  `;
          }
        case false:
          if(hoverCss){
            return `&:hover {
                      background-color: #FF8D01;
                      color:white;
                      border: 2px solid #FF8D01;
                    }
                    `;

            }
            break;
          }
      }
    }}

  ${({ shadow }) => shadow &&`box-shadow: 0px 3px 6px rgb(0,0,0,0.1);`}
`

const TagButtonWrap = styled(TagWrap)`
    cursor: pointer;
`

export {TagWrap, TagButtonWrap};