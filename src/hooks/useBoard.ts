import { getDetailPoster } from "../../pages/api/detailStore";
import { useQuery } from "react-query";

export const useGetDetailBoard = (options = {}, storeId: number) => {
  const { data } = useQuery(
    ["detailBoard", storeId],
    () => getDetailPoster({ storeId }),
    {
      ...options,
    }
  );

  return data;
};

export const useGetReviewList = ({ query, storeId, options }: any) => {
  const { data } = useQuery(
    ["review", storeId],
    () => getDetailPoster({ storeId }),
    {
      ...options,
    }
  );

  return data;
};
