import React from "react";
import "./product-item.css";
import { formatDate } from "../../utils";

interface IProps {
  id: string;
  size: number;
  price: number;
  face: string;
  date: string;
  dateNow: Date;
}

export default function ProductItem({
  id,
  size,
  face,
  date,
  price,
  dateNow
}: IProps) {
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
