import { SquareButtonWrap } from "./SquareButton.style"
import type { SquareButtonValue } from "../types/componentsProps"

/**
 * @param title(string): 해당 태그 display text 
 * @param length: short(16px), medium(24px)
 * @param fontSize(string): 기본 `12px`
 * @param onClickHandler(event: React.MouseEvent<HTMLDivElement>) => void): 클릭 이벤트 
 */
function SquareButton({title, fontSize=`12px`, length, onClickHandler=()=>{}}:SquareButtonValue) {
    return (
      <SquareButtonWrap fontSize={fontSize} length={length}>{title}</SquareButtonWrap>
    )
  } 
  
  export default SquareButton