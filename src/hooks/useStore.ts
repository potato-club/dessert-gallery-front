import { useQuery, useQueryClient } from "react-query";
import { getStoreInfo } from "../../pages/api/detailStore";

interface GetStoreInfoType {
  storeId: number;
  accessToken?: string | null;
  options?: any;
}
export const useGetStoreInfo = ({
  options,
  storeId,
  accessToken,
}: GetStoreInfoType) => {
  const { data } = useQuery(
    ["detailBoard", storeId],
    () => getStoreInfo({ storeId, accessToken }),
    {
      ...options,
    }
  );

  return { data };
};
