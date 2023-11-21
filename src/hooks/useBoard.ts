import { useInfiniteQuery, useQuery } from "react-query";
import {
  getDetailPoster,
  getStoreReview,
  getBoardComment,
} from "../apis/controller/detailStore";

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

export const useGetReviewList = ({ page, storeId, options }: any) => {
  const { data, refetch } = useQuery(
    ["review", storeId],
    () => getStoreReview({ storeId, page }),
    {
      ...options,
    }
  );

  return { data, refetch };
};

// x

export const useInfinityModalComment = ({ boardId }: any) => {
  const fetchModalComment = async ({ pageParam = 1 }) => {
    const result = await getBoardComment({ boardId, page: pageParam });
    return {
      result: result.content,
      nextPage: pageParam + 1,
      isLast: result.last,
    };
  };

  const { data, fetchNextPage, hasNextPage, isLoading, refetch } =
    useInfiniteQuery(["boardComment"], fetchModalComment, {
      getNextPageParam: (lastPage, pages) => {
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
      refetchOnWindowFocus: false,
      retry: 1,
    });
  return { data, fetchNextPage, hasNextPage, isLoading, refetch };
};
