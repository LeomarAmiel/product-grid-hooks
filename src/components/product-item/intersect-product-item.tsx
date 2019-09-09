import React, { useRef, useEffect, Dispatch, SetStateAction } from "react";
import { IProductItemProps } from "./product-item";
import "./product-item.css";
import { useIntersection } from "../../hooks";
import { formatDate } from "../../utils";

export interface IProps extends IProductItemProps {
  onHandleHasSeenItem: Dispatch<SetStateAction<number>>;
  pageValue: number;
  intersectionIndex: number;
}

export default function IntersectProductItem({
  size,
  face,
  date,
  price,
  dateNow,
  pageValue,
  intersectionIndex,
  onHandleHasSeenItem
}: IProps) {
  const elementRef = useRef(null);
  const { intersectionEntry } = useIntersection({
    threshold: [0, 0.25, 0.5, 0.75, 1],
    elementRef
  });

  useEffect(() => {
    if (
      intersectionEntry.intersectionRatio > 0.5 &&
      pageValue === intersectionIndex
    ) {
      return onHandleHasSeenItem(pageValue + 1);
    }
  }, [
    intersectionEntry.intersectionRatio,
    // seems like they are unnecessary to add them as deps to useEffect as I don't want them to run when it but to satisfy the linter for now
    pageValue,
    intersectionIndex,
    onHandleHasSeenItem
  ]);

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
