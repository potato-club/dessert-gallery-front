import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

// next.js에서 sessionStorage를 사용하기 위한 코드
const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

// persistAtom 선언
const { persistAtom } = recoilPersist({
  key: "roomIdSessionStorage", //원하는 key 값 입력
  storage: sessionStorage,
});

const defaultValue: number = 0;

// 리코일 atom 선언, effects_UNSTABLE 속성을 이용해 웹스토리지 사용 정의
export const roomIdStateAtom = atom<number>({
  key: "roomIdDataState",
  default: defaultValue,
  effects_UNSTABLE: [persistAtom],
});

// next.js에서 recoil-persist 사용 시 발생하는 hydration 에러를 해결하기 위한 코드
export function useRoomIdState() {
  const [isInitial, setIsInitial] = useState(true);
  const [value, setValue] = useRecoilState(roomIdStateAtom);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial ? defaultValue : value, setValue] as const;
}
