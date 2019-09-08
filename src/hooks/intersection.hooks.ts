import { useState, useRef, useEffect, MutableRefObject } from "react";

interface Props {
  root?: any;
  rootMargin?: string;
  threshold: number | number[];
  elementRef: MutableRefObject<Element | null>;
}

export function useIntersection({
  root = null,
  rootMargin,
  threshold = 0,
  elementRef
}: Props) {
  const [intersectionEntry, updateEntry] = useState({});

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold
    })
  );

  useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (elementRef)
      currentObserver.observe(
        (elementRef as MutableRefObject<Element>).current
      );

    return () => currentObserver.disconnect();
  }, [elementRef]);

  return { intersectionEntry };
}
