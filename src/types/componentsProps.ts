import { ReactNode } from "react"

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


/**
 * SlideImage 컴포넌트 props
 */
export type slideImageValue = {
    /**
     * (필수)이미지 배열 
     */
    scrArray: string[]
    /**
     * (필수)사진 가로 길이 px단위
     */
    width: Number
    /**
     * (필수)사진 세로 길이 px단위
     */
    height: Number
    /**
     * (선택)북마크 옵션 활성화 유무(기본 false)
     */
    bookmark?: Boolean
    /**
     * (선택)태그 등의 컴포넌트를 표현시
     */
    children?: ReactNode
}
