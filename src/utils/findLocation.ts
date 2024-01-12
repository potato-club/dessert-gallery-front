import { regionsData } from "../constants/regions";
import { regionsCoordData } from "../constants/regionsCoord";

export const findLocation = (city:string) => {
  return regionsData.filter(ob=> ob.city === city)
}

export const findCoordLocation = (city:string) => {
  return regionsCoordData.filter(ob=> ob.city === city)
}