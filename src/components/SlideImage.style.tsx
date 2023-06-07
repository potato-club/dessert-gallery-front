import styled from "styled-components";

interface componentProps {
    width: number
    height: number
}

const Wrapper = styled.div<componentProps>`
    width: ${({width}) => `${width}px`};
    height: ${({height}) => `${height}px`};
    background-color: #FDC886;
    position: relative;
`;

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

const ImageWrap = styled.div`
    z-index: 0;
`;

const MoveButton = styled.div<componentProps>`
    width: ${({width}) => `${width/16}px`};
    height: ${({height}) => `${height/16}px`};
    background-color: white;
    position: absolute;
    top: 50%;
    z-index: 10;
    border: 1px solid black;
`;

const RightMoveButton = styled(MoveButton)`
    right: 5%;
`;
const LeftMoveButton = styled(MoveButton)`
    left: 5%;
`;

const BottomComponent = styled.div`
    position: absolute;
    bottom: 5%;
    left: 5%;
    z-index: 10;
`

export { Wrapper, BookmarkOnWrap, BookmarkOffWrap, ImageWrap, RightMoveButton, LeftMoveButton, BottomComponent};