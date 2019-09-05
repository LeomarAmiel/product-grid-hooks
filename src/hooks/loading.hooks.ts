import { useState } from "react";

export function useLoading(defaultState?: boolean) {
  const [isLoading, setIsLoading] = useState(defaultState || false);

  return { isLoading, setIsLoading };
}
