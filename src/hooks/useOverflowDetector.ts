import { useEffect, useState, useRef } from "react";

interface OverflowDetectorProps {
  width: number;
  height: number;
}
export function useOverflowDetector({ width, height }: OverflowDetectorProps) {
  const ref = useRef<any>(null);

  const [componenetWidth, setComponenetWidth] = useState(0);
  const [componentHeight, setComponentHeight] = useState(0);
  const [isOverflowWidth, setIsOverflowWidth] = useState(false);
  const [isOverflowHeight, setIsOverflowHeight] = useState(false);

  useEffect(() => {
    setComponenetWidth(ref.current.offsetWidth);
    setComponentHeight(ref.current.offsetHeight);
  }, []);

  useEffect(() => {
    if (componenetWidth > width) setIsOverflowWidth(true);
    if (componentHeight > height) setIsOverflowHeight(true);
  }, [componenetWidth, componentHeight, width, height]);

  return { ref, isOverflowWidth, isOverflowHeight };
}
