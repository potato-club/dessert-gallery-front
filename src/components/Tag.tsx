import { TagWrap, TagButtonWrap } from "./Tag.style"
import type { tagValue } from "../types/componentsProps"

/**
 * 공지사항, 이벤트, HOT! 태그 및 더보기 버튼, 게시판 옵션 태그 버튼 사용시 이용합니다.
 */
function Tag({title, fontSize=`18px`, width, height, margin='0', clickAble=false, onClickHandler=()=>{}, inversion=false, hoverCss=false, shadow=false, color="#FF8D01"}:tagValue) {
    return (
      <>
        {
          clickAble 
            ? (<TagButtonWrap width={width} height={height} margin={margin} fontSize={fontSize} onClick={onClickHandler} inversion={inversion} hoverCss={hoverCss} shadow={shadow} color={color}>{title}</TagButtonWrap>)
            : (<TagWrap width={width} height={height} margin={margin} fontSize={fontSize} inversion={inversion} hoverCss={hoverCss} shadow={shadow} color={color}>{title}</TagWrap> )
        }
      </>
    )
  }
  
  export default Tag