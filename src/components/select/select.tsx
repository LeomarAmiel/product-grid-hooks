import React, { ChangeEvent } from "react";
import { SortTypes, SORT_TYPES } from "./select.types";
import "./select.css";

interface IProps {
  sort: SortTypes;
  onChangeSort: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ sort, onChangeSort }: IProps) {
  return (
    <div className="sort-wrapper">
      <h2 className="sort-header">Sorting:</h2>
      <select multiple={false} value={sort} onChange={onChangeSort}>
        <option value={SORT_TYPES.UNSORTED}>--</option>
        <option value={SORT_TYPES.SIZE}>Size</option>
        <option value={SORT_TYPES.PRICE}>Price</option>
        <option value={SORT_TYPES.ID}>ID</option>
      </select>
    </div>
  );
}

export default React.memo(Select);
