import { TagWrap, TagButtonWrap } from "./Tag.style"
import type { tagValue } from "../types/componentsProps"

/**
 * @param title(string): 해당 태그 display text 
 * @param length: short(16px), medium(24px), long(48px)
 * @param fontSize(string): 기본 `12px`
 * @param clickAble(Boolean): 클릭 이벤트가 존재하는 태그인지 확인 
 * @param onClickHandler(event: React.MouseEvent<HTMLDivElement>) => void): 클릭 이벤트 
 */
function Tag({title, fontSize=`12px`, length, clickAble, onClickHandler=()=>{}}:tagValue) {
    return (
      <>
        {
          clickAble 
            ? (<TagButtonWrap length={length} fontSize={fontSize} onClick={onClickHandler}>{title}</TagButtonWrap>)
            : (<TagWrap length={length} fontSize={fontSize} >{title}</TagWrap> )
        }
      </>
    )
  }
  
  export default Tag