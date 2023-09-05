export type boardSearchOptionData = {
  page: string,
  address: string,
  searchType: string[],
  sortType: "RECENT"| "FOLLOWER"| "SCORE"
}

export type resGalleryPost = {
  id: number
  fileUrl: string
  address: string
  bookmarkId: null
  score: string
  content: string
  name: string;
}

export type galleryBoardContentsList = {
  data: resGalleryPost[][]
}

export type reviewList = {
  content: string
  createdDate: Date
  nickname: string
  score: number
}


export type resReviewPost = {
  id: number //
  storeName: string //
  fileUrl: string //
  content: string //
  name: string; //
  reviewList: reviewList[]
}

export type reviewBoardContentsList = {
  data: resReviewPost[][]
}