import { regionsData } from "../constants/regions";

export const findLocation = (city:string) => {
  return regionsData.filter(ob=> ob.city === city)
}