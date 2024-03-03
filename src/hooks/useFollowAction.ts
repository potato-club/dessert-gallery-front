import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import { boardApiList } from "../apis/controller/boardPage";
import { getFollow } from "../apis/controller/myPage";

// 팔로우 상태와 팔로우/취소 함수를 관리하는 Hook
export const useFollowAction = (storeId: number) => {
  const queryClient = useQueryClient();

  const { mutate: putUnFollowMutate } = useMutation(
    ["detailBoard", storeId],
    () => boardApiList.putUnfollow(storeId.toString()),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["detailBoard", storeId]);
        queryClient.refetchQueries(["follow"]);
        alert("언팔로우 되었습니다.");
      },
    }
  );
  const { mutate: postFollowMutate } = useMutation(
    ["detailBoard", storeId],
    () => boardApiList.postFollow(storeId.toString()),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["detailBoard", storeId]);
        queryClient.refetchQueries(["follow"]);
        alert("팔로우 되었습니다.");
      },
    }
  );
  return { putUnFollowMutate, postFollowMutate };
};

export function useInfinityGetFollow() {
  const fetchFollower = async ({ pageParam = 1 }) => {
    const result = await getFollow(pageParam);
    return {
      result: result.content,
      nextPage: pageParam + 1,
      isLast: result.last,
    };
  };

  const { data, fetchNextPage, hasNextPage, isLoading, refetch } =
    useInfiniteQuery(["follow"], fetchFollower, {
      getNextPageParam: (lastPage, pages) => {
        console.log(lastPage);
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
      refetchOnWindowFocus: false,
      retry: 1,
    });
  return { data, fetchNextPage, hasNextPage, isLoading, refetch };
}
