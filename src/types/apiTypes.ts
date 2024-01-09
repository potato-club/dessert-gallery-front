export type boardSearchOptionData = {
  page: string;
  address: string;
  searchType: string[];
  sortType: "RECENT" | "FOLLOWER" | "SCORE";
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
  setResData: React.Dispatch<React.SetStateAction<resGalleryPost[][]>>;
  resData: resGalleryPost[][];
};

export type reviewBoardSearchOptionData = {
  page: string;
  address: string;
  searchType: string[];
  sortType: "RECENT" | "FOLLOWER" | "SCORE";
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
  setResData: React.Dispatch<React.SetStateAction<resReviewPost[][]>>;
  resData: resReviewPost[][];
};

export type resGalleryPost = {
  [x: string]: any;
  id: number;
  fileUrl: string;
  address: string;
  followId: null | number;
  score: string;
  content: string;
  name: string;
};

export type galleryBoardContentsList = {
  data: resGalleryPost[][];
};

export type reviewItem = {
  content: string;
  createDate: string;
  nickname: string;
  score: number;
  fileName?: string;
  fileUrl?: string;
};

export type resReviewPost = {
  id: number;
  storeId: number;
  storeName: string;
  fileUrl: string;
  content: string;
  address?: string;
  name: string;
  reviewList: reviewItem[];
};

export type reviewBoardContentsList = {
  data: resReviewPost[][];
};

export type followStore = {
  idx: number;
  fileName: string;
  fileUrl: string;
  nickname: string;
  storeName: string;
};

export type nearbyStore = {
  latitude: number;
  longitude: number;
  score: string;
  storeAddress: string;
  storeName: string;
};

interface SortObject {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

interface PageableObject {
  offset: number;
  sort: SortObject;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface NoticeListDto {
  id: number;
  title: string;
  content: string;
  exposed: boolean;
  type: "NOTICE" | "EVENT" | "ALL";
  createdDate: string;
}

export interface SliceNoticeListDto {
  size: number;
  content: NoticeListDto[];
  number: number;
  sort: SortObject;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  pageable: PageableObject;
  empty: boolean;
}

export interface PostNoticeParam {
  title: string;
  content: string;
  exposed: string;
  typeKey: string;
}


export type mapStoreDetail =
  {
    id: number,
    name: string,
    info: string,
    content: string,
    address: string,
    phoneNumber: string,
    storeImage: {
      fileName: string,
      fileUrl: string
    },
    posts: [
      {
        title: string,
        content: string,
        thumbnail: {
          fileName: string,
          fileUrl: string
        },
        createdDate: string
      }
    ],
    reviews: [
      {
        userName: string,
        content: string,
        score: 0,
        image: {
          fileName: string,
          fileUrl: string
        },
        createDate: Date
      }
    ],
    notices: [
      {
        id: 0,
        title: string,
        content: string,
        exposed: true,
        type: string,
        createdDate: string
      }
    ]
  }