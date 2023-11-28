import sendApi from "../sendApi";

export const getNearbyCoordMarkerList = async (req:string) => {
    const res = await sendApi.get(req);
    return res.data;
}