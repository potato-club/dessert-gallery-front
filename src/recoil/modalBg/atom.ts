import { atom } from "recoil";

export const modalBg = atom({
  key: "modalBgState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
