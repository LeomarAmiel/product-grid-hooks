import { useState, useEffect, useRef } from "react";
import { SortTypes, SORT_TYPES } from "../components/select/select.types";

export interface IProduct {
  id: string;
  size: number;
  price: number;
  face: string;
  date: string;
}

interface IFetchValues {
  data: IProduct[];
  isLoading: boolean;
}

interface Props {
  sort: SortTypes;
  page: number;
}

export function useFetch({ sort, page }: Props): IFetchValues {
  const [data, updateData] = useState([] as IProduct[]);
  const [isLoading, setIsLoading] = useState(false);
  const hadSort = useRef(sort);

  useEffect(() => {
    // always show loading on first run of fetch
    setIsLoading(true);
    if (sort === SORT_TYPES.UNSORTED && hadSort.current !== "") {
      // from a sorted to unsorted
      fetch(`http://localhost:5000/products?_limit=${page * 20}`)
        .then(res =>
          res.json().then((newData: IProduct[]) => updateData(newData))
        )
        .finally(() => {
          setIsLoading(false);
          hadSort.current = "";
        });
      // when changed sort
    } else if (sort && hadSort.current !== sort) {
      fetch(`http://localhost:5000/products?_limit=${page * 20}&_sort=${sort}`)
        .then(res =>
          res.json().then((newData: IProduct[]) => updateData(newData))
        )
        .finally(() => {
          setIsLoading(false);
          hadSort.current = sort;
        });
    } else {
      // handle only on scrolling
      fetch(
        `http://localhost:5000/products?_page=${page}&_limit=20${
          sort ? `&_sort=${sort}` : ""
        }`
      )
        .then(res =>
          res
            .json()
            .then((newData: IProduct[]) =>
              updateData(data => [...data, ...newData])
            )
        )
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [sort, page]);

  return { isLoading, data };
}
