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