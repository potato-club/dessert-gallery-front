import styled from "styled-components";
import Tag from "../../../components/Tag";

interface defaultStyleProps {
  width?: string
  direction?: 'row' | 'column'
  height?: string
  bgColor?: string
  padding?: string
  margin?: string
  justifyContent?: string
  alignItems?: string
  color?: string
  fontSize?: string
  fontWeight?: string
  rounded?: string
  border?: string
  cursor?: string
}

interface imgProps {
  imgUrl: string
}

interface ComponentLengthProps {
  width: string;
  height: string;
  margin?: string;
  fontSize?: string;
  inversion?: Boolean; 
  hoverCss?: Boolean;
  shadow?: boolean;
  color?: string;
}

export const TagWrap = styled.button<ComponentLengthProps>`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;


  font-family: noto-sans-cjk-kr, sans-serif;
  font-weight: 500;
  font-style: normal;

  color:#FF8D01;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bolder;
  
  background-color: white;
  border: 2px solid #FF8D01;
  border-radius: 56px;
  
  cursor: pointer;

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
  }

  ${({ shadow }) => shadow &&`box-shadow: 0px 3px 6px rgb(0,0,0,0.1);`}
`

/**
 *  width?: string
  direction?: 'row' | 'column'
  height?: string
  bgColor?: string
  padding?: string
  margin?: string
  justifyContent?: string
  alignItems?: string
  rounded?: string
  border?: string
 */
export const Box = styled.div<defaultStyleProps>`
  width: ${({width}) => width};
  height: ${({height}) => height};
  
  display: flex;
  flex-direction: ${({direction}) => direction};
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: ${({alignItems}) => alignItems};

  background-color: ${({bgColor}) => bgColor};

  border: ${({border}) => border};
  border-radius: ${({rounded}) => rounded};

  padding: ${({padding}) => padding};
  margin: ${({margin}) => margin};
`

export const ImgBox = styled(Box)<imgProps>`
background-color: #FDC886;
  ${({imgUrl})=>{
    if(imgUrl){
      return `
        background-image: url(${imgUrl});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border: 1px solid lightgray
      `
    }
  }}
`

export const Text = styled.div<defaultStyleProps>`
  font-family: noto-sans-cjk-kr;
  font-size: ${({fontSize}) => fontSize};
  font-weight: ${({fontWeight}) => fontWeight};
  color: ${({color}) => color};
  padding: ${({padding}) => padding};
  margin: ${({margin}) => margin};
  cursor: ${({cursor}) => cursor};
`
export const ProfileForm = styled.form<defaultStyleProps>`
  width: ${({width}) => width};
  height: ${({height}) => height};
  
  display: flex;
  flex-direction: ${({direction}) => direction};
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: ${({alignItems}) => alignItems};

  background-color: ${({bgColor}) => bgColor};

  border: ${({border}) => border};
  border-radius: ${({rounded}) => rounded};

  padding: ${({padding}) => padding};
  margin: ${({margin}) => margin};
`

export const TextInput = styled.input<defaultStyleProps>`
  border: none;
  background-color: #ffffffab;
  width: 700px;
  font-family: noto-sans-cjk-kr;
  font-size: ${({fontSize}) => fontSize};
  font-weight: ${({fontWeight}) => fontWeight};
  color: ${({color}) => color};
  padding: ${({padding}) => padding};
  margin: ${({margin}) => margin};
  border-radius:4px;
  box-shadow: none;
  -webkit-appearance:none;
  -moz-appearance: none;
  -o-appearance:none;
  appearance: none;
  :active, :focus{
    outline: none !important;
  }
`

export const BtnText = styled.label<defaultStyleProps>`
font-family: noto-sans-cjk-kr;
font-size: ${({fontSize}) => fontSize};
font-weight: ${({fontWeight}) => fontWeight};
color: ${({color}) => color};
padding: ${({padding}) => padding};
margin: ${({margin}) => margin};
cursor: ${({cursor}) => cursor};
`
export const FileInput = styled.input`
display: none;
`

