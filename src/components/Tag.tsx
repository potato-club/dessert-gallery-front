import { TagWrap } from "./Tag.style"
import type { tagValue } from "../types/componentsProps"

function Tag({title}:tagValue) {
    return (
      <TagWrap>{title}</TagWrap>
    )
  }
  
  export default Tag