import styled from "styled-components"

interface props {
  sizeValue: number
}

export const BookmarkOnWrap = styled.div<props>`
    width: ${({sizeValue}) => `${sizeValue}px`};
    height: ${({sizeValue}) => `${sizeValue}px`};
    background-color: none;
    cursor: pointer;
`

export const BookmarkOffWrap = styled(BookmarkOnWrap)`
    background-color: none;
`

export const BookmarkOnAbsoluteWrap = styled.div<props>`
    width: ${({sizeValue}) => `${sizeValue}px`};
    height: ${({sizeValue}) => `${sizeValue}px`};
    background-color: none;
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 20;
    cursor: pointer;
`

export const BookmarkOffAbsoluteWrap = styled(BookmarkOnAbsoluteWrap)`
    background-color: none;
`