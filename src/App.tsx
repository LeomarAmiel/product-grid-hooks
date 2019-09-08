import React, { Fragment, useRef } from "react";
import { useSorting, useFetch, useDate } from "./hooks";
import { SORT_TYPES } from "./components/select/select.types";
import {
  Ads,
  Loading,
  ProductItem,
  Select,
  IntersectProductItem
} from "./components";
import "./App.css";

function App() {
  const listRef = useRef(null);
  console.log("listRef: ", listRef);

  const { sort, onChangeSort } = useSorting(SORT_TYPES.UNSORTED);
  const { data, isLoading } = useFetch(sort);
  const dateNow = useDate();
  return (
    <div className="App">
      <Select sort={sort} onChangeSort={onChangeSort} />
      {isLoading ? <Loading /> : null}
      <ul
        style={{ height: "100%" }}
        ref={listRef}
        className="products-list"
        id="products-list"
      >
        {data.map((value, index) => {
          if (index % 16 === 0) {
            return <IntersectProductItem {...value} dateNow={dateNow} />;
          }
          return (
            <Fragment key={value.id}>
              <ProductItem {...value} dateNow={dateNow} />
              {(index + 1) % 20 === 0 ? (
                <Ads
                  id={value.id}
                  src={`http://localhost:5000/ads/?r=${Math.floor(
                    Math.random() * 1000
                  )}`}
                />
              ) : null}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
