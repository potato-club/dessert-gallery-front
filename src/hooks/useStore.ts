import { useQuery, useQueryClient } from "react-query";
import { getStoreInfo } from "../apis/controller/detailStore";

interface GetStoreInfoType {
  storeId: number;
  options?: any;
}
export const useGetStoreInfo = ({ options, storeId }: GetStoreInfoType) => {
  const { data } = useQuery(
    ["detailBoard", storeId],
    () => getStoreInfo({ storeId }),
    {
      ...options,
    }
  );

  return { data };
};
