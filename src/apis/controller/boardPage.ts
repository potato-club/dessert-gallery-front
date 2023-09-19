import sendApi from "../sendApi";

export const boardApiList = {
  getBoardList: (req:string) => {
    return sendApi.get(req);
  },

  postFollow: (req:string) => {
    return sendApi.post(`/mypage/follow/${req}`);
  },
  putUnfollow: (req:string) => {
    return sendApi.put(`/mypage/follow/${req}`);
  },
} 