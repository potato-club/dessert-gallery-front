
/**
 * Tag 컴포넌트 props
 */
export type tagValue = {
    title: string
    length: 'short' | 'medium' | 'long'
    fontSize?: string 
    clickAble: Boolean
    onClickHandler?: (id: Number | string)=>void
}