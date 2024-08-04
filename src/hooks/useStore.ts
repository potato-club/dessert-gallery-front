import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getStoreInfo } from '../apis/controller/detailStore';

export const useGetStoreInfo = (storeId: number) => {
  const router = useRouter();
  const { data } = useQuery(
    ['storeInfo', storeId],
    () => getStoreInfo(storeId),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onError: () => {
        router.push('/galleryBoard');
      },
    }
  );

  return { data };
};
