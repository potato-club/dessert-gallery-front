import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface useInfinityScroll {
  data: any;
  isLoading: boolean;
  hasNextPage: boolean | undefined;
  fetchNextPage: any;
}
export const useInfinityScrollLoading = ({
  data,
  isLoading,
  hasNextPage,
  fetchNextPage,
}: useInfinityScroll) => {
  const [pageList, setPageList] = useState<any>(null);
  const [isLoad, setIsLoad] = useState(false);

  // pageList
  useEffect(() => {
    if (data) {
      const pages = data?.pages
        .map((page: any) => {
          return page.result;
        })
        .flat();
      setPageList(pages);
    }
  }, [data]);

  // infinite scroll 구현
  const [ref, inView] = useInView({ threshold: 1 });
  useEffect(() => {
    if (inView && !isLoading && hasNextPage) {
      setIsLoad(true);
      setTimeout(() => {
        fetchNextPage();
        setIsLoad(false);
      }, 1500);
    }
  }, [inView, isLoading]);

  // pageList : 받아온 실제 페이지 내부 데이터
  // isLoad : 다음 페이지 로딩 완료 여부
  // ref : 감지 할 컴포넌트에 ref 할당 --> ex)<IoDiv ref={ref}> </IoDiv>
  return { pageList, isLoad, ref };
};
