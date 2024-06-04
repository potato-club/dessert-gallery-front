import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { messageObjectType } from "../../container/myPage/chatPage/components/ChatRoom";

// next.js에서 sessionStorage를 사용하기 위한 코드
const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

// persistAtom 선언
const { persistAtom } = recoilPersist({
  key: "chatHistorySessionStorage", //원하는 key 값 입력
  storage: sessionStorage,
});

const defaultValue: messageObjectType[][] = [];

// 리코일 atom 선언, effects_UNSTABLE 속성을 이용해 웹스토리지 사용 정의
export const chatHistoryStateAtom = atom<messageObjectType[][]>({
  key: "chatHistoryDataState",
  default: defaultValue,
  effects_UNSTABLE: [persistAtom],
});

// next.js에서 recoil-persist 사용 시 발생하는 hydration 에러를 해결하기 위한 코드
export function useChatHistoryState() {
  const [isInitial, setIsInitial] = useState(true);
  const [value, setValue] = useRecoilState(chatHistoryStateAtom);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial ? defaultValue : value, setValue] as const;
}
