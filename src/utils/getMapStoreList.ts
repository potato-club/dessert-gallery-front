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
  try {
    if(!searchKeyword && sort.length === 0){
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

        if(page !== 1 && initData){
          if(response.length !==0){
            return initData.concat(response)
          }else{
        return initData;
          }
        }
        return response
      }
    }
  } catch (error) {
    console.log("error... ", error)
  }
};
