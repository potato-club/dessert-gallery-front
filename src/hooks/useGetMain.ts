import { mainApiList } from "../apis/controller/mainPage";
import { useQuery } from "react-query";

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
