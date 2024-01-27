import { useQuery } from "react-query";
import { getStoreInfo } from "../apis/controller/detailStore";

export const useGetStoreInfo = (storeId: number) => {
  const { data } = useQuery(
    ["detailBoard", storeId],
    () => getStoreInfo(storeId),
    {
      refetchOnWindowFocus: false,
    }
  );

  return { data };
};
