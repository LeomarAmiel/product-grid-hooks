import { useState, useEffect } from "react";
import { SortTypes } from "../components/select/select.types";

export interface IProduct {
  id: string;
  size: number;
  price: number;
  face: string;
  date: string;
}

export function useFetch(sort: SortTypes): IProduct[] {
  const [data, updateData] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/products${Boolean(sort) ? `?_sort=${sort}` : ""}`
    ).then(res => res.json().then(data => updateData(data)));
  }, [sort]);

  return data;
}
