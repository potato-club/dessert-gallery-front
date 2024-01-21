import { getNearbyCoordMarkerList, getSearchMarkerList } from "../apis/controller/mapPage";

interface UseCustomHookProps {
  initData: any,
  lat:string, 
  lng:string, 
  sort: string ,
  searchKeyword: string,
  page: number,
  save: React.Dispatch<React.SetStateAction<any[]>>
}

export const getMapStoreList = async ({ initData, lat,lng,page,searchKeyword,sort,save }: UseCustomHookProps) => {
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<boolean>(false);

  try {
    console.log("데이터 확인~~", searchKeyword)
    if(!searchKeyword){
      try {
        if(lat.includes('.')&&lng.includes('.')){
          const response = await getNearbyCoordMarkerList(lat,lng);
          if(response === undefined) return initData
          return response
        }
      } catch (error) {
        return initData
      }
      
    }else{
      if(searchKeyword !== '?'){
        const response = await getSearchMarkerList({
          searchKeyword: searchKeyword,
          page: page,
          sortType:sort==="follow" ? true : false
        });
        return response
      }
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