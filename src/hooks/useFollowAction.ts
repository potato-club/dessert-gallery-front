import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import { boardApiList } from "../apis/controller/boardPage";
import { getBlockedList, getFollow } from "../apis/controller/myPage";
import { postBlocked, putUnBlocked } from "../apis/controller/myPage";

// 팔로우 상태와 팔로우/취소 함수를 관리하는 Hook
export const useFollowAction = (storeId: number) => {
  const queryClient = useQueryClient();

  const { mutate: putUnFollowMutate } = useMutation(
    ["detailBoard", storeId],
    () => boardApiList.putUnfollow(storeId.toString()),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["detailBoard", storeId]);
        queryClient.refetchQueries(["storeInfo", storeId]);
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
        queryClient.refetchQueries(["storeInfo", storeId]);
        queryClient.refetchQueries(["follow"]);
        alert("팔로우 되었습니다.");
      },
      onError: (err: any) => {
        if (err.response.data.errorCode === "401")
          alert("해당 가게로부터 차단 되었습니다.");
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

export const useBlockedAction = (userName: string) => {
  const queryClient = useQueryClient();

  const { mutate: putUnBlockedMutate } = useMutation(
    ["blockedList"],
    () => putUnBlocked(userName),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["blockedList"]);
        queryClient.refetchQueries(["follow"]);
        alert(`"${userName}" 이 차단 해제 되었습니다.`);
      },
    }
  );
  const { mutate: postBlockedMutate } = useMutation(
    ["blockedList"],
    () => postBlocked(userName),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["blockedList"]);
        queryClient.refetchQueries(["follow"]);
        alert(`"${userName}" 이 차단 되었습니다.`);
      },
    }
  );
  return { putUnBlockedMutate, postBlockedMutate };
};

export function useInfinityGetBlockedList() {
  const fetchBlockedList = async ({ pageParam = 1 }) => {
    const result = await getBlockedList(pageParam);
    return {
      result: result.content,
      nextPage: pageParam + 1,
      isLast: result.last,
    };
  };

  const { data, fetchNextPage, hasNextPage, isLoading, refetch } =
    useInfiniteQuery(["blockedList"], fetchBlockedList, {
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
