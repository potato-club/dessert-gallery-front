import { getNearbyCoordMarkerList } from "../apis/controller/mapPage";
import { useQuery } from "react-query";

export const useGetNearbyCoordMarkerList = ({lat, lng}: {lat:string, lng:string}) => {
    const { data } = useQuery(
        ["useGetNearbyCoordMarkerLis"],
        () => getNearbyCoordMarkerList(`/kakaoMap?lat=${lat}&lon=${lng}&radius=127`),
      );
    
      return { data };
};


  