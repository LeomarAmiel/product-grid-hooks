import React, { useRef } from "react";
import { IProductItemProps } from "./product-item";
import "./product-item.css";
import { useIntersection } from "../../hooks";
import { formatDate } from "../../utils";

export default function IntersectProductItem({
  size,
  face,
  date,
  price,
  dateNow
}: IProductItemProps) {
  const elementRef = useRef(null);
  const { intersectionEntry } = useIntersection({
    threshold: [0, 0.25, 0.5, 0.75, 1],
    elementRef
  });
  console.log("intersectionEntry: ", intersectionEntry);
  return (
    <li ref={elementRef} className="products-list--item">
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
