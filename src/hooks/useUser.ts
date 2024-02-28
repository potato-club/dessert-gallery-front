import { useEffect, useState } from "react";
import { JWTStateAtom } from "../recoil/login/JWTStateAtom";
import { useRecoilValue } from "recoil";
import { getLoginUserInfo } from "../apis/controller/myPage";
import { useInfiniteQuery, useQuery } from "react-query";
import { getBookmark } from "../apis/controller/detailStore";

export const useUserState = () => {
  const [isGuest, setIsGuest] = useState<boolean>(true);
  const jwtData = useRecoilValue(JWTStateAtom);

  useEffect(() => {
    if (jwtData.accessToken) {
      setIsGuest(false);
    }
  }, [jwtData]);

  return { isGuest };
};

export const useLoginUserInfo = () => {
  const { data } = useQuery(["loginUserInfo"], () => getLoginUserInfo(), {
    refetchOnWindowFocus: false,
  });
  return { data };
};

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
    useInfiniteQuery(["bookmark"], fetchMyBookmark, {
      getNextPageParam: (lastPage, pages) => {
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
      refetchOnWindowFocus: false,
      retry: 1,
    });
  return { data, fetchNextPage, hasNextPage, isLoading, refetch };
};
