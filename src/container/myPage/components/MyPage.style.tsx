import styled from "styled-components";

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

export const Text = styled.div<defaultStyleProps>`
  font-family: noto-sans-cjk-kr;
  font-size: ${({fontSize}) => fontSize};
  font-weight: ${({fontWeight}) => fontWeight};
  color: ${({color}) => color};
  padding: ${({padding}) => padding};
  margin: ${({margin}) => margin};
  cursor: ${({cursor}) => cursor};
`