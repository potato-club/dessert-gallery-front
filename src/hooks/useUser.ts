import { useEffect, useState } from 'react';
import { JWTStateAtom } from '../recoil/login/JWTStateAtom';
import { useRecoilValue } from 'recoil';
import { getLoginUserInfo } from '../apis/controller/myPage';
import { useQuery } from 'react-query';
import { propfileApiList } from '../apis/controller/profile';
import { useMutation } from 'react-query';
import { logout, withdrawal } from '../apis/controller/myPage';
import sessionStorageService from '../libs/sessionStorageService';

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
  const { data, isLoading } = useQuery(
    ['loginUserInfo'],
    () => getLoginUserInfo(),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, isLoading };
};

export const useExistStore = () => {
  const { data } = useQuery(
    ['existStore'],
    () => propfileApiList.getStoreProfile(),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data };
};

export const useLogout = () => {
  const { mutate } = useMutation(
    ['logout'],
    ({ at, rt }: { at: string; rt: string }) => logout({ at, rt }),
    {
      onSuccess: () => {
        sessionStorageService.delete('JWTSessionStorage');
        window.location.href = '/';
        alert('로그아웃 되었습니다.');
      },
    }
  );

  return { mutate };
};

export const useWithdrawal = () => {
  const { mutate } = useMutation(
    ['withdrawal'],
    ({ at, rt }: { at: string; rt: string }) => withdrawal({ at, rt }),
    {
      onSuccess: () => {
        sessionStorageService.delete('JWTSessionStorage');
        window.location.href = '/';
        alert('회원 탈퇴 되었습니다.');
      },
    }
  );

  return { mutate };
};
