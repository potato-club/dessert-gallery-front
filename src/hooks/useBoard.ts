import { useInfiniteQuery, useQuery } from "react-query";
import {
  getDetailPoster,
  getStoreReview,
  getBoardComment,
  getPosterList,
  getStoreAnnounce,
} from "../apis/controller/detailStore";

export const useGetInfinityPosterList = (storeId: number) => {
  const fetchPoster = async ({ pageParam = 1 }) => {
    const result = await getPosterList(storeId, pageParam);
    return {
      result: result.content,
      nextPage: pageParam + 1,
      isLast: result.last,
    };
  };

  const {
    data: posterList,
    fetchNextPage,
    hasNextPage,
    isLoading,
    refetch,
  } = useInfiniteQuery(["posterList", storeId], fetchPoster, {
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLast) return lastPage.nextPage;
      return undefined;
    },
    refetchOnWindowFocus: false,
    retry: 1,
  });
  return { posterList, fetchNextPage, hasNextPage, isLoading, refetch };
};

export const useGetDetailBoard = (options = {}, boardId: number) => {
  const { data } = useQuery(
    ["detailBoard", boardId],
    () => getDetailPoster(boardId),
    {
      ...options,
    }
  );

  return { data };
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
export const useGetStoreAnnounce = ({ storeId, options }: any) => {
  const { data: announceData, refetch } = useQuery(
    ["storeAnnounce", storeId],
    () => getStoreAnnounce(storeId),
    {
      ...options,
    }
  );

  return { announceData, refetch };
};

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
