import { mainApiList } from "../apis/controller/mainPage";
import { useQuery } from "react-query";
import { useUserState } from "./useUser";

export const useGetPopularStores = () => {
  return useQuery(
    "popularStore",
    () => mainApiList.getStore("popularStore")
  );
};

export const useGetRecentStores = () => {
  return useQuery(
    "recentStore",
    () => mainApiList.getStore("recentStore")
  );
};

export const useGetRecentReviews = () => {
  return useQuery(
    "recentReview",
    () => mainApiList.getStore("recentReview")
  );
};

export const useGetFollowBoardList = () => {
  const {isGuest} = useUserState();

  if(isGuest){
    return { data: false, isLoading: false, error: "" }
  }
  return useQuery(
      "getMainFollowBoardList",
      () => mainApiList.getMainFollowBoardList()
    );
};

export const useGetNearbyStore = () => {
  return useQuery(
    "getNearbyStore",
    () => mainApiList.getNearbyStore()
  );
};
