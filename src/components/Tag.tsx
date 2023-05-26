import { TagWrap, TagButtonWrap } from "./Tag.style"
import type { tagValue } from "../types/componentsProps"

/**
 * 공지사항, 이벤트, HOT! 태그 및 더보기 버튼, 게시판 옵션 태그 버튼 사용시 이용합니다.
 */
function Tag({title, fontSize=`16px`, padding, margin='0', clickAble=false, onClickHandler=()=>{}, inversion=false}:tagValue) {
    return (
      <>
        {
          clickAble 
            ? (<TagButtonWrap padding={padding} margin={margin} fontSize={fontSize} onClick={onClickHandler} inversion={inversion}>{title}</TagButtonWrap>)
            : (<TagWrap padding={padding} margin={margin} fontSize={fontSize} inversion={inversion} >{title}</TagWrap> )
        }
      </>
    )
  }
  
  export default Tag