import { useMutation, useQueryClient } from "react-query";
import { toggleBookmark } from "../apis/controller/detailStore";

export const useToggleBookmark = (boardId: number) => {
  const queryClient = useQueryClient();

  const { mutate: toggleBookmarkState } = useMutation(
    ["bookmarkState", boardId],
    () => toggleBookmark({ boardId }),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["bookmarkState", boardId]);
        queryClient.refetchQueries(["detailBoard", boardId]);
      },
    }
  );

  return { toggleBookmarkState };
};
