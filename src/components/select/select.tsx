import React, { ChangeEvent } from "react";
import { SortTypes, SORT_TYPES } from "./select.types";
import "./select.css";
import LoadingCircle from "../loading/loading-circle";

interface IProps {
  isLoading: boolean;
  isDisabled: boolean;
  sort: SortTypes;
  onChangeSort: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ sort, onChangeSort, isLoading, isDisabled }: IProps) {
  return (
    <div className="sort-wrapper">
      <div className="inside-wrapper">
        {isLoading ? <LoadingCircle /> : null}
        <h2 className="sort-header">Sorting:</h2>
        <select
          multiple={false}
          value={sort}
          disabled={isDisabled}
          onChange={onChangeSort}
        >
          <option value={SORT_TYPES.UNSORTED}>--</option>
          <option value={SORT_TYPES.SIZE}>Size</option>
          <option value={SORT_TYPES.PRICE}>Price</option>
          <option value={SORT_TYPES.ID}>ID</option>
        </select>
      </div>
    </div>
  );
}

export default React.memo(Select);
