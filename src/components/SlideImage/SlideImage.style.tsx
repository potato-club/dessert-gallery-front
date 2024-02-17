import styled from "styled-components";

interface componentProps {
  width: number;
  height: number;
  hoverCss?: "show" | "hoverShow" | "none";
  position?: "right" | "left";
  borderRadius?: boolean;
}

const Wrapper = styled.div<componentProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: #fdc886;
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
      : ""}

  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-select: none;

  ${({ borderRadius }) => borderRadius && `border-radius: 8px 8px 0 0`}
`;

const BookmarkOnWrap = styled.img`
  width: 57px;
  height: 57px;
  background-color: none;
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 20;
`;

const BookmarkOffWrap = styled(BookmarkOnWrap)`
  background-color: none;
`;

const MoveWrap = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;
`;

const MoveButton = styled.div<componentProps>`
  position: absolute;
  top: 50%;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => `${width / 18}px`};
  height: ${({ height }) => `${height / 18}px`};
  ${({ hoverCss }) => (hoverCss === "hoverShow" ? `display: none;` : "")}
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0px 0px 6px 1px #6d6d6d3e;
`;

const SvgWrap = styled.div`
  path {
    filter: drop-shadow(0 0 0.25rem #333333ac);
  }
`;

const RightMoveButton = styled(MoveButton)`
  right: 3%;
`;
const LeftMoveButton = styled(MoveButton)`
  left: 3%;
`;

const MoveAllbutton = styled.div<componentProps>`
  position: absolute;
  width: ${({ width }) => `${width / 2}px`};
  height: ${({ height }) => `${height}px`};
  left: ${({ position }) => (position === "right" ? `50%` : `0`)};
  cursor: pointer;
  z-index: 15;
`;

const BottomComponent = styled.div`
  position: absolute;
  padding: 0 5%;
  bottom: 5%;
  width: 100%;
  z-index: 10;
`;

const BottomCenterComponent = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageWrap = styled.div<componentProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  z-index: 0;
`;
const DeleteBtn = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: red;
  z-index: 50;
`;

export {
  Wrapper,
  BookmarkOnWrap,
  BookmarkOffWrap,
  ImageWrap,
  RightMoveButton,
  LeftMoveButton,
  SvgWrap,
  MoveWrap,
  MoveAllbutton,
  BottomComponent,
  BottomCenterComponent,
  DeleteBtn,
};
