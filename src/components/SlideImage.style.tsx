import styled from "styled-components";

interface componentProps {
    width: number
    height: number
    hoverCss?: 'show' | 'hoverShow' | 'none'
}

const Wrapper = styled.div<componentProps>`
    width: ${({width}) => `${width}px`};
    height: ${({height}) => `${height}px`};
    background-color: #FDC886;
    position: relative;
    
    ${({ hoverCss }) =>
      hoverCss === "hoverShow"
        ? `
        z-index: 15;
        &:hover{
            ${MoveButton} {
                display: flex;
            }
        }
        `
        : ''}
`

const BookmarkOnWrap = styled.img`
    width: 57px;
    height: 57px;
    background-color: none;
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 10;

`


const BookmarkOffWrap = styled(BookmarkOnWrap)`
    background-color: none;
`

const MoveWrap = styled.div`
    display: flex;
    flex-direction: column;
`


const MoveButton = styled.img<componentProps>`
    width: ${({ width }) => `${width / 16}px`};
    height: ${({ height }) => `${height / 16}px`};
    position: absolute;
    top: 50%;
    z-index: 10;
    ${({ hoverCss }) =>
      hoverCss === "hoverShow"
        ? `display: none;`
        : ''
      }
    border-radius: 50%;
    background-color: #d3d3d363;
    padding: 4px;
`


const RightMoveButton = styled(MoveButton)`
    right: 3%;
`
const LeftMoveButton = styled(MoveButton)`
    left: 3%;
`

const MoveAllbutton = styled.div`
    width: 50%;
    height: 100%;
    cursor: pointer;
`

const BottomComponent = styled.div`
    position: absolute;
    bottom: 5%;
    left: 5%;
    z-index: 10;
`

const ImageWrap = styled.div`
    z-index: 0;
`;

export { Wrapper, BookmarkOnWrap, BookmarkOffWrap, ImageWrap, RightMoveButton, LeftMoveButton, MoveWrap,MoveAllbutton, BottomComponent};