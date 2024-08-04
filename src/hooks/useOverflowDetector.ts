import { useEffect, useState, useRef } from "react";

interface OverflowDetectorProps {
  ref: React.RefObject<any>;
  width: number;
  height: number;
}
export function useOverflowDetector({
  ref,
  width,
  height,
}: OverflowDetectorProps) {
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

  return { isOverflowWidth, isOverflowHeight };
}
