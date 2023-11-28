import { useMutation, useQueryClient } from "react-query";
import { boardApiList } from "../apis/controller/boardPage";

// 팔로우 상태와 팔로우/취소 함수를 관리하는 Hook
export const useFollowAction = (storeId: number) => {
  const queryClient = useQueryClient();

  const { mutate: putUnFollowMutate } = useMutation(
    ["detailBoard", storeId],
    () => boardApiList.putUnfollow(storeId.toString()),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["detailBoard", storeId]);
        queryClient.refetchQueries(["detailBoard", storeId]);
      },
    }
  );
  const { mutate: postFollowMutate } = useMutation(
    ["detailBoard", storeId],
    () => boardApiList.postFollow(storeId.toString()),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["detailBoard", storeId]);
        queryClient.refetchQueries(["detailBoard", storeId]);
      },
    }
  );
  return { putUnFollowMutate, postFollowMutate };
};
