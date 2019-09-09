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
  const hadSort = useRef(false);

  useEffect(() => {
    setIsLoading(true);
    if (sort === SORT_TYPES.UNSORTED && hadSort.current) {
      fetch(`http://localhost:5000/products?_limit=${page * 20}`)
        .then(res =>
          res.json().then((newData: IProduct[]) => updateData(newData))
        )
        .finally(() => {
          setIsLoading(false);
          hadSort.current = false;
        });
    } else if (sort) {
      fetch(`http://localhost:5000/products?_limit=${page * 20}&_sort=${sort}`)
        .then(res =>
          res.json().then((newData: IProduct[]) => updateData(newData))
        )
        .finally(() => {
          setIsLoading(false);
          hadSort.current = true;
        });
    } else {
      fetch(`http://localhost:5000/products?_page=${page}&_limit=20`)
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
