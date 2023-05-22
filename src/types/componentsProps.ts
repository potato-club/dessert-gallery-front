
/**
 * Tag 컴포넌트 props
 */
export type tagValue = {
    /**
     * (필수)해당 태그 display text 
     */
    title: string
    /**
     * (필수)태그 길이 조절 padding 값
     */
    padding: string
    /**
     * (선택)폰트 사이즈 조절 , 기본 `18px`
     */
    fontSize?: string 
    /**
     * (선택)클릭 이벤트가 존재하는 태그인지 확인 
     */
    clickAble?: Boolean
    /**
     * (clickAble이 참일 경우 필수)클릭 이벤트 
     */
    onClickHandler?: (event: React.MouseEvent<HTMLDivElement>) => void
    /**
     * (선택)색상 반전 처리 기본값 false 
     */
    inversion: Boolean
}