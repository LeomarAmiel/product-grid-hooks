import { useState, useRef, useEffect, MutableRefObject } from "react";

interface Props {
  root?: any;
  rootMargin?: string;
  threshold: number | number[];
  elementRef: MutableRefObject<Element | null>;
}

interface ReturnType {
  intersectionEntry: IntersectionObserverEntry;
}

export function useIntersection({
  root = null,
  rootMargin,
  threshold = 0,
  elementRef
}: Props): ReturnType {
  const [intersectionEntry, updateEntry] = useState(
    {} as IntersectionObserverEntry
  );

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
