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
     * (필수)태그 내부 길이 조절 width 값
     */
    width: string
    /**
     * (필수)태그 내부 길이 조절 height 값
     */
    height: string
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
    inversion?: Boolean,
    /**
     * (선택)hover시 색상변경 css 설정, 기본 false
     */
    hoverCss?: Boolean,
    /**
     * (선택)버튼 shadow 처리 css 설정 기본 false 
     */
    shadow?: boolean,
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
     * (선택)사진 넘기기 버튼 디자인 type(기본 none)
     * hoverShow: 사진에 커서를 올렸을 시 화살표 표시
     * none: 화살표 없이 넘김
     * show: 기본 화살표 표시
     */
    moveBtnType?: 'none' | 'hoverShow' | 'show'
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
