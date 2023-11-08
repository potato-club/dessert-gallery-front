import { useEffect, useState } from "react";
import { JWTStateAtom } from "../recoil/login/JWTStateAtom";
import { useRecoilValue } from "recoil";
import { getLoginUserInfo } from "../apis/controller/myPage";
import { useQuery } from "react-query";

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
