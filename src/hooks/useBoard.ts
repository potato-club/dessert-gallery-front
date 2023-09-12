import {
  getDetailPoster,
  getStoreReview,
  getBoardComment,
  postBoardComment,
} from "../../pages/api/detailStore";
import { useMutation, useQuery } from "react-query";

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

export const usePostModalComment = ({ boardId, options }: any) => {
  const { mutate } = useMutation(
    ["boardComment", boardId],
    () => postBoardComment({ boardId }),
    {
      ...options,
    }
  );

  return { mutate };
};
