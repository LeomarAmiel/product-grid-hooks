import React from "react";
import ProductItem from "./product-item";
import IntersectProductItem from "./intersect-product-item";
import { IProps } from "./intersect-product-item";

interface IItem extends IProps {
  hasIntersect: boolean;
}

export default function Item({ hasIntersect, ...props }: IItem) {
  return hasIntersect ? (
    <IntersectProductItem {...props} />
  ) : (
    <ProductItem {...props} />
  );
}
