import sendApi from "../sendApi";
import { AxiosResponse } from "axios";
import { mapStoreDetail } from "../../types/apiTypes";

export const getNearbyCoordMarkerList = async (lat: string, lng: string)=> {
    const res = await sendApi.get(`/kakaoMap?lat=${lat}&lon=${lng}&radius=127`);
    return res.data;
}

export const getSearchMarkerList = async ({searchKeyword, page, sortType}:{searchKeyword:string, page:number, sortType:boolean}) => {
    const res = await sendApi.get(`/kakaoMap/search?address=string&keyword=${searchKeyword}&searchType=NAME&page=${page}&sortType=${sortType}`);
    return res.data;
}

export const getStoreDetail = async (storeId:number) => {
    const res: AxiosResponse<mapStoreDetail> = await sendApi.get(`/kakaoMap/detail/${storeId}`);
    return res.data;
}