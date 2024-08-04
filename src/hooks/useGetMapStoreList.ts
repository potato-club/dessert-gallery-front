import { useEffect, useState } from "react";
import { getNearbyCoordMarkerList, getSearchMarkerList, getStoreDetail } from "../apis/controller/mapPage";
import { useQuery } from "react-query";

interface propsData {
  lat:string, 
  lng:string, 
  
}
interface propsSearchData {
  sort: string ,
  searchKeyword: string,
  page: number,
}

interface UseCustomHookProps {
  initData: any,
  lat:string, 
  lng:string, 
  sort: string ,
  searchKeyword: string,
  page: number,
  save: React.Dispatch<React.SetStateAction<any[]>>
}

export const useGetMapStoreList = async ({ initData, lat,lng,page,searchKeyword,sort,save }: UseCustomHookProps) => {
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<boolean>(false);

  try {
    if(!searchKeyword){
      try {
        if(lat.includes('.')&&lng.includes('.')){
          console.log("lat, lng ==", lat,lng)
          const response = await getNearbyCoordMarkerList(lat,lng);
          console.log("통신완료 ==", response)
          save(response.data)
          return response.data
        }
      } catch (error) {
        return initData
      }
      
    }else{
      const response = await getSearchMarkerList({
        searchKeyword: searchKeyword,
        page: page,
        sortType:sort==="follow" ? true : false
      });
      // save(response.data)
      return response.data
    }
  } catch (error) {
    console.log("anjejfk... ", error)
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       if(!searchKeyword){
  //         if(lat.includes('.')&&lng.includes('.')){
  //           console.log("lat, lng ==", lat,lng)
  //           const response = await getNearbyCoordMarkerList(lat,lng);
  //           console.log("통신완료 ==", response)
  //           setData(response.data);
  //           save(response.data)
  //       console.log("로딩 왜이래", data, loading)
  //         }
  //       }else{
  //         const response = await getSearchMarkerList({
  //           searchKeyword: searchKeyword,
  //           page: page,
  //           sortType:sort==="follow" ? true : false
  //         });
  //         setData(response.data);
  //         save(response.data)

  //       }
  //     } catch (error) {
  //       console.log("anjejfk... ", error)
  //       setError(true);
  //     } finally {
  //       console.log("로딩 왜이래ㅜㅜ", data, loading)
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [data, loading]);

  // return { data, loading, error };
};

// 두 객체가 동일한지 확인하는 간단한 유틸리티 함수입니다.
const isEqual = (obj1: any, obj2: any) => JSON.stringify(obj1) === JSON.stringify(obj2);

// export const useGetMapStoreList = async ({lat, lng}: propsData) => {
//   // console.log('훅 - 마커 재검색 - 좌표')
//   //   const { data } = useQuery(
//   //       ["useGetNearbyCoordMarkerLis"],
//   //       () => getNearbyCoordMarkerList(lat, lng),
//   //     );
    
//   //     return { data };
//   const [cache, setCache] = useState();
//     try {
//       // Axios를 사용하여 API에서 데이터를 가져옵니다.
//       if(!searchData.searchKeyword){
//         const res= await getNearbyCoordMarkerList(center.lat,center.lng);
//         console.log("data", res)
//         setStoreListData(res.data);
//         setLoading(prev=>!prev)
//       }else{
//         const res = await getSearchMarkerList({
//           searchKeyword: searchData.searchKeyword,
//           page: searchData.page,
//           sortType:searchData.sort==="follow" ? true : false
//         });
//         setStoreListData(res.data);
//         setLoading(prev=>!prev)
//       }
      
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
// };

// export const useGetSearchMapStoreList = ({ sort, searchKeyword, page}: propsSearchData) => {
//   console.log('훅 - 마커 재검색 - 검색')
//     const { data } = useQuery(
//       ["getSearchMarkerList"],
//       () => getSearchMarkerList({
//         searchKeyword: searchKeyword,
//         page: page,
//         sortType:sort==="follow" ? true : false
//       }),
//     );
  
//     return { data };
// };

export const useGetStoreDetail = ({storeId}:{storeId: number}) => {
  console.log("detail: ", storeId)
  const { data } = useQuery(
    ["getStoreDetail"+storeId],
    () => getStoreDetail(storeId),
  );

  console.log("detail res", data)

  return { data };
}