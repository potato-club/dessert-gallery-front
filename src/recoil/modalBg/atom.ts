import { atom } from "recoil";

export const modalBg = atom({
  key: "modalBg", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
