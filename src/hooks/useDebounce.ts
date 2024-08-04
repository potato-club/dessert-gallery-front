import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number, setIsLoading?:React.Dispatch<React.SetStateAction<boolean>>) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebounceValue(value);
      try {
        if(setIsLoading!==undefined){
          setIsLoading(false);
        }
      }catch (error) {
      }
    }, delay);

    return () => {
      //useEffect 내부에서 return을 하게 되면 컴포넌트가 제거될 때 해당 코드들이 실행된다
      clearTimeout(debounceTimer);
    };
  }, [value, delay]);

  return debounceValue;
};