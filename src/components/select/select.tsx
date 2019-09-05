import React, { ChangeEvent } from "react";
import { SortTypes, SORT_TYPES } from "./select.types";

interface IProps {
  sort: SortTypes;
  onChangeSort: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ sort, onChangeSort }: IProps) {
  return (
    <select multiple={false} value={sort} onChange={onChangeSort}>
      <option value={SORT_TYPES.UNSORTED}>--</option>
      <option value={SORT_TYPES.SIZE}>Size</option>
      <option value={SORT_TYPES.PRICE}>Price</option>
      <option value={SORT_TYPES.ID}>ID</option>
    </select>
  );
}

export default Select;
