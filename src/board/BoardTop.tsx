import { boardTopValue } from "../types/componentsProps"
import { BoardTopWrap, TextWrap, TitleWrap, DecriptionWrap } from "./BoardTop.style"

function BoardTop({title, decription, imgSrc=''}:boardTopValue) {
    return (
      <BoardTopWrap imgSrc={imgSrc}>
        <TextWrap>
          <TitleWrap>{title}</TitleWrap>
          <DecriptionWrap>{decription}</DecriptionWrap>
        </TextWrap>
      </BoardTopWrap>
    )
  }
  
  export default BoardTop