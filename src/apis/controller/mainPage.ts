import sendApi from "../sendApi";

export const mainApiList = {
  getStore: async(option: string) => {
    if(option === "popularStore"){
      return (await sendApi.get("/list/stores?page=1&sortType=FOLLOWER")).data
    }else if(option === "recentStore"){
      return (await sendApi.get("/list/stores?page=1&sortType=RECENT")).data
    }else if(option === "recentReview"){
      return (await sendApi.get("/list/reviews?page=1&sortType=RECENT")).data
    }
  },

  getMainFollowBoardList: async() => {
    if(false){
      return false;
    }
    return (await sendApi.get("/mypage/follow?page=1")).data;
  },

  getNearbyStore: async() => {
    return (await sendApi.get("/kakaoMap?lat=37.34701&lon=126.9509&radius=130")).data;
  },
} 