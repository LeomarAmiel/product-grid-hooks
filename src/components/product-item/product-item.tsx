import React from "react";
import { formatDate } from "../../utils";
import "./product-item.scss";

export interface IProductItemProps {
  size: number;
  price: number;
  face: string;
  date: string;
  dateNow: Date;
}

function ProductItem({ size, face, date, price, dateNow }: IProductItemProps) {
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

export default React.memo(ProductItem);
