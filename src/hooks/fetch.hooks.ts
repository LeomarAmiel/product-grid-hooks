import { useState, useEffect } from "react";
import { SortTypes } from "../components/select/select.types";

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

export function useFetch(sort: SortTypes, page: number = 1): IFetchValues {
  const [data, updateData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `http://localhost:5000/products?_page=${page}&_limit=20 ${
        Boolean(sort) ? `&_sort=${sort}` : ""
      }`
    )
      .then(res => res.json().then(data => updateData(data)))
      .finally(() => setIsLoading(false));
  }, [sort, page]);

  return { isLoading, data };
}
