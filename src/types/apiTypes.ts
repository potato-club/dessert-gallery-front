export type boardSearchOptionData = {
  page: string,
  address: string,
  searchType: string[],
  sortType: "RECENT"| "FOLLOWER"| "SCORE",
  setToast:  React.Dispatch<React.SetStateAction<boolean>>
  setResData: React.Dispatch<React.SetStateAction<resGalleryPost[][]>> 
  resData: resGalleryPost[][]
}

export type reviewBoardSearchOptionData = {
  page: string,
  address: string,
  searchType: string[],
  sortType: "RECENT"| "FOLLOWER"| "SCORE",
  setToast:  React.Dispatch<React.SetStateAction<boolean>>
  setResData: React.Dispatch<React.SetStateAction<resReviewPost[][]>>
  resData: resReviewPost[][]
}

export type resGalleryPost = {
  [x: string]: any
  id: number
  fileUrl: string
  address: string
  followId: null|number
  score: string
  content: string
  name: string;
}

export type galleryBoardContentsList = {
  data: resGalleryPost[][]
}

export type reviewItem = {
  content: string
  createDate: string
  nickname: string
  score: number
  fileName?: string
  fileUrl?: string
}


export type resReviewPost = {
  id: number
  storeId: number
  storeName: string
  fileUrl: string
  content: string
  address?: string
  name: string
  reviewList: reviewItem[]
}

export type reviewBoardContentsList = {
  data: resReviewPost[][]
}

export type followStore = {
  idx: number
  fileName: string
  fileUrl: string
  nickname: string
  storeName: string
}

export type nearbyStore = {
  latitude : number
  longitude: number
  score: string
  storeAddress: string
  storeName: string
}