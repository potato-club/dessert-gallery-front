import { useEffect } from "react";

export const useEscKey = (closeThing: any) => {
  useEffect(() => {
    const escKeyModalClose = (e: any) => {
      if (e.key === "Escape") {
        closeThing();
      }
    };
    window.addEventListener("keydown", escKeyModalClose);
    return () => window.removeEventListener("keydown", escKeyModalClose);
  }, []);
};
