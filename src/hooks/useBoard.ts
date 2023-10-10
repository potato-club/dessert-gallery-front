import {
  getDetailPoster,
  getStoreReview,
  getBoardComment,
  postBoardComment,
} from "../../pages/api/detailStore";
import { useMutation, useQuery, useQueryClient } from "react-query";

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

export const useGetModalComment = ({ page, boardId, options }: any) => {
  const { data, refetch } = useQuery(
    ["boardComment", boardId],
    () => getBoardComment({ boardId, page }),
    {
      ...options,
    }
  );

  return { data, refetch };
};

export const usePostModalComment = ({
  boardId,
  comment,
  accessToken,
  options,
}: any) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ["boardComment", boardId],
    () => postBoardComment({ boardId, comment, accessToken }),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(["boardComment", boardId]);
      },
      onError: (err: any) => {
        if (err.response.status == 403) {
          alert("로그인을 해주세요.");
          return;
        }
      },
      ...options,
    }
  );

  return { mutate };
};
