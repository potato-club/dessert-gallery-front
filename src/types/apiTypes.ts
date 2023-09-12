export type boardSearchOptionData = {
  page: string,
  address: string,
  searchType: string[],
  sortType: "RECENT"| "FOLLOWER"| "SCORE",
  setToast:  React.Dispatch<React.SetStateAction<boolean>>
  setResData: React.Dispatch<React.SetStateAction<resGalleryPost[][]>>
  resData: resGalleryPost[][]
}

export type resGalleryPost = {
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
  createdDate: Date
  nickname: string
  score: number
}


export type resReviewPost = {
  id: number;
  storeName: string;
  fileUrl: string;
  content: string;
  name: string;
  reviewList: reviewItem[];
}

export type reviewBoardContentsList = {
  data: resReviewPost[][]
}