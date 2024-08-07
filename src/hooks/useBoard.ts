import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import {
  getDetailPoster,
  getStoreReview,
  getBoardComment,
  getPosterList,
  getStoreAnnounce,
  deleteComment,
  postBoardComment,
  PostCommentType,
} from '../apis/controller/detailStore';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modalBg } from '../recoil/modalBg/atom';

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
  } = useInfiniteQuery(['posterList', storeId], fetchPoster, {
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLast) return lastPage.nextPage;
      return undefined;
    },
    refetchOnWindowFocus: false,
    retry: 1,
  });
  return { posterList, fetchNextPage, hasNextPage, isLoading, refetch };
};

export const useGetDetailBoard = (boardId: number) => {
  const { data } = useQuery(
    ['detailBoard', boardId],
    () => getDetailPoster(boardId),
    {
      refetchOnWindowFocus: false,
    }
  );

  return { data };
};

export const useGetReviewList = ({ page, storeId, options }: any) => {
  const { data, refetch, isLoading } = useQuery(
    ['review', storeId],
    () => getStoreReview({ storeId, page }),
    {
      ...options,
    }
  );

  return { data, refetch, isLoading };
};
export const useGetStoreAnnounce = ({ storeId, options }: any) => {
  const { data: announceData, refetch } = useQuery(
    ['storeAnnounce', storeId],
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
    useInfiniteQuery(['boardComment', boardId], fetchModalComment, {
      getNextPageParam: (lastPage, pages) => {
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
      refetchOnWindowFocus: false,
      retry: 1,
    });
  return { data, fetchNextPage, hasNextPage, isLoading, refetch };
};

export const usePostComment = (boardId: number) => {
  const queryClient = useQueryClient();
  const { mutate: postCommentMutate, isLoading } = useMutation(
    ['boardComment', boardId],
    (comment: string) => postBoardComment({ boardId, comment }),
    {
      onSuccess: () => {
        queryClient.refetchQueries();
      },
      onError: (err: any) => {
        if (err.response.status == 403) {
          alert('로그인 해주세요.');
        } else if (err.response.data.errorCode === 'F4001')
          alert('해당 가게로부터 차단 되었습니다.');
      },
    }
  );

  return { postCommentMutate, isLoading };
};

export const useDeleteComment = (boardId: number) => {
  const queryClient = useQueryClient();
  const { mutate: deleteCommentMutate, isLoading } = useMutation(
    ['boardComment', boardId],
    (commentId: number) => deleteComment(commentId),
    {
      onSuccess: () => {
        queryClient.refetchQueries();
        alert('댓글이 삭제되었습니다.');
      },
    }
  );

  return { deleteCommentMutate, isLoading };
};

export const useStorePageOnModal = (storeId: number) => {
  const router = useRouter();
  const [boardId, setBoardId] = useState<number>(0);
  const [onModal, setOnModal] = useState<boolean>(false);
  const modalBgState = useSetRecoilState(modalBg);

  useEffect(() => {
    if (router.query.boardId) setBoardId(Number(router.query.boardId));
    if (Number(router.query.boardId) == boardId) {
      setOnModal(true);
      modalBgState(true);
    }
  }, [router, boardId]);

  const onModalBg = useRecoilValue(modalBg);
  useEffect(() => {
    if (onModalBg === false)
      router.push(`/galleryBoard/${storeId}`, undefined, {
        shallow: true,
      });
    else
      router.push(`/galleryBoard/${storeId}?boardId=${boardId}`, undefined, {
        shallow: true,
      });
  }, [onModalBg]);

  return { boardId, setBoardId, onModal, onModalBg };
};
