import { useJWTState } from "../recoil/login/JWTStateAtom";

export function useTokenService() {
  const [jwtData, setJwtData] = useJWTState();

  const getAccessToken = () => {
    return jwtData.accessToken;
  };

  const getRefreshToken = () => {
    return jwtData.refreshToken;
  };

  const setToken = (accessToken: string, refreshToken: string) => {
    setJwtData({ accessToken, refreshToken });
  };

  return {
    getAccessToken,
    getRefreshToken,
    setToken,
  };
}
