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
  const { data, isLoading, error } = useQuery(
    "getMainFollowBoardList",
    () => mainApiList.getMainFollowBoardList()
  );

  if(isGuest){
    return { data: [], isLoading: false, error: "" }
  }


  return { data, isLoading, error };
};

export const useGetNearbyStore = () => {
  return useQuery(
    "getNearbyStore",
    () => mainApiList.getNearbyStore()
  );
};
