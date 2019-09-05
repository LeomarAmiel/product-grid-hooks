import { useState, ChangeEvent } from "react";
import { SortTypes } from "../components/select/select.types";

export function useSorting(defaultState: SortTypes) {
  const [sort, setSort] = useState(defaultState);

  const onChangeSort = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSort(event.target.value as SortTypes);
  };

  return { sort, onChangeSort };
}
