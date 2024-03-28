import { useState, useEffect } from "react";
import { debounce } from "lodash";

export const useResize = () => {
  const [currentWidth, setCurrentWidth] = useState<number>(0);
  useEffect(() => {
    setCurrentWidth(window.innerWidth);
    window.addEventListener(
      "resize",
      debounce(() => setCurrentWidth(window.innerWidth), 200)
    );
    return () => {
      // cleanup
      window.removeEventListener(
        "resize",
        debounce(() => setCurrentWidth(window.innerWidth), 200)
      );
    };
  }, []);

  return { currentWidth };
};
