import React from "react";
import "./product-item.css";
import { formatDate } from "../../utils";

export interface IProductItemProps {
  size: number;
  price: number;
  face: string;
  date: string;
  dateNow: Date;
}

export default function ProductItem({
  size,
  face,
  date,
  price,
  dateNow
}: IProductItemProps) {
  return (
    <li className="products-list--item">
      <div className="products-list--item--wrapper">
        <div
          style={{
            fontSize: size
          }}
        >
          Face: {face}
        </div>

        <div>Price: ${price / 100}</div>
        <div>Date Added: {formatDate(date, dateNow)}</div>
      </div>
    </li>
  );
}