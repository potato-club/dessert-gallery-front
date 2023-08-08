import { ReactNode } from "react";
import type { filterData } from "./componentsData";
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
    srcArray: string[]
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
     * (선택)하단 사진 index dot(기본 false)
     */
    dotIndicator?: boolean
    /**
     * (선택)태그, 북마크 등의 사이즈 결정(기본 big)
     */
    size?: 'big' | 'medium' | 'small'
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
 * DotIndicator 컴포넌트 props
 */
export type dotIndicatorValue = {

    /**
     * (필수)전체 사진 수 
     */
    imgLength: number,
    /**
     * (필수)현재 index 
     */
    index: number,
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


/**
 * galleryPost 컴포넌트 props
 */
export type galleryPostValue = {
    /**
     * (필수)galleryPost width
     */
    width: number
    /**
     * (필수)galleryPost height
     */
    height: number
    /**
     * (필수)가게 이름
     */
    title: string
    /**
     * (필수)가게 위치
     */
    location: string
    /**
     * (필수)가게 소개
     */
    summary: string
    /**
     * (필수)가게 평점
     */
    ratingValue: string
    /**
     * (필수) 구독 여부
     */
    onBookmark: boolean
    /**
     * (필수) 태그 상태
     * 없을시 'none'
     */
    tagValue?: string
    /**
     * (필수) 태그/구독 버튼/ 텍스트 사이즈
     * big: 게시판 페이지 기준
     * medium: 메인 페이지 인기게시글 기준
     * small: 메인 페이지 새로운 게시글 기준
     */
    size?: 'big'|'medium'|'small'
    
    /**
     * (필수) 이미지 배열 값
     */
    imgArray:string[]
}


/**
 * ReviewPost 컴포넌트 props
 */
export type ReviewPostValue = {
    /**
     * (필수)galleryPost width
     */
    width: number
    /**
     * (필수)galleryPost height
     */
    height: number
    /**
     * (필수)가게 이름
     */
    title: string
    /**
     * (필수) 가게 소개글
     */
    summary: string
    /**
     * (필수) 가게 대표 이미지
     */
    imgSrc: string
    /**
     * 리뷰 목록
     */
    reviewList: UserReview[]
}

export type UserReview = {
    userId: string
    date: Date
    rating: string
    contents: string
}




export type SlideImgBookmarkValue = {
    /**
     * (필수) 현재 구독 상태
     */
    onBookmark: boolean
    /**
     * (필수) 크기 조절
     */
    size: 'big'|'medium'| 'small'
    /**
     * (필수) 북마크 선택, 선택 해제 기능 함수
     */
    onClickBookmark: React.MouseEventHandler<HTMLDivElement>
}


export type galleryPostSizeValue = {
    titleTextSize: string,
    locationTextSize:string,
    summaryTextSize: string,
    ratingSize: "medium" | "small"
}


export type customizationSelectorValue = {
    filterstate: filterData[]
    onClickFilterOption: ({selected ,idx}:filterData) => void
}

export type boardSortProps = {
    isSelect: boolean
    selected: selectOrder
    sorting: ()=>void
    selectOrder: ({kor, value}: selectOrder)=>void
}

export type selectOrder = {
    kor: string
    value: boolean
}

export type locationSelectorProps = {
    selectedLocation: string
    onChangeLocation: (e:string)=> void
}