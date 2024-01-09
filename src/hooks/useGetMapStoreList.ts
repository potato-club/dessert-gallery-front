import { getNearbyCoordMarkerList, getSearchMarkerList, getStoreDetail } from "../apis/controller/mapPage";
import { useQuery } from "react-query";

interface propsData {
  lat:string, 
  lng:string, 
  sort: "follow" | "score" ,
  searchKeyword: string,
  page: number,
}
export const useGetMapStoreList = ({lat, lng, sort, searchKeyword, page}: propsData) => {
  console.log('훅 - 마커 재검색')
  if(!searchKeyword){
    const { data } = useQuery(
        ["useGetNearbyCoordMarkerLis"],
        () => getNearbyCoordMarkerList(lat, lng),
      );
    
      return { data };
  }else{
    const { data } = useQuery(
      ["getSearchMarkerList"],
      () => getSearchMarkerList({
        searchKeyword: searchKeyword,
        page: page,
        sortType:sort==="follow" ? true : false
      }),
    );
  
    return { data };
  }
};

export const useGetStoreDetail = ({storeId}:{storeId: number}) => {
  console.log("detail: ", storeId)
  const { data } = useQuery(
    ["getStoreDetail"+storeId],
    () => getStoreDetail(storeId),
  );

  console.log("detail res", data)

  return { data };
}