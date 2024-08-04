// state/selectedStoreState.ts
import { atom } from 'recoil';

/** MapPage 선택된 가게의 storeId값을 담는 state 선택되지 않았을 경우 -1 */
export const selectedStoreState = atom<number>({
  key: 'selectedStoreState',
  default: -1,
});