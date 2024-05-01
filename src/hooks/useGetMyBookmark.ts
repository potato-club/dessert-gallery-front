import { useInfiniteQuery } from 'react-query';
import { getBookmark } from '../apis/controller/detailStore';

export const useInfinityMyBookmark = () => {
  const fetchMyBookmark = async ({ pageParam = 1 }) => {
    const result = await getBookmark(pageParam);
    return {
      result: result.content,
      nextPage: pageParam + 1,
      isLast: result.last,
    };
  };

  const { data, fetchNextPage, hasNextPage, isLoading, refetch } =
    useInfiniteQuery(['bookmark'], fetchMyBookmark, {
      getNextPageParam: (lastPage, pages) => {
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
      refetchOnWindowFocus: false,
      retry: 1,
    });
  return { data, fetchNextPage, hasNextPage, isLoading, refetch };
};
