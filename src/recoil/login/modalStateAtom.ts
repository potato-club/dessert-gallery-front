import { atom } from "recoil";

export type modalStateType = {
  state: boolean;
  inputState: boolean;
  inputValue: string;
  explain: string;
  onClickConfirmButton: () => void;
  onClickCancelButton: () => void;
};

export const modalStateAtom = atom<modalStateType>({
  key: "modalState",
  default: {
    state: false,
    inputState: false,
    explain: "",
    inputValue: "",
    onClickConfirmButton: () => {},
    onClickCancelButton: () => {},
  },
});
