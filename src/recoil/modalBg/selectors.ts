import { selector } from "recoil";
import { modalBg } from "./atom";

const modalBgSelector = selector({
  key: "modalBgState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const modalBgValue = get(modalBg); // Get the value of the "modalBg" atom, not the selector itself

    return modalBgValue;
  },
});
