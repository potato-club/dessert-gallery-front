
/**
 * Tag 컴포넌트 props
 */
export type tagValue = {
    title: string
    length: 'short' | 'medium' | 'long'
    fontSize?: string 
    clickAble: Boolean
    onClickHandler?: (event: React.MouseEvent<HTMLDivElement>) => void
}

/**
 * SquareButton 컴포넌트 props
 */
export type SquareButtonValue = {
    title: string
    length: 'short' | 'medium'
    fontSize?: string 
    onClickHandler?: (event: React.MouseEvent<HTMLDivElement>) => void
}