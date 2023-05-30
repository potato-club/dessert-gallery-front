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
     * (필수)태그 내부 길이 조절 padding 값
     */
    padding: string
    /**
     * (선택)태그 외부 여백 조절 margin 값, 기본 '0'
     */
    margin?: string
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
    inversion?: Boolean
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
    width: number
    /**
     * (필수)사진 세로 길이 px단위
     */
    height: number
    /**
     * (선택)북마크 옵션 활성화 유무(기본 false)
     */
    bookmark?: Boolean
    /**
     * (선택: 북마크옵션 활성화시 필수)스크랩한 게시물인지
     */
    onBookmark?: boolean
    /**
     * (선택)태그 등의 컴포넌트를 표현시
     */
    children?: ReactNode
}


/**
 * boardTop 컴포넌트 props
 */
export type boardTopValue = {
    /**
     * (필수)게시판 이름
     */
    title: string
    /**
     * (필수)게시판 설명
     */
    decription: string
    /**
     * (선택)게시판 답 배너 사진 url
     */
    imgSrc?: string
}
